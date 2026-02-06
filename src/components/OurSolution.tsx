"use client";

import { motion } from "framer-motion";
import { Activity, Database, Zap } from "lucide-react";

const solutions = [
    {
        title: "Strategic Architecture",
        icon: Activity,
        content: "Selected YOLOv11 for superior speed-accuracy trade-off. Pruned lighter layers to maintain 60FPS on edge hardware without sacrificing mAP on small objects."
    },
    {
        title: "Data Discipline",
        icon: Database,
        content: "Rigorous augmentation pipeline (Mosaic, MixUp) to simulate occlusion and lighting variance. 80/20 stratified split ensured validation integrity."
    },
    {
        title: "Inference Reliability",
        icon: Zap,
        content: "Implemented confidence thresholding and NMS (Non-Maximum Suppression) to eliminate ghost detections and ensure strictly valid output formats."
    }
];

export default function OurSolution() {
    return (
        <section className="py-24 px-4 bg-muted/30 border-b border-border/40">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-primary font-mono text-sm uppercase tracking-widest font-bold">/// The Solution</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Engineered for Reliability</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border/50 p-8 rounded-sm hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="p-3 bg-secondary rounded-sm group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-9xl font-black text-secondary/30 -mt-8 -mr-4 select-none pointer-events-none">
                                    0{idx + 1}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l-2 border-primary/20 pl-4">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
