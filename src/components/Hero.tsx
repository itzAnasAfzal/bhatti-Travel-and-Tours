'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { SignupModal } from './SignupModal'
import { LoginModal } from './LoginModal'
import { 
  Plane, 
  MapPin, 
  Globe, 
  Sparkles, 
  ArrowDown,
  Star,
  Heart,
  Camera,
  Compass
} from 'lucide-react'

interface HeroProps {
  onAdminLogin?: () => void
}

export function Hero({ onAdminLogin }: HeroProps) {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Only apply parallax to background elements, not content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9])

  // Smooth mouse tracking for subtle interactions only
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x, y })
        // Reduce mouse parallax intensity
        mouseX.set(x * 20)
        mouseY.set(y * 20)
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#why-choose-us')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // Floating elements data
  const floatingElements = [
    { icon: Plane, delay: 0, x: 10, y: 20, size: 'w-8 h-8', color: 'text-blue-400' },
    { icon: MapPin, delay: 0.2, x: 80, y: 15, size: 'w-6 h-6', color: 'text-red-400' },
    { icon: Globe, delay: 0.4, x: 15, y: 70, size: 'w-7 h-7', color: 'text-green-400' },
    { icon: Star, delay: 0.6, x: 85, y: 75, size: 'w-5 h-5', color: 'text-yellow-400' },
    { icon: Heart, delay: 0.8, x: 50, y: 10, size: 'w-6 h-6', color: 'text-pink-400' },
    { icon: Camera, delay: 1, x: 90, y: 45, size: 'w-6 h-6', color: 'text-purple-400' },
    { icon: Compass, delay: 1.2, x: 20, y: 45, size: 'w-7 h-7', color: 'text-cyan-400' },
  ]

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1.5 + i * 0.2,
        duration: 1,
        ease: "elastic",
        type: "spring",
        damping: 15
      }
    })
  }

  return (
    <>
      <section 
        ref={heroRef}
        id="home" 
        className="relative min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden"
      >
        {/* Animated Background - Only this moves with scroll */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Breathtaking mountain landscape"
            className="w-full h-full object-cover scale-110"
          />
          {/* Dynamic overlay with scroll effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Floating Background Elements - These don't move with scroll */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6415ff]/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Content - Fixed position, doesn't move with scroll */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - Text content - Static positioning */}
            <motion.div 
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Main Heading with staggered animation */}
              <div className="mb-6">
                {['Discover.', 'Travel.', 'Experience.'].map((word, index) => (
                  <motion.h1
                    key={word}
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight block ${
                      index === 2 ? 'text-[#6415ff]' : 'text-white'
                    }`}
                    variants={textVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {word}
                    {index === 2 && (
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                      </motion.span>
                    )}
                  </motion.h1>
                ))}
              </div>

              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
                variants={textVariants}
                custom={3}
              >
                Find the best travel experiences, flights, and accommodations worldwide.
                <motion.span
                  className="inline-block ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.p>
              
              {/* Enhanced Button */}
              <motion.div 
                className="flex justify-center lg:justify-start"
                variants={textVariants}
                custom={4}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button 
                    onClick={() => setIsSignupModalOpen(true)}
                    className="bg-gradient-to-r from-[#6415ff] to-purple-600 hover:from-purple-600 hover:to-[#6415ff] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-[#6415ff]/25 transition-all duration-500 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Register Now
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Plane className="w-5 h-5" />
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                  
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#6415ff]/30 rounded-full blur-xl -z-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Interactive Landmarks with subtle mouse parallax only */}
            <motion.div 
              className="flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                {/* Main landmarks image with subtle mouse parallax */}
                <motion.div 
                  className="relative w-full max-w-lg"
                  style={{
                    x: mouseX,
                    y: mouseY,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Famous landmarks collage"
                      className="w-full h-auto opacity-90 rounded-3xl shadow-2xl"
                    />
                    
                    {/* Animated overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#6415ff]/30 to-transparent rounded-3xl"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Enhanced floating landmark icons */}
                  {[
                    { emoji: '🗼', position: 'top-4 right-4', color: 'from-red-400 to-pink-500' },
                    { emoji: '🕌', position: 'bottom-8 left-4', color: 'from-blue-400 to-cyan-500' },
                    { emoji: '🏢', position: 'top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2', color: 'from-green-400 to-emerald-500' },
                  ].map((landmark, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${landmark.position} w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 1 + index * 0.3, 
                        duration: 0.8, 
                        type: "spring",
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className={`w-10 h-10 bg-gradient-to-r ${landmark.color} rounded-full flex items-center justify-center shadow-lg`}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(99, 102, 241, 0.7)",
                            "0 0 0 10px rgba(99, 102, 241, 0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white text-lg">{landmark.emoji}</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced animated flight paths */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <motion.path 
                      d="M50 200 Q200 100 350 200" 
                      stroke="#6415ff" 
                      strokeWidth="3" 
                      strokeDasharray="8,8" 
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <motion.path 
                      d="M100 300 Q250 200 380 250" 
                      stroke="#10b981" 
                      strokeWidth="2" 
                      strokeDasharray="6,6" 
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2.5, delay: 3, repeat: Infinity, repeatDelay: 4 }}
                    />
                    <motion.path 
                      d="M80 150 Q200 250 320 180" 
                      stroke="#f59e0b" 
                      strokeWidth="2" 
                      strokeDasharray="4,4" 
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1.8, delay: 3.5, repeat: Infinity, repeatDelay: 5 }}
                    />
                  </svg>
                </motion.div>

                {/* Floating travel icons around the image */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${element.size} opacity-70`}
                    style={{
                      left: `${element.x}%`,
                      top: `${element.y}%`,
                    }}
                    variants={floatingVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <element.icon className={`${element.size} ${element.color} drop-shadow-lg`} />
                      <motion.div
                        className="absolute inset-0 bg-current rounded-full opacity-20 blur-sm -z-10"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed position */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium opacity-80">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              whileHover={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <ArrowDown className="w-4 h-4 opacity-60" />
          </motion.div>
        </motion.div>

        {/* Enhanced decorative elements - Fixed position */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated corner decorations */}
          <motion.div 
            className="absolute top-10 left-10 w-3 h-3 bg-[#6415ff] rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-4 h-4 bg-cyan-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </section>

      {/* Modals */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
        onAdminLogin={onAdminLogin}
      />
    </>
  )
}