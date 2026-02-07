"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const team = [
    {
        name: "Rishi Walokar",
        role: "Team Lead",
        image: "/team/rishi.jpg",
        links: {
            github: "https://github.com/rishiwalokar7",
            linkedin: "https://www.linkedin.com/in/rishi-walokar-798a65333/",
            instagram: "https://www.instagram.com/rishi_walokar?igsh=MXE4azd0NDlzM3NicQ=="
        }
    },
    {
        name: "Harsh Gupta",
        role: "AI Engineer",
        image: "/team/harsh.jpg",
        links: {
            github: "https://github.com/108harsh",
            linkedin: "https://www.linkedin.com/in/harsh-gupta-9a9869329/",
            instagram: "https://www.instagram.com/lucky_harsh_108?igsh=MTJ0dHMwOWlrdno0Yw=="
        }
    },
    {
        name: "Nishad Hirudkar",
        role: "Developer",
        image: "/team/nishad.jpg",
        links: {
            github: "https://github.com/nishad8109",
            linkedin: "https://www.linkedin.com/in/nishad-hirudkar-4676512b2/",
            instagram: "https://www.instagram.com/_nishad.25?igsh=MW5xcno2Y2ExYWV6NA=="
        }
    },
    {
        name: "Abhinav Singh",
        role: "Developer",
        image: "/team/abhinav.jpg",
        links: {
            github: "https://github.com/Abhinav0912007",
            linkedin: "https://www.linkedin.com/in/abhinav-singh-3081b5334/",
            instagram: "https://www.instagram.com/abhinavsingh912007?igsh=dGJoZ3ZjajBkMDRr"
        }
    }
];

export default function TeamSection() {
    return (
        <section id="team" className="py-32 px-4 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                        The Minds Behind
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        Meet The <span className="text-emerald-500">Team SHER</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <TeamCard key={idx} member={member} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamCard({ member, idx }: { member: any, idx: number }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group perspective-1000 w-full h-[400px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">
                    {member.image ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 gap-4">
                            <User className="w-16 h-16 text-white/20" />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            </div>
                        </div>
                    )}
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 backface-hidden rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col items-center justify-center gap-6 p-6 backdrop-blur-xl"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-white/60 text-sm">Connect with me</p>
                    </div>

                    <div className="flex gap-4">
                        <SocialLink href={member.links.github} icon={Github} />
                        <SocialLink href={member.links.linkedin} icon={Linkedin} />
                        <SocialLink href={member.links.instagram} icon={Instagram} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-black hover:scale-110 transition-all text-white"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}
