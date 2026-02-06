"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle, Database, Eye, FileText } from "lucide-react";

const steps = [
    {
        title: "Training",
        subtitle: "12-Class Dataset",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Validation",
        subtitle: "Robustness Check",
        icon: CheckCircle,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        title: "Inference",
        subtitle: "Real-time Detection",
        icon: Eye,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        title: "YOLO Output",
        subtitle: ".txt Format",
        icon: FileText,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        title: "Evaluation",
        subtitle: "Hidden Test Set",
        icon: Box,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    }
];

export default function ChallengePipeline() {
    return (
        <section className="py-24 px-4 bg-background border-b border-border/40">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary-foreground/60 font-mono text-sm uppercase tracking-widest">System Pipeline</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">End-to-End Execution Flow</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative z-10 flex flex-col items-center text-center w-full md:w-auto"
                        >
                            <div className={`w-20 h-20 rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 duration-300`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>

                            <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide px-2 py-1 bg-secondary rounded-sm">
                                {step.subtitle}
                            </p>

                            {/* Mobile Arrow */}
                            {idx !== steps.length - 1 && (
                                <ArrowRight className="md:hidden w-6 h-6 text-muted-foreground my-4 rotate-90" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
