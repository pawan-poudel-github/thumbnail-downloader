"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Page = () => {
  const [url, setUrl] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    console.log("clicked")
    e.preventDefault();
    const id = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/)[6];
    let imgUrl;
    const thumbnailtype = 6;
    switch (thumbnailtype) {
      case 1:
        imgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        break;
      case 2:
        imgUrl = `https://img.youtube.com/vi_webp/${id}/maxresdefault.webp`;
        break;
      case 3:
        imgUrl = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
        break;
      case 4:
        imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        break;
      case 5:
        imgUrl = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
        break;
      case 6:
        imgUrl = `https://img.youtube.com/vi/${id}/default.jpg`;
        break;
      case 7:
        imgUrl = `https://img.youtube.com/vi/${id}/0.jpg`;
        break;
      default:
        imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    console.log(imgUrl);
  }
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-rose-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm p-4 sticky top-0 z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-300/50">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-rose-600">ThumbnailSaver</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-rose-600 hover:text-rose-700 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-rose-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-rose-600 transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-100 hover:shadow-rose-200/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Paste YouTube URL
              </h3>
              <p className="text-gray-600">
                Enter any YouTube video link to get started
              </p>
            </div>
            <form className="relative grid space-y-3" onSubmit={handleSubmit}>
              <Input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="py-6"
              />
              <Button
                type="submit"
                className="cursor-pointer py-6"
              >
                Extract Thumbnail
              </Button>
            </form>
          </div>
        </div>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center border border-rose-100">
              <svg
                className="w-16 h-16 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Download YouTube
            <span className="text-rose-600 bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text ">
              Thumbnails
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Extract high-quality thumbnails from any YouTube video instantly. Fast,
            free, and beautifully simple.
          </p>
        </div>
        {/* Download Card */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 text-center shadow-xl border border-rose-100 hover:shadow-rose-200/50">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h4>
            <p className="text-gray-600">
              Get thumbnails in seconds, not minutes. Optimized for speed and
              efficiency.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 text-center shadow-xl border border-rose-100 hover:shadow-rose-200/50">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">High Quality</h4>
            <p className="text-gray-600">
              Download thumbnails in their original resolution. Crystal clear, every
              time.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 text-center shadow-xl border border-rose-100 hover:shadow-rose-200/50">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">100% Free</h4>
            <p className="text-gray-600">
              No hidden fees, no subscriptions. Use it as much as you want,
              completely free.
            </p>
          </div>
        </div>
        {/* Results Section (Hidden by default) */}
        <div id="resultsSection" className="max-w-4xl mx-auto hidden">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Thumbnail Results
            </h3>
            <div
              id="thumbnailGrid"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Thumbnail results will be populated here */}
            </div>
          </div>
        </div>
      </main >
      {/* Footer */}
      < footer className="bg-white/80 backdrop-blur-sm mt-20 py-8 border-t border-rose-100" >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Made with ❤️ for content creators worldwide
          </p>
        </div>
      </footer >
    </section >

  )
}
export default Page