import { Toaster } from "@/components/ui/sonner";
import { Download } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-site-verification-link" async src="https://www.googletagmanager.com/gtag/js?id=G-VE83E7H6LZ" />
        <Script id="googlse-site-verification-code">
          {
            `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VE83E7H6LZ');
            `
          }
        </Script>
      </head>
      <body
        className={`${montserrat.className} ${montserrat.variable} antialiased`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ThumbnailSaver</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#features" className="text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/#how-to" className="text-gray-600 hover:text-primary transition-colors">
                  How to Use
                </Link>
                <Link href="/#faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
                <Link href="/#home" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </header >
        {children}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Link href="/#" className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">ThumbnailSaver</span>
                </Link>
                <p className="text-gray-400 mb-6">
                  The best free YouTube thumbnail downloader. Download high-quality thumbnails instantly.
                </p>

              </div>
               <div>
                <h3 className="text-lg font-semibold mb-6">Tools</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="https://testthumbnail.me" target="_blank" className="hover:text-white transition-colors">
                      YouTube Thumbnail Tester
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#features" className="hover:text-white transition-colors">
                      features
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-to" className="hover:text-white transition-colors">
                      How to Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>

                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Legal</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>

                  <li>
                    <a href="/contact" className="hover:text-white transition-colors">
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
        <Toaster expand={false} position="bottom-center" richColors={true} invert style={{
          fontFamily: "var(--font-montserrat)",
        }} closeButton duration={1500} />
      </body>
    </html >
  );
}
