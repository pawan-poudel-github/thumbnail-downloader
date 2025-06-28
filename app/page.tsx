import { Benefits } from "@/sections/Benefits"
import { Cta } from "@/sections/Cta"
import { Faq } from "@/sections/Faq"
import { Features } from "@/sections/Features"
import { Home } from "@/sections/Home"
import { Tutorial } from "@/sections/Tutorial"
import { Download } from "lucide-react"
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ThumbnailSaver</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-to" className="text-gray-600 hover:text-primary transition-colors">
                How to Use
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
                FAQ
              </a>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

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
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ThumbnailSaver</span>
              </div>
              <p className="text-gray-400 mb-6">
                The best free YouTube thumbnail downloader. Download high-quality thumbnails instantly.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Tools</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube Thumbnail Downloader
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bulk Thumbnail Downloader
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Thumbnail Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Video Thumbnail Extractor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How to Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ThumbnailSaver. All rights reserved. Free YouTube thumbnail downloader tool.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
