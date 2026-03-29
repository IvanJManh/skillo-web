"use client"

import { motion } from "framer-motion"
import { Play, Camera, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Play,
    title: "Pick Your Skill",
    description: "Choose from 100+ skills: Confident Handshake, Interview Answer, Impromptu Pitch.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Camera,
    title: "Practice with AI Mirror",
    description: "Our AI analyzes your posture, vocal tone & facial cues in real-time.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Get Instant Feedback",
    description: "Receive precise tips: 'Speak 20% slower,' 'Maintain eye contact,' 'Smile more.'",
    color: "from-blue-400 to-indigo-500",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px),
                           linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A3A] mb-4 text-balance">
            Your 2-Minute Daily Ritual for Growth
          </h2>
          <p className="text-lg text-[#0A1A3A]/60 max-w-2xl mx-auto">
            Simple, powerful, and designed to fit into your busiest days
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
              )}

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#E0F2FE]">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[#3B82F6] font-bold text-lg">Step {index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A1A3A] mb-3">{step.title}</h3>
                <p className="text-[#0A1A3A]/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
