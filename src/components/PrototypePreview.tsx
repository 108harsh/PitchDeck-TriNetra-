"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function PrototypePreview() {
    return (
        <section id="demo" className="py-32 px-4 bg-white/5 relative overflow-hidden border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter text-white">
                        LIVE DEMO
                    </h2>
                    <p className="text-2xl text-muted-foreground font-light mb-12">
                        Server Ready. Awaiting Input.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="https://jagriti-dashboard.onrender.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="h-16 rounded-full px-12 text-lg font-bold bg-white text-black hover:bg-emerald-400 hover:text-black transition-colors w-full">
                            Launch
                            <ExternalLink className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                    <a href="https://dashboardtrinetra.streamlit.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="h-16 rounded-full px-12 text-lg bg-transparent border-white/20 text-white hover:bg-white/10 w-full">
                            View Dashboard
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>

                <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30 uppercase tracking-widest gap-4">
                    <span>© 2026 Team SHER</span>
                    <span>TriNetra - The Third Eye</span>
                    <span>Verified Build v1.0.4</span>
                </div>

            </div>
        </section>
    );
}
