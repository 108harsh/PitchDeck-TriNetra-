"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Cpu, FileJson, Image as ImageIcon, Scan, Settings } from "lucide-react";

const steps = [
    { title: "Input Stream", icon: ImageIcon, desc: "Raw Image / Video Feed" },
    { title: "Preprocessing", icon: Settings, desc: "Resize 640x640, Norm" },
    { title: "Detection Model", icon: Cpu, desc: "YOLOv11 Nano (Quantized)" },
    { title: "Post-Processing", icon: Scan, desc: "NMS & Confidence Threshold" },
    { title: "Structured Output", icon: FileJson, desc: "Class ID, BBox, Conf" }
];

export default function SystemArchitecture() {
    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden border-b border-border/40">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest font-bold">/// Technical Schematics</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">System Architecture</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row items-center flex-1">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full bg-card border border-border p-6 rounded-sm relative group hover:border-emerald-500/50 transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-secondary rounded-full group-hover:bg-emerald-500/10 transition-colors">
                                        <step.icon className="w-6 h-6 text-foreground group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{step.title}</h4>
                                    <p className="text-xs text-muted-foreground font-mono">{step.desc}</p>
                                </div>
                            </motion.div>

                            {idx !== steps.length - 1 && (
                                <div className="flex items-center justify-center p-4 text-muted-foreground/30">
                                    <ArrowRight className="hidden lg:block w-6 h-6" />
                                    <ArrowDown className="lg:hidden w-6 h-6" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Technical Callout */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-8 px-6 py-3 bg-muted/30 border border-border rounded-sm font-mono text-xs md:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> CPU-Feasible</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Low Latency</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Format Safe</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
