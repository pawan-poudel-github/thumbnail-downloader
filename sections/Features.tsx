import { Download, Globe, Monitor, Shield, Smartphone, Zap } from "lucide-react"

export const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Our YouTube Thumbnail Downloader?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Our tool offers the best features for downloading YouTube thumbnails with superior quality and speed.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Download className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Resolutions</h3>
                        <p className="text-gray-600 text-lg">
                            Download thumbnails in various resolutions:1280x720, 480x360, 320x180 and 1280x720 WebP format for high-quality
                            pixels.
                        </p>
                    </article>
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                        <p className="text-gray-600 text-lg">
                            Get your YouTube thumbnails instantly. Our optimized servers ensure quick processing and download
                            speeds.
                        </p>
                    </article>
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Safe & Secure</h3>
                        <p className="text-gray-600 text-lg">
                            No malware, no viruses. Your privacy is protected. We don&apos;t store your data or downloaded thumbnails.
                        </p>
                    </article>
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Smartphone className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Friendly</h3>
                        <p className="text-gray-600 text-lg">
                            Works perfectly on all devices - desktop, tablet, and mobile. Download thumbnails anywhere, anytime.
                        </p>
                    </article>
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">No Registration</h3>
                        <p className="text-gray-600 text-lg">
                            Start downloading immediately. No account creation, no email verification, no hidden fees.
                        </p>
                    </article>
                    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                            <Monitor className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">All Formats Supported</h3>
                        <p className="text-gray-600 text-lg">
                            Compatible with regular YouTube videos, YouTube Shorts, live streams, and private videos (if
                            accessible).
                        </p>
                    </article>
                </div>
            </div>
        </section>

    )
}