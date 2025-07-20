import { Benefits } from "@/sections/Benefits"
import { Cta } from "@/sections/Cta"
import { Faq } from "@/sections/Faq"
import { Features } from "@/sections/Features"
import { Home } from "@/sections/Home"
import { Tutorial } from "@/sections/Tutorial"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ThumbnailSaver - Free YouTube Thumbnail Downloader",
  description: "Free YouTube thumbnail downloader to save HD, Full HD, and 4K thumbnails instantly. No ads, no signup.",
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
