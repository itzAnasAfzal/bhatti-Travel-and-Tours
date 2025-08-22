'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Headphones,
  MapPin,
  Star
} from 'lucide-react'

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('why-choose-us')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your safety and security are our top priorities. Licensed and insured travel services.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you before, during, and after your journey.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional travel consultants with years of experience in creating perfect itineraries.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in travel services with multiple industry awards and certifications.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every trip is tailored to your preferences, ensuring a unique and memorable experience.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: MapPin,
      title: 'Global Network',
      description: 'Extensive network of partners worldwide ensuring seamless travel experiences everywhere.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#6415ff]">Bhatti Travel</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience, we've perfected the art of creating unforgettable journeys. 
            Discover what sets us apart from the rest.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#6415ff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-[#6415ff] mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              10K+
            </motion.div>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-[#6415ff] mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              200+
            </motion.div>
            <p className="text-gray-600">Destinations</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-[#6415ff] mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              15+
            </motion.div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-[#6415ff] mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              98%
            </motion.div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-r from-[#6415ff] to-purple-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have chosen Bhatti Travel for their dream vacations.
            </p>
            <motion.button
              className="bg-white text-[#6415ff] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}