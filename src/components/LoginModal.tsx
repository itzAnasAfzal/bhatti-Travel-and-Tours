'use client'

import { useState } from 'react'
import { X, User, Eye, EyeOff } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignup?: () => void
  onAdminLogin?: () => void
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup, onAdminLogin }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check for admin credentials
    if (formData.email.toLowerCase() === 'admin' && formData.password === 'admin') {
      console.log('Admin login successful')
      onAdminLogin?.()
      onClose()
      return
    }
    
    console.log('Regular login attempt:', formData)
    // Handle regular login logic here
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left side - Image */}
          <div className="relative hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583604636737-44c0b3c68e8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Airplane flying in cloudy sky"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
          </div>

          {/* Right side - Login Form */}
          <div className="relative p-8 lg:p-12 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-[#6415ff]">
                Bhatti Group
              </h1>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Welcome Back */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                Welcome Back!
              </h2>
              <p className="text-sm text-gray-500">
                Use "admin" for both email and password to access admin panel
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email or Username"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                    required
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="sr-only">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-4 pr-12 h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                    className="data-[state=checked]:bg-[#6415ff] data-[state=checked]:border-[#6415ff]"
                  />
                  <Label 
                    htmlFor="rememberMe" 
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#6415ff] hover:text-purple-700 hover:underline"
                >
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#6415ff] hover:bg-purple-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                LOG IN
              </Button>

              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToSignup}
                    className="text-[#6415ff] hover:text-purple-700 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}