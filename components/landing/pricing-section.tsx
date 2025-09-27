"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/ui/floating-card"
import { Check, Zap, Crown, Rocket } from "lucide-react"
import Link from "next/link"
import { useLoading } from "@/lib/loading-context"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    description: "Perfect for small farms and hobby growers",
    features: [
      "Up to 5 sensors",
      "Basic weather data",
      "Mobile app access",
      "Email alerts",
      "7-day data history",
      "Community support",
    ],
    popular: false,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$79",
    period: "/month",
    description: "Ideal for commercial farms and agricultural businesses",
    features: [
      "Up to 25 sensors",
      "Advanced weather forecasting",
      "AI-powered analytics",
      "SMS & push notifications",
      "1-year data history",
      "Priority support",
      "Custom reports",
      "API access",
    ],
    popular: true,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "$199",
    period: "/month",
    description: "For large-scale operations and agricultural enterprises",
    features: [
      "Unlimited sensors",
      "Satellite imagery integration",
      "Machine learning insights",
      "Multi-farm management",
      "Unlimited data history",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
    ],
    popular: false,
    color: "from-purple-400 to-purple-600",
  },
]

export function PricingSection() {
  const { startLoading } = useLoading()

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Simple, Transparent</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your Nigerian farming operation. All plans include a 30-day free trial with no setup fees
            or long-term commitments, designed for cassava, rice, maize, and yam cultivation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <FloatingCard
                className={`h-full p-8 ${plan.popular ? "ring-2 ring-green-400 scale-105" : ""}`}
                delay={index * 0.5}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/auth" className="block">
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-green-500 hover:bg-green-600 text-white" : "glass-card border-0"
                      }`}
                      size="lg"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Questions about our pricing?
            <Button variant="link" className="p-0 ml-1 text-green-500">
              Contact our sales team
            </Button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
