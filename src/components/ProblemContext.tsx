"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { EyeOff, MonitorX, Target } from "lucide-react";
import { useRef } from "react";

const problems = [
    {
        title: "Camouflage Failure",
        icon: EyeOff,
        description: "Standard models fail to detect soldiers and assets hidden in natural clutter or low-light conditions.",
        stat: "High Miss Rate",
        class: "bg-zinc-900/50 border-zinc-800"
    },
    {
        title: "Class Confusion",
        icon: Target,
        description: "Critical inability to distinguish between Military Trucks and Civilian Vehicles in urban combat zones.",
        stat: "High False Positives",
        class: "bg-zinc-900/80 border-zinc-700"
    },
    {
        title: "Operational Gap",
        icon: MonitorX,
        description: "Lack of real-time, lightweight interfaces creates a disconnect between model capability and field usage.",
        stat: "Slower Response",
        class: "bg-zinc-900 border-zinc-600"
    },
];

export default function ProblemContext() {
    return (
        <section id="problem" className="relative py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-32 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                    >
                        Major <span className="text-emerald-500">Threats</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-xl font-light">
                        Why standard models fail in the theater of war.
                    </p>
                </div>

                {/* Stacking Cards */}
                <div className="space-y-4 max-w-5xl mx-auto">
                    {problems.map((item, idx) => (
                        <Card key={idx} item={item} idx={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function Card({ item, idx }: { item: any, idx: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Scale effect for stacking
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, y }}
            className={`sticky top-32 p-10 md:p-14 rounded-3xl border backdrop-blur-xl ${item.class} flex flex-col md:flex-row gap-10 items-start shadow-2xl`}
        >
            <div className="flex-1">
                <div className="flex items-center gap-6 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="text-sm font-mono text-emerald-500/50 uppercase tracking-widest">Threat 0{idx + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {item.description}
                </p>
            </div>

            <div className="w-full md:w-auto p-6 bg-black/40 rounded-2xl border border-white/5 whitespace-nowrap">
                <div className="text-4xl font-black text-white mb-2">{item.stat}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Impact Factor</div>
            </div>
        </motion.div>
    );
}
