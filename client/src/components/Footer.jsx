import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
);

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
            url: "mailto:swayam.w06@gmail.com",
            color: "hover:text-cyan-400"
        },
        {
            name: "LeetCode",
            icon: LeetCodeIcon,
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
        <footer className="relative w-full bg-transparent border-t border-black/10 dark:border-white/10 mt-20">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-black/50 to-white dark:to-black pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Swayam Wakodikar
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
                            Electronics & Communication Engineering student passionate about software development,
                            embedded systems, and building innovative solutions.
                        </p>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                            <MapPin size={18} className="text-cyan-600 dark:text-cyan-400" />
                            <span>VIT-AP, Amaravati</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Mail size={18} className="text-cyan-600 dark:text-cyan-400" />
                            <a href="mailto:swayam.w06@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                                swayam.w06@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                                        className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group"
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
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 ${social.color} 
                    hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 
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
                <div className="h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                        © {currentYear} Swayam Wakodikar. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-2">
                            Made by <span className="text-cyan-400">Swayam Wakodikar</span> with React & <span className="text-cyan-400">Tailwind</span>
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
