'use client'

import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { OurServices } from './components/OurServices'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { AdminDashboard } from './components/AdminDashboard'

type PageType = 'home' | 'about' | 'gallery' | 'contact'

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const handleAdminLogin = () => {
    setIsAdminMode(true)
  }

  const handleAdminLogout = () => {
    setIsAdminMode(false)
  }

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page)
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactUsClick = () => {
    if (currentPage !== 'home') {
      // If not on home page, navigate to home first
      setCurrentPage('home')
      // Wait for page to load then scroll to contact form
      setTimeout(() => {
        const element = document.getElementById('home-contact-form')
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      // Already on home page, just scroll to contact form
      const element = document.getElementById('home-contact-form')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isAdminMode) {
    return <AdminDashboard onLogout={handleAdminLogout} />
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <style>
        {`
          html {
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          body {
            overflow-x: hidden;
          }
        `}
      </style>
      <Header 
        onAdminLogin={handleAdminLogin} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      <main className="w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <>
            <Hero onAdminLogin={handleAdminLogin} />
            <WhyChooseUs />
            <OurServices />
            <div id="gallery-preview">
              <Gallery isPreview={true} />
            </div>
            <div id="about-preview">
              <About isPreview={true} />
            </div>
            <div id="contact-preview">
              <Contact isPreview={true} onContactUsClick={handleContactUsClick} />
            </div>
            <ContactForm />
          </>
        )}
        
        {currentPage === 'about' && <About />}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  )
}