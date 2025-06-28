import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ThumbnailSaver - YouTube Thumbnail Downloader",
  description: "Download high-quality YouTube thumbnails instantly. Free YouTube thumbnail downloader tool. Get HD, Full HD, and 4K thumbnails from any YouTube video URL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} antialiased`}
      >
        {children}
        <Toaster expand={false} position="bottom-center" richColors={true} invert style={{
          fontFamily: "var(--font-montserrat)",
        }} closeButton duration={1500} />
      </body>
    </html>
  );
}
