export const Tutorial = () => {
    return (
        <section id="how-to" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">How to Download YouTube Thumbnails</h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Follow these simple steps to download high-quality YouTube thumbnails in seconds.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        <article className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Copy YouTube Video URL</h3>
                                <p className="text-gray-600 text-lg">
                                    Go to YouTube and copy the URL of the video whose thumbnail you want to download. You can copy it
                                    from the address bar or use the share button.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Paste URL in Our Tool</h3>
                                <p className="text-gray-600 text-lg">
                                    Paste the YouTube video URL into our thumbnail downloader input field above and click &quot;Get
                                    Thumbnails&quot;.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Choose Resolution & Download</h3>
                                <p className="text-gray-600 text-lg">
                                    Select your preferred thumbnail resolution (HD, Full HD, or 4K) and click download. The thumbnail
                                    will be saved to your device instantly.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}