import Link from "next/link"

export const Cta = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Download YouTube Thumbnails?</h2>
                <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                    Start using our free YouTube thumbnail downloader now. No registration required, instant downloads, and
                    all resolutions available.
                </p>
                <Link href={"/#home"} className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Get Started Now
                </Link>
            </div>
        </section>
    )
}