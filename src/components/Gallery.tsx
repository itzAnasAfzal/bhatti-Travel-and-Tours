'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Search, MapPin, Star, ArrowRight, Filter, Users, Calendar, Camera } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface GalleryProps {
  isPreview?: boolean
}

export function Gallery({ isPreview = false }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
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

    const element = document.getElementById(isPreview ? 'gallery-preview' : 'gallery')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isPreview])

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      category: "Beaches",
      src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beautiful white buildings overlooking the blue Aegean Sea in Santorini",
      rating: 4.9,
      price: "From $899",
      duration: "7 Days",
      reviews: 234
    },
    {
      id: 2,
      name: "Swiss Alps, Switzerland",
      category: "Mountains",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Snow-capped mountain peaks in the Swiss Alps",
      rating: 4.8,
      price: "From $1299",
      duration: "10 Days",
      reviews: 189
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      category: "Cities",
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tokyo skyline with Mount Fuji in the background",
      rating: 4.7,
      price: "From $1099",
      duration: "8 Days",
      reviews: 312
    },
    {
      id: 4,
      name: "Maldives",
      category: "Beaches",
      src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Crystal clear turquoise waters and overwater bungalows in Maldives",
      rating: 4.9,
      price: "From $1599",
      duration: "6 Days",
      reviews: 156
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      category: "Historical",
      src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ancient Incan ruins of Machu Picchu",
      rating: 4.8,
      price: "From $999",
      duration: "9 Days",
      reviews: 278
    },
    {
      id: 6,
      name: "Banff National Park, Canada",
      category: "Adventure",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pristine mountain lake surrounded by forest in Banff",
      rating: 4.7,
      price: "From $799",
      duration: "5 Days",
      reviews: 201
    },
    {
      id: 7,
      name: "Bali, Indonesia",
      category: "Beaches",
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tropical beach in Bali with palm trees",
      rating: 4.6,
      price: "From $699",
      duration: "7 Days",
      reviews: 145
    },
    {
      id: 8,
      name: "Dubai, UAE",
      category: "Cities",
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dubai skyline with Burj Khalifa",
      rating: 4.5,
      price: "From $899",
      duration: "5 Days",
      reviews: 187
    },
    {
      id: 9,
      name: "Patagonia, Argentina",
      category: "Adventure",
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dramatic mountain landscape in Patagonia",
      rating: 4.8,
      price: "From $1199",
      duration: "12 Days",
      reviews: 98
    }
  ]

  const categories = ['All', 'Beaches', 'Mountains', 'Cities', 'Adventure', 'Historical']

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayDestinations = isPreview ? filteredDestinations.slice(0, 6) : filteredDestinations

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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const featuredDestinations = destinations.slice(0, 3)

  // Full Gallery Page Content
  if (!isPreview) {
    return (
      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-96 bg-gradient-to-r from-[#6415ff] to-purple-800 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Gallery hero"
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
                Destination Gallery
              </motion.h1>
              <motion.p 
                className="text-xl text-purple-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Explore breathtaking destinations around the world and find your next adventure.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured <span className="text-[#6415ff]">Destinations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and breathtaking destinations that travelers love most.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                    <div className="relative h-80 overflow-hidden">
                      <ImageWithFallback
                        src={destination.src}
                        alt={destination.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#6415ff]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
                        </div>
                      </div>
                      
                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                          <MapPin className="w-5 h-5 text-[#6415ff] mr-2" />
                          {destination.name}
                        </h3>
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {destination.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {destination.reviews} reviews
                            </span>
                          </div>
                          <span className="text-xl font-bold text-yellow-300">{destination.price}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All <span className="text-[#6415ff]">Destinations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hand-picked places to inspire your next journey. Explore amazing locations worldwide.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              className="mb-12 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Search Bar */}
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 text-lg"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600 font-medium">Filter by:</span>
                  </div>
                </div>
              </Card>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#6415ff] text-white hover:bg-purple-700'
                        : 'border-gray-300 text-gray-700 hover:border-[#6415ff] hover:text-[#6415ff]'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-gray-600 text-center">
                Showing <span className="font-semibold text-[#6415ff]">{displayDestinations.length}</span> destinations
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </motion.div>

            {/* Destinations Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {displayDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border-0">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <ImageWithFallback
                          src={destination.src}
                          alt={destination.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#6415ff]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {destination.category}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
                        </div>
                      </div>
                      
                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 mb-1 flex items-center">
                                <MapPin className="w-4 h-4 text-[#6415ff] mr-1" />
                                {destination.name}
                              </h3>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {destination.duration}
                                </span>
                                <span className="flex items-center">
                                  <Users className="w-3 h-3 mr-1" />
                                  {destination.reviews} reviews
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-[#6415ff]">{destination.price}</span>
                                <Button size="sm" className="bg-[#6415ff] hover:bg-purple-700 text-white">
                                  <Camera className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                Load More Destinations
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Travel <span className="text-[#6415ff]">Tips & Insights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice and insider tips to make your travels more enjoyable and memorable.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md h-full">
                  <Camera className="w-12 h-12 text-[#6415ff] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Photography Tips</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Capture stunning travel photos with our expert photography guide. Learn composition, lighting, and equipment tips.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md h-full">
                  <MapPin className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Experiences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover authentic local experiences and hidden gems that only locals know about in each destination.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md h-full">
                  <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Visit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Plan your trips at the perfect time with our seasonal guides covering weather, crowds, and local events.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Preview Content for Home Page
  return (
    <section 
      id={isPreview ? 'gallery-preview' : 'gallery'} 
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
            Featured <span className="text-[#6415ff]">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our most popular travel destinations around the world.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {displayDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border-0">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={destination.src}
                      alt={destination.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#6415ff]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 flex items-center">
                            <MapPin className="w-4 h-4 text-[#6415ff] mr-1" />
                            {destination.name}
                          </h3>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{destination.duration}</span>
                            <span className="font-semibold text-[#6415ff]">{destination.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-8 py-3 rounded-full group">
            View All Destinations
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}