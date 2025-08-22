'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Users,
  Plane,
  CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('home-contact-form')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Show success message
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: '',
      budget: '',
      message: ''
    })
  }

  const quickStats = [
    { icon: CheckCircle, label: '24hr Response', color: 'text-green-500' },
    { icon: Users, label: 'Expert Consultants', color: 'text-blue-500' },
    { icon: Plane, label: 'Free Planning', color: 'text-purple-500' },
    { icon: Calendar, label: 'Flexible Booking', color: 'text-orange-500' }
  ]

  return (
    <section id="home-contact-form" className="py-20 bg-gradient-to-br from-[#6415ff] to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-yellow-300">Adventure</span>?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Tell us about your dream destination and let our travel experts create the perfect itinerary for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <p className="text-white text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Email Us</p>
                  <p className="text-white font-semibold">info@bhattitravel.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Visit Us</p>
                  <p className="text-white font-semibold">123 Travel Street, AC 12345</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Happy customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">Sarah Johnson</p>
                  <p className="text-purple-200 text-sm">Happy Traveler</p>
                </div>
              </div>
              <p className="text-purple-100 text-sm italic">
                "Bhatti Travel made our dream vacation come true! The planning was seamless and the experience was unforgettable."
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  Plan Your Perfect Trip
                </CardTitle>
                <p className="text-center text-gray-600">
                  Fill out the form below and we'll create a customized itinerary just for you
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select value={formData.destination} onValueChange={(value) => handleSelectChange('destination', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="america">Americas</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                          <SelectItem value="middle-east">Middle East</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelDate">Travel Date</Label>
                      <Input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select value={formData.travelers} onValueChange={(value) => handleSelectChange('travelers', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]">
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5-8">5-8 People</SelectItem>
                          <SelectItem value="9+">9+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (USD)</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                        <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="over-10000">Over $10,000</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Dream Trip</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your ideal vacation, special interests, accommodation preferences, or any specific requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#6415ff] hover:bg-purple-700 text-white py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send My Travel Request
                    <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    We'll respond within 24 hours with a personalized travel proposal
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}