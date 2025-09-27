"use client"

import { motion } from "framer-motion"
import { Droplets, Zap, BarChart3, Smartphone, Cloud, MapPin, Brain, Satellite, Shield } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Smart Soil Analytics",
    description:
      "Advanced multi-parameter soil monitoring with real-time moisture, pH, and nutrient analysis using precision IoT sensors.",
    color: "from-blue-400 to-cyan-600",
    bgColor: "from-blue-50/90 to-cyan-50/90 dark:from-blue-900/20 dark:to-cyan-900/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/50",
  },
  {
    icon: Brain,
    title: "AI Weather Intelligence",
    description:
      "Machine learning-powered weather forecasting with hyperlocal predictions and climate pattern analysis for optimal planning.",
    color: "from-purple-400 to-pink-600",
    bgColor: "from-purple-50/90 to-pink-50/90 dark:from-purple-900/20 dark:to-pink-900/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/50",
  },
  {
    icon: Satellite,
    title: "Satellite Crop Monitoring",
    description:
      "High-resolution satellite imagery analysis with AI-powered crop health assessment and growth stage detection.",
    color: "from-green-400 to-emerald-600",
    bgColor: "from-green-50/90 to-emerald-50/90 dark:from-green-900/20 dark:to-emerald-900/20",
    borderColor: "border-green-200/50 dark:border-green-800/50",
  },
  {
    icon: BarChart3,
    title: "Predictive Yield Modeling",
    description:
      "Advanced machine learning algorithms predict harvest yields with 98% accuracy using historical and real-time data.",
    color: "from-indigo-400 to-blue-600",
    bgColor: "from-indigo-50/90 to-blue-50/90 dark:from-indigo-900/20 dark:to-blue-900/20",
    borderColor: "border-indigo-200/50 dark:border-indigo-800/50",
  },
  {
    icon: Shield,
    title: "Intelligent Alerts",
    description:
      "Proactive notifications for irrigation needs, pest detection, disease outbreaks, and critical weather warnings.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50/90 to-orange-50/90 dark:from-yellow-900/20 dark:to-orange-900/20",
    borderColor: "border-yellow-200/50 dark:border-yellow-800/50",
  },
  {
    icon: MapPin,
    title: "Precision Field Mapping",
    description:
      "Interactive 3D field visualization with zone-specific management, variable rate applications, and GPS-guided operations.",
    color: "from-teal-400 to-green-600",
    bgColor: "from-teal-50/90 to-green-50/90 dark:from-teal-900/20 dark:to-green-900/20",
    borderColor: "border-teal-200/50 dark:border-teal-800/50",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-4 py-2 rounded-full text-sm font-semibold text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-800/50 mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>Cutting-Edge Technology</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-balance leading-tight">
            <span className="text-foreground">Revolutionary</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Farm Intelligence
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Experience the future of Nigerian agriculture with our comprehensive AI-powered platform that transforms data into
            actionable insights for maximum productivity across cassava, rice, maize, and yam farming.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`h-full p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 text-foreground">Powered by Advanced Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cloud, label: "IoT Sensors", color: "from-blue-400 to-cyan-600" },
              { icon: Brain, label: "AI Analytics", color: "from-purple-400 to-pink-600" },
              { icon: Smartphone, label: "Mobile Ready", color: "from-green-400 to-emerald-600" },
              { icon: BarChart3, label: "Real-time Data", color: "from-yellow-400 to-orange-500" },
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 group-hover:scale-105">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{tech.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
