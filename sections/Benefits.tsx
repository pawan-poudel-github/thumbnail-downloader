import { BarChart3, Eye, Lightbulb, Palette, TrendingUp, Users } from "lucide-react"

export function Benefits() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fillRule='evenodd'><g fill='%239C92AC' fillOpacity='0.05'><circle cx='30' cy='30' r='2'/></g></g></svg>")`,
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-6">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Perfect for Professionals</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                        Content Creators &<br />
                        Marketers Love It
                    </h2>
                    <p className="text-xl text-slate-300 max-w3xl mx-auto leading-relaxed">
                        Our YouTube thumbnail downloader is the essential tool for various use cases and creative professionals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Use Cases Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Use Cases</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                {
                                    icon: BarChart3,
                                    text: "Content creators analyzing competitor thumbnails",
                                    color: "from-blue-500 to-cyan-500",
                                },
                                { icon: Users, text: "Social media managers creating content", color: "from-purple-500 to-pink-500" },
                                {
                                    icon: TrendingUp,
                                    text: "Researchers studying video marketing trends",
                                    color: "from-green-500 to-emerald-500",
                                },
                                {
                                    icon: Palette,
                                    text: "Designers seeking inspiration for thumbnails",
                                    color: "from-orange-500 to-red-500",
                                },
                                {
                                    icon: Lightbulb,
                                    text: "Educators creating educational materials",
                                    color: "from-yellow-500 to-orange-500",
                                },
                            ].map((item, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                                        <div
                                            className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                                            {item.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="lg:sticky lg:top-8">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Why Thumbnails Matter</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Click-through rate impact", value: "+90%", color: "from-green-400 to-emerald-400" },
                                    { label: "First impression time", value: "0.05s", color: "from-blue-400 to-cyan-400" },
                                    { label: "Viewer decision factor", value: "Primary", color: "from-purple-400 to-pink-400" },
                                ].map((stat, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                            <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                                                {stat.label}
                                            </span>
                                            <div className={`px-4 py-2 bg-gradient-to-r ${stat.color} rounded-xl`}>
                                                <span className="text-white font-bold text-lg">{stat.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Additional visual element */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                                <p className="text-purple-200 text-center font-medium">
                                    {"Thumbnails are the first thing viewers see - make them count! 🎯"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
