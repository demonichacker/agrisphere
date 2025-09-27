"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FloatingCard({ children, className, delay = 0, duration = 6 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
      className={cn("glass-card rounded-xl p-6", className)}
    >
      {children}
    </motion.div>
  )
}
