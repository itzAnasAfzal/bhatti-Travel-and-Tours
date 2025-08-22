'use client'

import { useState } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import exampleImage from 'figma:asset/56378123af287bc274d1a31d01b7698510ad1ab6.png'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    agencyName: '',
    phoneNumber: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    console.log('Signup attempt:', formData)
    // Handle signup logic here
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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Branded content */}
          <div className="relative bg-gradient-to-br from-[#6415ff] to-purple-700 hidden lg:flex flex-col justify-center items-center p-12 text-white">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Bhatti Group</h1>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Defy the Past<br />
                Step into the<br />
                Future
              </h2>
            </div>
            
            {/* Airplane Image */}
            <div className="relative">
              <img 
                src={exampleImage}
                alt="Airplane illustration"
                className="w-80 h-auto opacity-90"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-white/10 rounded-full"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full"></div>
          </div>

          {/* Right side - Signup Form */}
          <div className="relative p-8 lg:p-12 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Create Account
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              {/* Agency Name */}
              <div className="space-y-2">
                <Label htmlFor="agencyName" className="text-sm text-gray-600">Agency Name</Label>
                <Input
                  id="agencyName"
                  name="agencyName"
                  type="text"
                  value={formData.agencyName}
                  onChange={handleInputChange}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                  required
                />
              </div>

              {/* Phone Number and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm text-gray-600">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm text-gray-600">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-600">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff]"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-600">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff] pr-12"
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

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm text-gray-600">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-12 bg-gray-50 border-gray-200 rounded-lg focus:ring-[#6415ff] focus:border-[#6415ff] pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox 
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                  }
                  className="data-[state=checked]:bg-[#6415ff] data-[state=checked]:border-[#6415ff] mt-1"
                />
                <Label 
                  htmlFor="agreeToTerms" 
                  className="text-sm text-gray-600 cursor-pointer leading-relaxed"
                >
                  I have read and agreed to the Terms of Service and Privacy Policy
                </Label>
              </div>

              {/* Create Account Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#6415ff] hover:bg-purple-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
              >
                Create Account
              </Button>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-[#6415ff] hover:text-purple-700 font-semibold hover:underline"
                  >
                    Log In
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