"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function FinalCTA() {
    return (
        <section className="py-32 px-4 bg-background relative overflow-hidden flex flex-col items-center text-center">

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-2xl"
            >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
                    <Zap className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready for Deployment?</h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                    Experience the full capabilities of the Serve Smart system through our live interactive dashboard.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
                        Open Live Dashboard
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                        <Github className="mr-2 w-5 h-5" />
                        View Source
                    </Button>
                </div>

                <p className="mt-16 text-xs text-muted-foreground font-mono uppercase tracking-widest opacity-50">
                    Serve Smart System // Round 3 Finalist // IIT BHU
                </p>
            </motion.div>
        </section>
    );
}
