"use client"

import { motion } from "framer-motion"
import { Leaf, Sprout, Wheat, Droplets } from "lucide-react"

interface AgriculturalLoaderProps {
  size?: "sm" | "md" | "lg"
  message?: string
}

export function AgriculturalLoader({ size = "md", message = "Loading..." }: AgriculturalLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }

  const iconSize = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-green-200 border-t-green-500 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner rotating elements */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className={`${iconSize[size]} text-green-500`} />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sprout className={`${iconSize[size]} text-emerald-400 absolute top-0 left-0`} />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wheat className={`${iconSize[size]} text-yellow-500 absolute bottom-0 right-0`} />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Droplets className={`${iconSize[size]} text-blue-500 absolute top-0 right-0`} />
            </motion.div>
          </div>
        </motion.div>

        {/* Pulsing background */}
        <motion.div
          className={`${sizeClasses[size]} absolute inset-0 bg-green-100 rounded-full`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {message && (
        <motion.p
          className="text-sm text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      )}
    </div>
  )
}

// Full screen overlay loader
export function AgriculturalLoaderOverlay({ message = "Loading..." }: { message?: string }) {
  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AgriculturalLoader size="lg" message={message} />
    </motion.div>
  )
}

// Button loader (inline)
export function ButtonLoader({ size = "sm" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5"

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="flex items-center justify-center"
    >
      <Leaf className={`${iconSize} text-current`} />
    </motion.div>
  )
}