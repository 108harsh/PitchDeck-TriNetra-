"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Layers } from "lucide-react";

export default function FutureScope() {
    return (
        <section className="py-24 px-4 border-b border-border/40">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Deployment Roadmap
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Edge Deployment", icon: Cpu, desc: "Jetson Nano Optimization" },
                        { title: "INT8 Quantization", icon: Layers, desc: "4x Smaller Model Size" },
                        { title: "Multi-Stream", icon: Globe, desc: "Concurrent CCTV Feeds" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6 bg-muted/10 border border-dashed border-border rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <item.icon className="w-8 h-8 text-muted-foreground mb-4" />
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
