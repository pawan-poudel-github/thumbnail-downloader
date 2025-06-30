"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [id, setId] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const match = url.match(
            /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        );

        const extractedId = match ? match[6] : null;
        if (!extractedId) {
            toast("Invalid url.", {
                description: "Please enter a valid YouTube video URL.",
                icon: "🚫",
            });
            return;
        }

        setId(extractedId);
        setIsOpen(true);
    };

    const downloadImage = async (imageSrc: string) => {
        const proxyURL = `https://proxy-youtube-webp.vercel.app/?url=${encodeURIComponent(imageSrc)}`;
        try {
            const image = await fetch(proxyURL)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)
            if (!image.ok) {
                toast("Cannot Download.", {
                    description: "The image format is not accessible.",
                    icon: "🚫",
                });
                return
            }
            const link = document.createElement('a')
            link.href = imageURL
            link.download = 'thumbnail.' + imageSrc.split('.').pop()
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch {
            toast("Cannot Download.", {
                description: "The image is format not accessible.",
                icon: "🚫",
            });
        }
    }

    return (
        <>
            <div className="container mx-auto px-4 ">
                <div className="max-w-4xl mx-auto bg-background rounded-md p-2 px-3">
                    <form className="flex flex-col md:flex-row" onSubmit={handleSubmit}>
                        <div className="flex items-center gap-1 w-full">
                            <Search />
                            <input
                                type="url"
                                required
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://www.youtube.com/watch?v=..."
                                className="flex-1 px-6 py-3 border-0 rounded-lg ring-0 outline-0 text-lg focus:outline-0 focus:ring-0 focus:border-0"
                            />
                        </div>
                        <button type="submit" className="bg-primary/90 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/100 transition-colors whitespace-nowrap">
                            Get Thumbnails
                        </button>
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>

                            <DialogContent className="sm:max-w-2xl">
                                <DialogHeader>
                                    <DialogTitle>Download Thumbnail</DialogTitle>
                                    <DialogDescription>
                                        Choose your format from below.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            {
                                                format: "jpg-max",
                                                icon: "📸",
                                                title: "JPG - Max Quality",
                                                resolution: "1280×720",
                                                url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
                                            },
                                            {
                                                format: "jpg-hq",
                                                icon: "📸",
                                                title: "JPG - High Quality",
                                                resolution: "480×360",
                                                url: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
                                            },
                                            {
                                                format: "jpg-mq",
                                                icon: "📸",
                                                title: "JPG - Medium Quality",
                                                resolution: "320×180",
                                                url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`
                                            },
                                            {
                                                format: "webp-max",
                                                icon: "🖼️",
                                                title: "WebP - Max Quality",
                                                resolution: "1280×720",
                                                url: `https://img.youtube.com/vi_webp/${id}/maxresdefault.webp`
                                            }
                                        ].map(({ format, icon, title, resolution, url }) => (
                                            <div
                                                key={format}
                                                onClick={() => downloadImage(url)}
                                                data-format={format}
                                                className="group p-3 rounded-lg border shadow-sm cursor-pointer transition-all hover:shadow-md"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="text-2xl">{icon}</div>
                                                    <div>
                                                        <h3 className="text-base font-medium">{title}</h3>
                                                        <p className="text-sm">{resolution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </DialogContent>
                        </Dialog>

                    </form>
                </div>

            </div>
        </>
    )
}