import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/SwayamWakodikar",
            color: "hover:text-purple-400"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/swayam-wakodikar",
            color: "hover:text-blue-400"
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:swayam.wakodikar@example.com",
            color: "hover:text-cyan-400"
        },
        {
            name: "LeetCode",
            icon: ExternalLink,
            url: "https://leetcode.com/u/swayam_w06/",
            color: "hover:text-yellow-400"
        }
    ];

    const quickLinks = [
        { name: "About Me", href: "#About" },
        { name: "Skills", href: "#Skills" },
        { name: "Projects", href: "#Projects" },
        { name: "Stats", href: "#Stats" },
        { name: "Leadership", href: "#Leadership" },
        { name: "Contact", href: "#Contact" }
    ];

    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative w-full bg-transparent border-t border-white/10 mt-20">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Swayam Wakodikar
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            Electronics & Communication Engineering student passionate about software development,
                            embedded systems, and building innovative solutions.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <MapPin size={18} className="text-cyan-400" />
                            <span>VIT-AP, Amaravati</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Mail size={18} className="text-cyan-400" />
                            <a href="mailto:swayam.wakodikar@example.com" className="hover:text-cyan-300 transition-colors">
                                swayam.wakodikar@example.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                                        className="text-gray-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-xl bg-white/5 border border-white/10 ${social.color} 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                    hover:-translate-y-1 group`}
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} className="transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-gray-500 text-sm mt-6">
                            Open to collaborations and opportunities
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {currentYear} Swayam Wakodikar. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            Built with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind</span>
                        </span>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </footer>
    );
};

export default Footer;
