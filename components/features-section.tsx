"use client"

import { motion } from "framer-motion"
import { Activity, Mic, Smile } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Posture & Gesture Coach",
    description: "Powered by MediaPipe Pose. Get feedback on stance, hand movements, and confident body language.",
    gradient: "from-[#3B82F6] to-[#60A5FA]",
  },
  {
    icon: Mic,
    title: "Vocal Tone Analyst",
    description: "Uses OpenAI Whisper. Analyze clarity, pace, filler words, and emotional tone in your speech.",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    icon: Smile,
    title: "Facial Expression Guide",
    description: "Reads engagement & expression. Tips like 'Relax your brow' or 'Show more enthusiasm'.",
    gradient: "from-[#3B82F6] to-[#6366F1]",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#E0F2FE]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A3A] mb-4 text-balance">
            Not Just Another Learning App
          </h2>
          <p className="text-lg text-[#0A1A3A]/60 max-w-2xl mx-auto">
            Cutting-edge AI technology that understands and coaches you like a human mentor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0A1A3A] mb-3">{feature.title}</h3>
                <p className="text-[#0A1A3A]/60 leading-relaxed">{feature.description}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
