'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { 
  CheckCircle, 
  Users, 
  Award, 
  MapPin, 
  ArrowRight,
  Plane,
  Heart,
  Shield,
  Star,
  Calendar,
  Globe,
  Target,
  Eye
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface AboutProps {
  isPreview?: boolean
}

export function About({ isPreview = false }: AboutProps) {
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

    const element = document.getElementById(isPreview ? 'about-preview' : 'about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isPreview])

  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '15,000+', color: 'text-blue-500' },
    { icon: MapPin, label: 'Destinations', value: '250+', color: 'text-green-500' },
    { icon: Award, label: 'Awards Won', value: '25+', color: 'text-yellow-500' },
    { icon: Plane, label: 'Years Experience', value: '15+', color: 'text-purple-500' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed travel agency with comprehensive insurance coverage for your peace of mind.'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Every trip is tailored to your preferences with dedicated support throughout your journey.'
    },
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized by industry leaders for outstanding service and customer satisfaction.'
    }
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small travel agency with big dreams and passion for travel.'
    },
    {
      year: '2013',
      title: 'International Expansion',
      description: 'Expanded services to include international destinations across 50+ countries.'
    },
    {
      year: '2016',
      title: 'Digital Innovation',
      description: 'Launched online booking platform and mobile app for seamless travel planning.'
    },
    {
      year: '2019',
      title: 'Industry Recognition',
      description: 'Received "Best Travel Agency" award and achieved 10,000+ satisfied customers.'
    },
    {
      year: '2022',
      title: 'Sustainable Travel',
      description: 'Launched eco-friendly travel initiatives and carbon-neutral trip options.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate with AI-powered trip planning and VR destination previews.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: '15+ years in travel industry, passionate about creating memorable experiences.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in logistics and operations, ensures smooth travel experiences worldwide.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Customer Experience Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Dedicated to exceptional customer service and personalized travel solutions.'
    },
    {
      name: 'David Thompson',
      position: 'Adventure Travel Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Adventure enthusiast specializing in unique and thrilling travel experiences.'
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Adams',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Bhatti Travel made our honeymoon absolutely perfect! Every detail was handled with care.',
      rating: 5
    },
    {
      name: 'Robert Wilson',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Professional service, competitive prices, and amazing destinations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      location: 'Madrid, Spain',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Their attention to detail and customer service exceeded all our expectations.',
      rating: 5
    }
  ]

  // Full About Page Content
  if (!isPreview) {
    return (
      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-96 bg-gradient-to-r from-[#6415ff] to-purple-800 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="About us hero"
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
                About Us
              </motion.h1>
              <motion.p 
                className="text-xl text-purple-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover the story behind Bhatti Travel & Tours and our commitment to creating extraordinary journeys.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Travel agency team planning adventures"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6415ff]/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#6415ff] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">15,000+</p>
                      <p className="text-sm text-gray-600">Happy Travelers</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-6">
                  <span className="text-[#6415ff] font-semibold text-lg">About Bhatti Travel & Tours</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Your Trusted Travel Partner Since 2010
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are a passionate team of travel enthusiasts dedicated to creating unforgettable experiences for our clients. With over a decade of expertise in the travel industry, we specialize in crafting personalized journeys that exceed expectations.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  From exotic destinations to cultural immersions, adventure tours to luxury getaways, we ensure every detail is perfectly planned for your peace of mind and maximum enjoyment.
                </p>

                {/* Features */}
                <div className="space-y-6 mb-12">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-[#6415ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-[#6415ff]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-6 mb-10"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3 rounded-full group">
                    Start Planning Your Trip
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#6415ff]">Mission & Vision</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 text-center border-0 shadow-lg h-full">
                  <div className="w-16 h-16 bg-[#6415ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-[#6415ff]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create extraordinary travel experiences that connect people with the world's most beautiful destinations, 
                    cultures, and adventures while providing exceptional service and value that exceeds expectations.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-8 text-center border-0 shadow-lg h-full">
                  <div className="w-16 h-16 bg-[#6415ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-[#6415ff]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the world's most trusted travel partner, known for our innovation, sustainability, 
                    and commitment to creating memories that last a lifetime for every traveler we serve.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#6415ff]">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a leading travel agency, here's our story.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full bg-[#6415ff]/20 w-0.5"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="flex-1 px-8">
                      <Card className={`p-6 shadow-lg border-0 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#6415ff] rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[#6415ff] font-bold text-lg">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-[#6415ff] rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-[#6415ff]">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are passionate about creating your perfect travel experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-[#6415ff] font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our <span className="text-[#6415ff]">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied travelers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
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
      id={isPreview ? 'about-preview' : 'about'} 
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel agency team planning adventures"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6415ff]/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#6415ff] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">15,000+</p>
                  <p className="text-sm text-gray-600">Happy Travelers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="text-[#6415ff] font-semibold text-lg">About Bhatti Travel & Tours</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Travel Partner Since 2010
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the travel industry, we specialize in creating personalized journeys that exceed expectations. Our dedicated team ensures every detail is perfectly planned for your peace of mind.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#6415ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#6415ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3 rounded-full group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}