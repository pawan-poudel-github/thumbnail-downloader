import { Benefits } from "@/sections/Benefits"
import { Cta } from "@/sections/Cta"
import { Faq } from "@/sections/Faq"
import { Features } from "@/sections/Features"
import { Home } from "@/sections/Home"
import { Tutorial } from "@/sections/Tutorial"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader - Download HD YouTube Thumbnails Free",
  description:
    "Download high-quality YouTube thumbnails instantly. Free YouTube thumbnail downloader tool. Get HD, Full HD, and 4K thumbnails from any YouTube video URL.",
  keywords:
    "YouTube thumbnail downloader, download YouTube thumbnails, YouTube thumbnail extractor, HD thumbnails, free thumbnail downloader",
  openGraph: {
    title: "YouTube Thumbnail Downloader - Download HD YouTube Thumbnails Free",
    description: "Download high-quality YouTube thumbnails instantly. Free YouTube thumbnail downloader tool.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>


      <main>
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
