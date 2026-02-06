"use client";

import { motion } from "framer-motion";
import { Camera, FileText, Image as ImageIcon, Map, Ruler, Video } from "lucide-react";

const features = [
    {
        title: "Video Analysis",
        icon: Video,
        description: "Upload surveillance footage to detect all 12 military classes frame-by-frame.",
        detail: "Full Frame Capture"
    },
    {
        title: "Real-Time Live Feed",
        icon: Camera,
        description: "Connect via IP Cam to mobile devices for instant, real-time object labeling.",
        detail: "Zero Latency"
    },
    {
        title: "Image Intelligence",
        icon: ImageIcon,
        description: "Upload unlabeled images; our model instantly identifies classes and generates tagged outputs.",
        detail: "Auto-Labeling"
    },
    {
        title: "Safe Path Generation",
        icon: Map,
        description: "Detects hostile objects in imagery and calculates the safest traversal route.",
        detail: "Pathfinding (Beta)"
    }
];

const extras = [
    { text: "Distance Estimation (Metres)", icon: Ruler },
    { text: "PDF Report Generation", icon: FileText },
    { text: "User-Friendly UI", icon: ImageIcon }
];

export default function OurSolution() {
    return (
        <section id="features" className="py-32 bg-black/50 relative">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Operational Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
                    >
                        OUR SOLUTION : <span className="text-emerald-500">TRINETRA</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-xl font-light max-w-3xl mx-auto">
                        Designed for military bases to detect <span className="text-white font-medium">12 critical classes</span> in limited time.
                        The Third Eye that never blinks.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{feature.detail}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/5 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-around gap-8 text-center"
                >
                    {extras.map((extra, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white/80">
                            <extra.icon className="w-5 h-5 text-emerald-500" />
                            <span className="font-medium tracking-wide">{extra.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
