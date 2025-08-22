'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  Plane, 
  Hotel, 
  Car, 
  Camera, 
  Compass, 
  Map,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function OurServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('our-services')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate featured service
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % services.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Book domestic and international flights at competitive prices with flexible options.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Best Price Guarantee', '24/7 Flight Support', 'Flexible Booking', 'Group Discounts'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'From luxury resorts to budget accommodations, find the perfect place to stay.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Verified Hotels', 'Free Cancellation', 'Best Rate Guarantee', 'Instant Confirmation'],
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Rent a car for your convenience with our wide range of vehicles and competitive rates.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Wide Vehicle Selection', 'Insurance Included', 'GPS Navigation', 'Roadside Assistance'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Camera,
      title: 'Guided Tours',
      description: 'Explore destinations with our expert local guides and curated tour packages.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Expert Local Guides', 'Small Group Tours', 'Cultural Experiences', 'Photography Tours'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Compass,
      title: 'Adventure Travel',
      description: 'Thrilling adventures and outdoor activities for the adventurous souls.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Trekking & Hiking', 'Water Sports', 'Mountain Climbing', 'Safari Adventures'],
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Map,
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your preferences and budget.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Personalized Planning', 'Budget Optimization', 'Local Insights', 'Flexible Changes'],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Get the active service icon component
  const ActiveServiceIcon = services[activeService].icon

  return (
    <section id="our-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#6415ff]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From flight bookings to custom itineraries, we offer comprehensive travel services 
            to make your journey seamless and memorable.
          </p>
        </motion.div>

        {/* Featured Service */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className={`w-12 h-12 ${services[activeService].bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <ActiveServiceIcon className={`w-6 h-6 ${services[activeService].color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {services[activeService].description}
                </p>
                <div className="space-y-3 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <Button className="bg-[#6415ff] hover:bg-purple-700 text-white group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl group ${
                    activeService === index ? 'ring-2 ring-[#6415ff] shadow-lg' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ServiceIcon className={`w-8 h-8 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="group-hover:text-[#6415ff] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Service Indicators */}
        <motion.div
          className="flex justify-center space-x-2 mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index ? 'bg-[#6415ff] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <Calendar className="w-12 h-12 text-[#6415ff] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Book Your Next Adventure?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you plan the perfect trip. Contact us today for personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-[#6415ff] text-[#6415ff] hover:bg-[#6415ff] hover:text-white px-8 py-3">
                View All Packages
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}