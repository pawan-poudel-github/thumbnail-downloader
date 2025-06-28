import { ChevronDown } from "lucide-react"

export const Faq = () => {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get answers to common questions about our YouTube thumbnail downloader tool.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    <article className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">Is it legal to download YouTube thumbnails?</h3>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-600 mt-4">
                            Yes, downloading YouTube thumbnails for personal use, research, or fair use purposes is generally
                            legal. However, always respect copyright laws and YouTube&apos;s terms of service.
                        </p>
                    </article>
                    <article className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">What resolutions are available for download?</h3>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-600 mt-4">
                            We provide thumbnails in multiple resolutions: 120x90 (default), 320x180 (medium), 480x360 (high),
                            640x480 (standard), 1280x720 (HD), and 1920x1080 (Full HD) when available.
                        </p>
                    </article>
                    <article className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">Do you store the downloaded thumbnails?</h3>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-600 mt-4">
                            No, we don&apos;t store any thumbnails or user data. All processing happens in real-time, and thumbnails
                            are directly downloaded to your device.
                        </p>
                    </article>
                    <article className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Can I download thumbnails from private videos?
                            </h3>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-600 mt-4">
                            You can only download thumbnails from videos that are publicly accessible. Private or restricted
                            videos cannot be processed by our tool.
                        </p>
                    </article>
                    <article className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Is there a limit to how many thumbnails I can download?
                            </h3>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-600 mt-4">
                            Our service is completely free with no download limits. You can download as many YouTube thumbnails as
                            you need without any restrictions.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}