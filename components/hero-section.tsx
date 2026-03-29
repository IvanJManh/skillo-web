"use client"

import { motion } from "framer-motion"
import { Play, Sparkles, Eye, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[#0A1A3A] mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              Master Life{"'"}s Micro-Moments
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1A3A] leading-tight mb-6 text-balance">
              Build Confidence,{" "}
              <span className="text-[#3B82F6]">Not Just Skills.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#0A1A3A]/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The world{"'"}s first AI coach that gives you real-time feedback on
              posture, voice, and expression in just{" "}
              <span className="font-semibold text-[#0A1A3A]">2-minute daily drills</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40"
              >
                Join Waitlist for Early Access
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 text-[#0A1A3A] font-medium hover:text-[#3B82F6] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Play className="w-5 h-5 fill-[#3B82F6] text-[#3B82F6]" />
                </div>
                Watch Demo Video (1 min)
              </motion.button>
            </div>
          </motion.div>

          {/* Right - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                className="relative w-72 sm:w-80 h-[580px] sm:h-[640px] bg-[#0A1A3A] rounded-[3rem] p-3 shadow-2xl animate-pulse-glow"
              >
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-[#1E3A5F] to-[#0A1A3A] rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white/70 text-xs">
                    <span>9:41</span>
                    <div className="w-20 h-6 bg-black rounded-full" />
                    <span>100%</span>
                  </div>

                  {/* App Header */}
                  <div className="px-6 pt-2">
                    <h3 className="text-white font-semibold text-lg">Mirror Mode</h3>
                    <p className="text-white/60 text-sm">Interview Practice</p>
                  </div>

                  {/* User Silhouette Area */}
                  <div className="relative mx-6 mt-4 h-72 bg-[#152744] rounded-2xl overflow-hidden">
                    {/* Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-44 bg-gradient-to-b from-[#3B82F6]/30 to-transparent rounded-t-full" />
                    </div>

                    {/* Floating Feedback Elements */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-6 right-4 glass-dark px-3 py-2 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-green-400" />
                        <span className="text-white text-xs font-medium">Great eye contact!</span>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      className="absolute top-20 left-4 glass-dark px-3 py-2 rounded-lg"
                    >
                      <span className="text-yellow-400 text-xs font-medium">Relax shoulders</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      className="absolute bottom-8 right-4 glass-dark px-3 py-2 rounded-lg"
                    >
                      <span className="text-[#3B82F6] text-xs font-medium">Smile more</span>
                    </motion.div>
                  </div>

                  {/* Confidence Score */}
                  <div className="mx-6 mt-4 p-4 glass-dark rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Confidence Score</span>
                      <span className="text-[#3B82F6] font-bold text-lg">87%</span>
                    </div>
                    <div className="h-2 bg-[#152744] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="mx-6 mt-4 flex items-center justify-center gap-2 text-white">
                    <span className="text-2xl font-bold">1:24</span>
                    <span className="text-white/60 text-sm">remaining</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3B82F6]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[#0A1A3A]/60 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-5 h-5 text-[#3B82F6]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
