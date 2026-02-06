"use client";

import { motion } from "framer-motion";
import { Binoculars, ShieldCheck } from "lucide-react";

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
                        From protecting sovereign borders to automating training simulations, Project TriNetra scales beyond the desktop.
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
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all group cursor-pointer"
                        >
                            <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform mb-6">
                                <item.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
