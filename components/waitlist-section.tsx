"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, CheckCircle2 } from "lucide-react"

const interestOptions = [
  "Communication Skills",
  "Body Language",
  "Leadership Presence",
  "All of the above",
]

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [interest, setInterest] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1A3A] via-[#102a52] to-[#3B82F6] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Master the Skills That Matter
          </h2>
          <p className="text-xl text-white/80 mb-2">Launching Soon</p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Be the first to experience AI-powered micro-learning. Limited early access spots available.
          </p>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all appearance-none cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" disabled className="bg-[#0A1A3A] text-white/50">
                      I{"'"}m most interested in...
                    </option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#0A1A3A] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Securing..." : "Secure My Spot"}
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 text-white/60 text-sm">
                <Shield className="w-4 h-4" />
                <span>No spam. Unsubscribe anytime.</span>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You{"'"}re on the list!</h3>
              <p className="text-white/70">
                We{"'"}ll notify you when early access opens. Get ready to transform your micro-moments.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
