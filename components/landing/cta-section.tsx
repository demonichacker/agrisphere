"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl space-y-8"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
            <Leaf className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              <span className="text-foreground">Ready to Transform</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Your Farm?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of farmers who have increased their yields and reduced costs with AgriSphere's intelligent
              monitoring platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="group bg-green-500 hover:bg-green-600 text-white">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="glass-card border-0 bg-transparent">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">30-day free trial • No credit card required • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
