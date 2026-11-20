import base64
import hashlib
import hmac
import json
import os
import time
from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

from yt_dlp import YoutubeDL
from yt_dlp.utils import DownloadError

COOKIE_NAME = "classcode_admin"
MAX_BODY = 8192
MAX_VIDEOS = 200
ALLOWED_HOSTS = {
    "youtube.com",
    "www.youtube.com",
    "m.youtube.com",
    "music.youtube.com",
    "youtu.be",
}


def is_admin(headers):
    secret = os.environ.get("ADMIN_SESSION_SECRET", "")
    if len(secret) < 32:
        return False

    cookie_header = headers.get("Cookie", "")
    cookie_value = ""
    for part in cookie_header.split(";"):
        name, separator, value = part.strip().partition("=")
        if separator and name == COOKIE_NAME:
            cookie_value = value
            break

    if not cookie_value or "." not in cookie_value:
        return False

    payload, supplied = cookie_value.split(".", 1)
    if not payload.isdigit() or not supplied:
        return False
    if int(payload) < int(time.time()):
        return False

    expected = base64.urlsafe_b64encode(
        hmac.new(secret.encode(), payload.encode(), hashlib.sha256).digest()
    ).decode().rstrip("=")
    return hmac.compare_digest(supplied, expected)


def format_duration(value):
    if value is None:
        return ""
    seconds = max(0, int(value))
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    if hours:
        return f"{hours}:{minutes:02d}:{seconds:02d}"
    return f"{minutes}:{seconds:02d}"


def send_json(handler, status, payload):
    encoded = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Content-Length", str(len(encoded)))
    handler.end_headers()
    handler.wfile.write(encoded)


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if not is_admin(self.headers):
            return send_json(self, 401, {"error": "Acesso não autorizado."})

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            return send_json(self, 400, {"error": "Requisição inválida."})
        if length <= 0 or length > MAX_BODY:
            return send_json(self, 413, {"error": "Link inválido ou requisição muito grande."})

        try:
            body = json.loads(self.rfile.read(length).decode("utf-8"))
            playlist_url = body.get("url", "").strip()
            parsed = urlparse(playlist_url)
            host = (parsed.hostname or "").lower()
            playlist_id = parse_qs(parsed.query).get("list", [None])[0]
            if parsed.scheme != "https" or host not in ALLOWED_HOSTS or not playlist_id:
                return send_json(self, 400, {
                    "error": "Link inválido. Cole o endereço de uma playlist pública do YouTube."
                })

            options = {
                "extract_flat": "in_playlist",
                "skip_download": True,
                "quiet": True,
                "no_warnings": True,
                "ignoreerrors": True,
                "playlistend": MAX_VIDEOS,
                "noplaylist": False,
                "socket_timeout": 15,
                "retries": 1,
                "extractor_retries": 1,
                "cachedir": False,
            }

            with YoutubeDL(options) as ydl:
                info = ydl.extract_info(playlist_url, download=False)

            if not info:
                return send_json(self, 404, {
                    "error": "Não foi possível encontrar vídeos nessa playlist. Confira se ela está pública ou não listada."
                })

            entries = info.get("entries") or []
            videos = []
            for index, entry in enumerate(entries):
                if not entry:
                    continue
                video_id = entry.get("id")
                if not video_id:
                    continue

                thumbnail = entry.get("thumbnail")
                if not thumbnail:
                    thumbs = entry.get("thumbnails") or []
                    if thumbs:
                        thumbnail = thumbs[-1].get("url")

                try:
                    position = int(entry.get("playlist_index") or index + 1) - 1
                except (TypeError, ValueError):
                    position = index

                videos.append({
                    "videoId": str(video_id),
                    "position": position,
                    "title": entry.get("title") or "Vídeo sem título",
                    "description": entry.get("description") or "",
                    "channel": entry.get("channel") or entry.get("uploader") or "Canal do YouTube",
                    "duration": format_duration(entry.get("duration")),
                    "thumbnailUrl": thumbnail or f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg",
                    "youtubeUrl": f"https://www.youtube.com/watch?v={video_id}",
                })

            if not videos:
                return send_json(self, 404, {
                    "error": "Nenhum vídeo disponível foi encontrado nessa playlist."
                })

            total_entries = info.get("playlist_count") or info.get("n_entries") or len(videos)
            return send_json(self, 200, {
                "playlistId": playlist_id,
                "playlistTitle": info.get("title") or "Playlist do YouTube",
                "total": len(videos),
                "truncated": len(videos) >= MAX_VIDEOS and int(total_entries or 0) > MAX_VIDEOS,
                "videos": videos,
            })
        except DownloadError:
            return send_json(self, 502, {
                "error": "O yt-dlp não conseguiu ler essa playlist agora. Ela precisa estar pública ou não listada; tente novamente mais tarde."
            })
        except Exception:
            return send_json(self, 500, {
                "error": "Falha ao consultar a playlist. Verifique o link e tente novamente."
            })

    def do_GET(self):
        send_json(self, 405, {"error": "Método não permitido."})

    def log_message(self, format, *args):
        return
