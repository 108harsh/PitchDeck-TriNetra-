"use client";

import { motion } from "framer-motion";
import { Crosshair, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
    { name: "Mission", href: "#hero" },
    { name: "Threats", href: "#problem" },
    { name: "Tech", href: "#solution" },
    { name: "Impact", href: "#impact" },
    { name: "Live Demo", href: "#demo" },
];

export default function FloatingNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between"
            >
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => scrollToSection("#hero")}
                >
                    <div className="p-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                        <Crosshair className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="font-bold text-sm tracking-widest text-white/90 group-hover:text-white transition-colors">Home</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button
                        size="sm"
                        variant="outline"
                        className="h-8 rounded-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 text-xs tracking-wide"
                        onClick={() => scrollToSection("#demo")}
                    >
                        Launch
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white/80"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="w-5 h-5" />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-2xl font-light tracking-tight text-white/80 hover:text-emerald-500 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        className="absolute top-8 right-8 text-white/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
}
