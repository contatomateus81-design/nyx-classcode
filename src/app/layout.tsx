import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Nyx ClassCode — Aprenda construindo",
  description: "Uma biblioteca interativa para entender como tecnologias são construídas, do zero.",
  applicationName: "Nyx ClassCode",
  icons: {
    icon: "https://nyx-bot-creator.vercel.app/favicon.png?v=2",
    shortcut: "https://nyx-bot-creator.vercel.app/favicon.png?v=2",
    apple: "https://nyx-bot-creator.vercel.app/favicon.png?v=2",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}