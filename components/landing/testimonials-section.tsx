"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Adebayo Okafor",
    role: "Cassava Farmer",
    location: "Ogun State, Nigeria",
    content:
      "IoGric transformed our 50-hectare cassava farm. We've seen a 35% increase in yield and 45% reduction in water usage. The predictive analytics help us know exactly when to harvest.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=adebayo",
  },
  {
    name: "Fatima Ibrahim",
    role: "Rice Cultivation Expert",
    location: "Kebbi State, Nigeria",
    content:
      "I recommend IoGric to all farmers in the north. The real-time monitoring and alert system has prevented countless crop losses during the rainy season. It's like having a team of experts 24/7.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fatima",
  },
  {
    name: "Chukwuma Nwosu",
    role: "Sustainable Farming Advocate",
    location: "Anambra State, Nigeria",
    content:
      "The environmental impact tracking feature aligns perfectly with our sustainability goals. We've reduced chemical usage by 40% while maintaining excellent crop health for our yam and maize farms with IoGric.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chukwuma",
  },
]

export function TestimonialsSection() {
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
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              10,000+ Farmers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join thousands of farmers who have revolutionized their operations with AgriSphere's intelligent monitoring
            and analytics platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="h-full p-8" delay={index * 0.8}>
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-pretty leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
