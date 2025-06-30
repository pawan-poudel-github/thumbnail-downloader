import { App } from "@/components/App"
import { Globe, Shield, Zap } from "lucide-react"

export const Home = () => {
    return (
        <section className="rounded-xl mt-10 py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/15 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-gray-900 mb-6">
                Download YouTube Thumbnails
                <span className="text-primary block">In High Quality</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Extract and download YouTube video thumbnails in HD, Full HD, and 4K resolution. Free, fast, and works
                with any YouTube video URL. No registration required.
            </p>

            <App />
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mt-3">
                <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Instant Download</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>No Registration</span>
                </div>
            </div>
        </section>

    )
}