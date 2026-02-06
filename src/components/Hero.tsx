"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

    // Parallax Effect
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const handleScroll = () => {
        const nextSection = document.getElementById("problem");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4"
        >

            {/* Dynamic Background with Parallax */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <img src="/trinetra_eye.png" alt="TriNetra Symbol" className="w-[800px] h-auto object-contain blur-sm" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_80%,#050505_100%)]" />
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 max-w-5xl space-y-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-8"
                >
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/50">
                        Team SHER presents
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.9]"
                >
                    HELLO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">JUDGES</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-2xl md:text-4xl font-mono uppercase tracking-widest text-emerald-500 pt-4"
                >
                    TRINETRA - The Third Eye
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed pt-6"
                >
                    Advanced Military Object Detection powered by <span className="text-emerald-500 font-medium">YOLOv9</span>.
                </motion.p>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
                onClick={handleScroll}
            >
                <div className="flex flex-col items-center gap-2 group">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] group-hover:text-emerald-500 transition-colors">Scroll to Brief</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-emerald-500 transition-colors" />
                </div>
            </motion.div>
        </section>
    );
}
