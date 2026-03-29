"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Instagram, Heart } from "lucide-react"

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Waitlist", href: "#waitlist" },
  { name: "Privacy", href: "#" },
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A1A3A] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-white">Micro Skill Builder</span>
            </div>
            <p className="text-white/60 text-sm">
              2 Minutes. Real AI Feedback. Lasting Change.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3B82F6] flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Micro Skill Builder. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by the IIT Westminster CS-114 Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
