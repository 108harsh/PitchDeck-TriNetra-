"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Eye, Layers, ScanEye, Zap } from "lucide-react";

export default function SolutionDetailed() {
    return (
        <section id="architecture" className="py-32 px-4 bg-background border-t border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        System <span className="text-emerald-500">Architecture</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-xl max-w-2xl">
                        Optimized <span className="text-white">YOLOv9-s</span> pipeline running on consumer hardware.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">

                    {/* Core Model - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                            <ScanEye className="w-48 h-48 text-emerald-500" />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wide border border-emerald-500/20 mb-6">
                                Core Engine
                            </div>
                            <h3 className="text-4xl font-bold mb-4">YOLOv9-s Custom</h3>
                            <p className="text-muted-foreground text-lg max-w-md">
                                Retrained on a curated dataset of 12 Military/Civilian classes. Optimized for distinguishing camouflaged assets in high-clutter environments.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-2xl font-bold text-white">62 FPS</div>
                                <div className="text-xs text-white/40 uppercase">Inference</div>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-2xl font-bold text-white">High</div>
                                <div className="text-xs text-white/40 uppercase">Recall</div>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-2xl font-bold text-white">6GB</div>
                                <div className="text-xs text-white/40 uppercase">VRAM</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hardware - Tall Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -right-8 -top-8 w-48 h-48 opacity-50 group-hover:opacity-80 transition-opacity rotate-12">
                            <img src="/gpu_chip.png" alt="RTX Chip" className="w-full h-full object-contain" />
                        </div>

                        <Cpu className="w-12 h-12 text-blue-500 mb-auto relative z-10" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">RTX 4050 <br />Optimized</h3>
                            <p className="text-muted-foreground text-sm">
                                Batch-tuned for 6GB VRAM.
                                No cloud dependency.
                                Edge-ready deployment.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {[
                        { title: "640px Input", desc: "High-res retraining for small objects.", icon: Eye },
                        { title: "12 Classes", desc: "Custom annotated dataset.", icon: Database },
                        { title: "Real-time UI", desc: "Interactive dashboard.", icon: Layers },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-6 h-6 text-white/50" />
                            <div>
                                <h4 className="font-bold text-white">{item.title}</h4>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
