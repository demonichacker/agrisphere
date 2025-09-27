"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { FloatingCard } from "@/components/ui/floating-card"
import { Globe3D } from "@/components/3d/globe-3d"
import { ArrowRight, Leaf, BarChart3, Play, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useLoading } from "@/lib/loading-context"

export function HeroSection() {
  const { startLoading } = useLoading()

  return (
    <section className="relative min-h-screen overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-50 p-6" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card rounded-2xl px-6 py-4 backdrop-blur-xl bg-background/20 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  IoGric
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <ThemeToggle />
                <Link href="/auth">
                  <Button
                    variant="ghost"
                    className="glass-card border-0 bg-transparent hover:bg-white/10 transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </nav>

      <div className="pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-5 py-3 rounded-full text-sm font-semibold text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-800/50"
              >
                <Sparkles className="w-4 h-4" />
                <span>Next-Gen Smart Agriculture</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-8xl font-black text-balance leading-[0.9] tracking-tight"
              >
                <span className="text-foreground">Transform</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Agriculture
                </span>
                <br />
                <span className="text-foreground/80 text-4xl lg:text-6xl font-bold">with AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl leading-relaxed"
              >
                Revolutionize Nigerian agriculture with intelligent IoT sensors, predictive AI analytics, and real-time insights
                that maximize yields of cassava, rice, and maize while minimizing resources in our diverse climates.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/auth">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-0 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-xl group transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  40%
                </div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Yield Increase</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  55%
                </div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Water Savings</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  15K+
                </div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Nigerian Farmers</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative h-[700px] flex items-center justify-center"
          >
            <Globe3D />

            <FloatingCard
              className="hidden md:block absolute top-12 left-4 w-56 p-5 backdrop-blur-xl bg-gradient-to-br from-green-50/90 to-emerald-50/90 dark:from-green-900/40 dark:to-emerald-900/40 border border-green-200/50 dark:border-green-800/50 rounded-2xl shadow-2xl"
              delay={0}
            >
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full pulse-glow shadow-lg"></div>
                <div>
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300">Soil Moisture</div>
                  <div className="text-2xl font-black text-green-600 dark:text-green-400">72%</div>
                  <div className="text-xs text-green-600/70 dark:text-green-400/70">Optimal Range</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="hidden md:block absolute top-28 right-8 w-56 p-5 backdrop-blur-xl bg-gradient-to-br from-blue-50/90 to-cyan-50/90 dark:from-blue-900/40 dark:to-cyan-900/40 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl shadow-2xl"
              delay={1}
            >
              <div className="flex items-center space-x-4">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Yield Forecast</div>
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400">+28%</div>
                  <div className="text-xs text-blue-600/70 dark:text-blue-400/70">vs Last Season</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="hidden md:block absolute bottom-20 left-12 w-56 p-5 backdrop-blur-xl bg-gradient-to-br from-yellow-50/90 to-orange-50/90 dark:from-yellow-900/40 dark:to-orange-900/40 border border-yellow-200/50 dark:border-yellow-800/50 rounded-2xl shadow-2xl"
              delay={2}
            >
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pulse-glow shadow-lg"></div>
                <div>
                  <div className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">Weather Alert</div>
                  <div className="text-2xl font-black text-yellow-600 dark:text-yellow-400">Rain</div>
                  <div className="text-xs text-yellow-600/70 dark:text-yellow-400/70">in 2 hours</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="hidden md:block absolute bottom-32 right-16 w-56 p-5 backdrop-blur-xl bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-purple-900/40 dark:to-pink-900/40 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl shadow-2xl"
              delay={3}
            >
              <div className="flex items-center space-x-4">
                <BarChart3 className="w-8 h-8 text-purple-500" />
                <div>
                  <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">AI Analysis</div>
                  <div className="text-2xl font-black text-purple-600 dark:text-purple-400">98%</div>
                  <div className="text-xs text-purple-600/70 dark:text-purple-400/70">Accuracy</div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
