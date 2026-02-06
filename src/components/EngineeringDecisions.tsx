"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const tradeoffs = [
    {
        decision: "YOLOv11 Nano vs Medium",
        rationale: "Selected Nano to prioritize FPS on edge devices. Sacrificed ~1.5% mAP for a +40% gain in inference speed.",
        type: "Efficiency"
    },
    {
        decision: "Aggressive Mosaic Augmentation",
        rationale: "Heavily used Mosaic to force the model to learn small object features, mitigating the lack of diverse small-scale samples in the dataset.",
        type: "Data Strategy"
    },
    {
        decision: "FP16 Quantization",
        rationale: "Halved model size and memory footprint with negligible accuracy loss (<0.1%), enabling deployment on Raspberry Pi class hardware.",
        type: "Deployment"
    }
];

export default function EngineeringDecisions() {
    return (
        <section className="py-24 px-4 bg-background border-b border-border/40">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-2">Engineering Trade-offs</h2>
                    <p className="text-muted-foreground">Every architectural choice was deliberate.</p>
                </motion.div>

                <div className="space-y-6">
                    {tradeoffs.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border/60 hover:border-primary/40 rounded-sm p-6 flex flex-col md:flex-row gap-6 transition-colors"
                        >
                            <div className="md:w-1/4">
                                <span className="text-xs font-mono uppercase bg-secondary px-2 py-1 rounded-sm text-muted-foreground">{t.type}</span>
                                <h4 className="font-bold mt-2 text-lg">{t.decision}</h4>
                            </div>
                            <div className="md:w-3/4 border-l border-border/50 pl-6 flex flex-col justify-center">
                                <p className="text-muted-foreground text-sm leading-relaxed">{t.rationale}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
