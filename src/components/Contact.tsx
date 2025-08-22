'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Send,
  MessageCircle,
  Globe,
  Users,
  Award,
  HeadphonesIcon
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ContactProps {
  isPreview?: boolean
  onContactUsClick?: () => void
}

export function Contact({ isPreview = false, onContactUsClick }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
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

    const element = document.getElementById(isPreview ? 'contact-preview' : 'contact')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isPreview])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Show success message
    alert('Thank you for your message! We will get back to you soon.')
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Travel Street', 'Adventure City, AC 12345'],
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@bhattitravel.com', 'support@bhattitravel.com'],
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'text-purple-500'
    }
  ]

  const offices = [
    {
      city: 'New York',
      address: '123 Travel Street, NY 10001',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Los Angeles',
      address: '456 Adventure Ave, LA 90210',
      phone: '+1 (555) 987-6543',
      image: 'https://images.unsplash.com/photo-1549334191-4c8267b2b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Miami',
      address: '789 Paradise Blvd, Miami 33101',
      phone: '+1 (555) 456-7890',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const faqs = [
    {
      question: 'How far in advance should I book my trip?',
      answer: 'We recommend booking 2-3 months in advance for international trips and 1-2 months for domestic travel to get the best deals and availability.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we partner with leading insurance providers to offer comprehensive travel insurance options for all our packages.'
    },
    {
      question: 'Can you help with visa requirements?',
      answer: 'Absolutely! Our team provides visa assistance and guidance for all international destinations, ensuring you have all required documentation.'
    },
    {
      question: 'What if I need to cancel or change my booking?',
      answer: 'We offer flexible cancellation and modification policies. Terms vary by package, and we always work to minimize any fees or penalties.'
    }
  ]

  // Full Contact Page Content
  if (!isPreview) {
    return (
      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-96 bg-gradient-to-r from-[#6415ff] to-purple-800 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Contact us hero"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-purple-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We're here to help you plan your perfect journey. Get in touch with our travel experts today.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Contact Info & Image */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Compass and map for travel planning"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                    <p className="text-lg opacity-90">Adventure awaits you</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                        <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-').replace('500', '100')} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Card className="shadow-2xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-gray-900">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
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
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
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
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your dream destination or any questions you have..."
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-[#6415ff] focus:ring-[#6415ff]"
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-[#6415ff] hover:bg-purple-700 text-white py-3 text-lg group"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#6415ff]">Offices</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit us at any of our convenient locations or contact us for personalized service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={office.image}
                        alt={`${office.city} office`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{office.city}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-[#6415ff] mt-0.5" />
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-[#6415ff]" />
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-[#6415ff]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our travel services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Preview Content for Home Page
  return (
    <section 
      id={isPreview ? 'contact-preview' : 'contact'} 
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In <span className="text-[#6415ff]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next adventure? Contact us and let's plan your perfect getaway.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact Info & Image */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Compass and map for travel planning"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                <p className="text-lg opacity-90">Adventure awaits you</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.slice(0, 2).map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                    <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-').replace('500', '100')} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                onClick={onContactUsClick}
                className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3 rounded-full group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Quick Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-lg">
                <Globe className="w-12 h-12 text-[#6415ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">Serving travelers worldwide with local expertise in 200+ destinations</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-lg">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced travel consultants ready to create your perfect itinerary</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-lg">
                <HeadphonesIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance for all your travel needs and emergencies</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}