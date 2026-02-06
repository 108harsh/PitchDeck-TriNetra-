"use client";

import { motion } from "framer-motion";
import { Binoculars, Laptop, ShieldCheck, Siren } from "lucide-react";

export default function BusinessSocialImpact() {
    return (
        <section id="impact" className="py-32 px-4 bg-background">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

                {/* Sticky Content */}
                <div className="md:sticky md:top-32 h-fit">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        Global <br /> <span className="text-white/40">Implication</span>
                    </motion.h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                        From protecting sovereign borders to automating training simulations, Project SHER scales beyond the desktop.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-emerald-500 mb-1">Dual Use</div>
                            <div className="text-sm text-white/40 uppercase">Military & Civil</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-500 mb-1">100%</div>
                            <div className="text-sm text-white/40 uppercase">Offline Ready</div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="space-y-12">
                    {[
                        { title: "Border Surveillance", desc: "Automating perimeter defense against unauthorized movement.", icon: Binoculars },
                        { title: "Battlefield Awareness", desc: "Drone-feed analysis for Tank and Artillery mapping.", icon: ShieldCheck },
                        { title: "Hackathon Ready", desc: "Modular architecture designed for rapid prototype deployment.", icon: Laptop },
                        { title: "Disaster Response", desc: "Identifying survivors in high-clutter debris fields.", icon: Siren },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-white mb-6" />
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
