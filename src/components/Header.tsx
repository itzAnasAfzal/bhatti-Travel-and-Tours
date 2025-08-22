'use client'

import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { LoginModal } from './LoginModal'
import { SignupModal } from './SignupModal'

type PageType = 'home' | 'about' | 'gallery' | 'contact'

interface HeaderProps {
  onAdminLogin?: () => void
  currentPage?: PageType
  onPageChange?: (page: PageType) => void
}

export function Header({ onAdminLogin, currentPage = 'home', onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const handleNavClick = (page: PageType, sectionId?: string) => {
    if (page === 'home' && sectionId) {
      // If we're navigating to a section on home page
      if (currentPage !== 'home') {
        onPageChange?.('home')
        // Wait for page to load then scroll to section
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // Already on home page, just scroll to section
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      onPageChange?.(page)
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', page: 'home' as PageType, sectionId: 'home' },
    { label: 'About Us', page: 'about' as PageType },
    { label: 'Gallery', page: 'gallery' as PageType },
    { label: 'Contact Us', page: 'contact' as PageType }
  ]

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 relative z-50 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Mobile Menu Icon - Left */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2.5 rounded-xl hover:bg-[#6415ff]/10 transition-all duration-300 group border border-transparent hover:border-[#6415ff]/20"
              >
                <Menu className="h-5 w-5 text-gray-700 group-hover:text-[#6415ff] transition-colors" />
              </button>
            </div>

            {/* Logo - Left on desktop, Center on mobile */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-center md:text-left group"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6415ff] to-purple-600 bg-clip-text text-transparent">
                      Bhatti
                    </div>
                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[#6415ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-600 -mt-1 font-medium tracking-wider">
                  Travel & Tours
                </div>
              </button>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm lg:text-base relative overflow-hidden group ${
                    currentPage === item.page
                      ? 'text-white bg-[#6415ff] shadow-lg shadow-[#6415ff]/25'
                      : 'text-gray-700 hover:text-[#6415ff] hover:bg-[#6415ff]/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage !== item.page && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6415ff]/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Auth Buttons - Right */}
            <div className="flex-1 md:flex-none flex justify-end items-center space-x-2 lg:space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => setIsLoginModalOpen(true)}
                className="text-[#6415ff] hover:bg-[#6415ff]/10 px-3 md:px-4 py-2 text-sm md:text-base font-medium border border-[#6415ff]/20 hover:border-[#6415ff]/40 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Login
              </Button>
              <Button 
                onClick={() => setIsSignupModalOpen(true)}
                className="bg-gradient-to-r from-[#6415ff] to-purple-600 hover:from-purple-600 hover:to-[#6415ff] text-white rounded-full px-4 md:px-6 py-2 text-sm md:text-base font-medium shadow-lg shadow-[#6415ff]/25 hover:shadow-xl hover:shadow-[#6415ff]/30 transform hover:scale-105 transition-all duration-300"
              >
                <span className="hidden sm:inline">Sign Up</span>
                <span className="sm:hidden">Join</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-gradient-to-br from-[#6415ff] via-purple-700 to-purple-800 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Bhatti</div>
                  <div className="text-sm text-purple-200 tracking-wider">Travel & Tours</div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 flex flex-col justify-center px-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.page, item.sectionId)}
                    className={`text-left py-4 px-6 rounded-2xl text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === item.page
                        ? 'text-white bg-white/20 shadow-lg border border-white/30'
                        : 'text-purple-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentPage === item.page ? 'bg-white' : 'bg-purple-300'
                      }`}></div>
                      <span>{item.label}</span>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-purple-200 text-sm mb-2">Ready to explore?</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <p className="text-white text-xs font-medium">Your adventure awaits</p>
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
        onAdminLogin={onAdminLogin}
      />

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  )
}