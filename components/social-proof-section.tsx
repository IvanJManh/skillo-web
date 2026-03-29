"use client"

import { motion } from "framer-motion"
import { TrendingUp, Brain, Users, Quote } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "50%",
    label: "faster skill acquisition vs. passive video",
  },
  {
    icon: Brain,
    value: "17%",
    label: "higher learning efficiency with micro-sessions",
  },
  {
    icon: Users,
    value: "94%",
    label: "of beta users felt more confident in presentations",
  },
]

export function SocialProofSection() {
  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A3A] mb-4 text-balance">
            Transform Your Micro-Moments
          </h2>
          <p className="text-lg text-[#0A1A3A]/60 max-w-2xl mx-auto">
            Real results from real users who committed to just 2 minutes a day
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#E0F2FE] to-white border border-[#E0F2FE]"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-[#3B82F6]" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[#3B82F6] mb-2">{stat.value}</div>
              <p className="text-[#0A1A3A]/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-[#0A1A3A] rounded-3xl p-8 sm:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#3B82F6]/30" />
            
            <blockquote className="relative z-10">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8 text-pretty">
                {"\""}The mirror mode is like having a coach in your pocket. The feedback is instant and surprisingly accurate.{"\""}
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <p className="text-white font-semibold">Beta Tester</p>
                  <p className="text-white/60 text-sm">Early Access Program</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
