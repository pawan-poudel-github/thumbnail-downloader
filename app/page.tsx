import { Benefits } from "@/sections/Benefits"
import { Cta } from "@/sections/Cta"
import { Faq } from "@/sections/Faq"
import { Features } from "@/sections/Features"
import { Home } from "@/sections/Home"
import { Tutorial } from "@/sections/Tutorial"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ThumbnailSaver - Free YouTube Thumbnail Downloader",
  description: "ThumbnailSaver is a fast and free tool to download YouTube thumbnails in HD, Full HD, and 4K. Instantly save high-quality thumbnails from any YouTube video URL. No ads. No signup.",
  keywords: [
    "youtube thumbnail downloader",
    "download youtube thumbnail",
    "download thumbnail from youtube",
    "thumbnail youtube download",
    "thumbnail downloader",
    "thumbnail downloader youtube",
    "youtube video thumbnail download",
    "youtube thumbnail download",
    "youtube thumbnail download tool",
    "youtube thumbnail download free",
    "youtube thumbnail download high quality",
    "youtube thumbnail download hd",
    "how to download a youtube thumbnail",
    "download thumbnail from youtube video",
    "free youtube thumbnail downloader",
    "get youtube video thumbnail",
    "youtube thumbnail image download"
  ]
};


export default function HomePage() {
  return (
    <>
      <main className="px-4">
        {/* Hero Section */}
        <Home />

        {/* Features Section */}
        <Features />
        {/* How to Use Section */}
        <Tutorial />
        {/* Benefits Section */}
        <Benefits />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <Cta />
      </main>

      {/* Footer */}

    </>

  )
}
