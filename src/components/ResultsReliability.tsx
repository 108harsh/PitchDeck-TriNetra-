"use client";

import { motion } from "framer-motion";

const metrics = [
    { label: "mAP @ 0.5", value: "94.2%", desc: "High Precision" },
    { label: "Inference Speed", value: "62 FPS", desc: "Real-Time (Edge)" },
    { label: "Recall Rate", value: "91.8%", desc: "Minimal Misses" },
    { label: "Model Size", value: "6.4 MB", desc: "Ultra-Lightweight" },
];

export default function ResultsReliability() {
    return (
        <section className="py-24 px-4 bg-muted/20 border-b border-border/40">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary-foreground/60 font-mono text-sm uppercase tracking-widest">Performance Validation</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Operational Metrics</h2>
                    <p className="mt-4 text-muted-foreground">Optimized for consistent performance under real-world variation.</p>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {metrics.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border p-6 text-center rounded-sm hover:border-primary/40 transition-colors"
                        >
                            <div className="text-3xl md:text-4xl font-black text-foreground mb-1">{m.value}</div>
                            <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-2">{m.label}</div>
                            <div className="text-[10px] text-primary bg-primary/10 inline-block px-2 py-0.5 rounded-full">{m.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Proof Mockup */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/50 aspect-video rounded-sm border border-border p-2 relative overflow-hidden"
                    >
                        <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 text-white text-xs font-mono">Input: Low Light</div>
                        {/* Abstract representation of detection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-900 opacity-80" />
                        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-red-500/70" />
                        <div className="absolute bottom-1/3 right-1/4 w-30 h-16 border-2 border-red-500/70" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">Standardized Robustness</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our system maintains detection integrity even when inputs are degraded.
                            By training on augmented datasets including <span className="text-foreground font-semibold">Gaussian noise, random erasing, and CLAHE enhanced imagery</span>,
                            we achieve stable bounding boxes where standard pre-trained models fail.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
