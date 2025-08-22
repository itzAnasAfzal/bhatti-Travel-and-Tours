'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  LayoutDashboard, 
  Users, 
  Ticket, 
  Plus, 
  Search, 
  Settings,
  LogOut,
  UserCheck,
  UserX,
  Trash2,
  Calendar,
  Plane,
  CheckCircle,
  XCircle,
  Eye,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mock data
  const [agents] = useState([
    { id: 1, agency: 'Global Travels', name: 'Ali Khan', email: 'ali@gt.com', phone: '0300-1234567', city: 'Lahore', status: 'active' },
    { id: 2, agency: 'Sky Adventures', name: 'Sara Ahmed', email: 'sara@sky.com', phone: '0321-9876543', city: 'Karachi', status: 'active' },
    { id: 3, agency: 'Mountain Tours', name: 'Ahmed Ali', email: 'ahmed@mt.com', phone: '0333-5555555', city: 'Islamabad', status: 'active' }
  ])

  const [pendingRequests] = useState([
    { id: 1, agency: 'Sky Tours', name: 'Fatima Rizvi', email: 'fatima@sky.com', phone: '0321-4567890', city: 'Karachi' },
    { id: 2, agency: 'Desert Safaris', name: 'Usman Ahmed', email: 'usman@desert.com', phone: '0300-1111111', city: 'Lahore' }
  ])

  const [ticketStats] = useState({
    available: 120,
    booked: 45,
    pending: 15,
    cancelled: 8
  })

  const [ticketForm, setTicketForm] = useState({
    type: 'regular',
    date: '',
    airline: '',
    bagWeight: '',
    mealOption: 'yes',
    fare: ''
  })

  const handleTicketFormChange = (field: string, value: string) => {
    setTicketForm(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTicket = () => {
    console.log('Adding ticket:', ticketForm)
    // Reset form
    setTicketForm({
      type: 'regular',
      date: '',
      airline: '',
      bagWeight: '',
      mealOption: 'yes',
      fare: ''
    })
  }

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'agents', icon: Users, label: 'All Agents' },
    { id: 'tickets', icon: Ticket, label: 'Ticket Management' },
    { id: 'add-ticket', icon: Plus, label: 'Add Ticket' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#6415ff] text-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-purple-600">
          <h1 className="text-2xl font-bold">Bhatti Group</h1>
          <p className="text-purple-200 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-200 hover:bg-purple-600/50 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-purple-600">
          <Button
            onClick={onLogout}
            variant="ghost"
            className="w-full justify-start text-purple-200 hover:bg-purple-600/50 hover:text-white"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {activeSection === 'dashboard' && 'Dashboard'}
                {activeSection === 'agents' && 'Agent Management'}
                {activeSection === 'tickets' && 'Ticket Management'}
                {activeSection === 'add-ticket' && 'Add New Ticket'}
              </h2>
              <p className="text-gray-600 mt-1">Welcome back, Admin!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {/* Dashboard Section */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Agents</p>
                        <p className="text-3xl font-bold text-gray-900">10</p>
                      </div>
                      <Users className="w-8 h-8 text-[#6415ff]" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Available Tickets</p>
                        <p className="text-3xl font-bold text-green-600">{ticketStats.available}</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Booked Tickets</p>
                        <p className="text-3xl font-bold text-red-600">{ticketStats.booked}</p>
                      </div>
                      <Ticket className="w-8 h-8 text-red-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Pending Requests</p>
                        <p className="text-3xl font-bold text-orange-600">{pendingRequests.length}</p>
                      </div>
                      <Eye className="w-8 h-8 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <UserCheck className="w-5 h-5" />
                      <span>Incoming Requests</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingRequests.map(request => (
                        <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{request.name}</p>
                            <p className="text-sm text-gray-600">{request.email}</p>
                            <p className="text-sm text-gray-500">{request.agency} • {request.city}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Ticket Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Ticket className="w-5 h-5" />
                      <span>Manage Tickets</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Add New Ticket
                        </Button>
                        <Button variant="destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove Ticket
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{ticketStats.available}</p>
                          <p className="text-sm text-gray-600">Available</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-red-600">{ticketStats.booked}</p>
                          <p className="text-sm text-gray-600">Booked</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Agents Section */}
          {activeSection === 'agents' && (
            <div className="space-y-6">
              {/* Search Bar */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search agents..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Active Agents */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Agency Name</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {agents.map(agent => (
                        <TableRow key={agent.id}>
                          <TableCell className="font-medium">{agent.agency}</TableCell>
                          <TableCell>{agent.name}</TableCell>
                          <TableCell>{agent.email}</TableCell>
                          <TableCell>{agent.phone}</TableCell>
                          <TableCell>{agent.city}</TableCell>
                          <TableCell>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* New Agent Requests */}
              <Card>
                <CardHeader>
                  <CardTitle>New Agent Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Agency Name</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingRequests.map(request => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.agency}</TableCell>
                          <TableCell>{request.name}</TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell>{request.phone}</TableCell>
                          <TableCell>{request.city}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <UserCheck className="w-4 h-4 mr-1" />
                                Accept
                              </Button>
                              <Button size="sm" variant="destructive">
                                <UserX className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Tickets Section */}
          {activeSection === 'tickets' && (
            <div className="space-y-6">
              {/* Ticket Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{ticketStats.available}</p>
                    <p className="text-sm text-gray-600">Available</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-red-600">{ticketStats.booked}</p>
                    <p className="text-sm text-gray-600">Booked</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Eye className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-orange-600">{ticketStats.pending}</p>
                    <p className="text-sm text-gray-600">Pending</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <XCircle className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-600">{ticketStats.cancelled}</p>
                    <p className="text-sm text-gray-600">Cancelled</p>
                  </CardContent>
                </Card>
              </div>

              {/* Ticket Management Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Ticket Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 h-20">
                      <div className="text-center">
                        <Plus className="w-8 h-8 mx-auto mb-2" />
                        <p>Add New Ticket</p>
                      </div>
                    </Button>
                    <Button variant="destructive" className="h-20">
                      <div className="text-center">
                        <Trash2 className="w-8 h-8 mx-auto mb-2" />
                        <p>Remove Ticket</p>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Add Ticket Section */}
          {activeSection === 'add-ticket' && (
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Ticket Booking</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Ticket Type */}
                    <div className="flex justify-center space-x-4 mb-8">
                      <Button
                        variant={ticketForm.type === 'regular' ? 'default' : 'outline'}
                        onClick={() => handleTicketFormChange('type', 'regular')}
                        className="px-8 py-3"
                      >
                        Regular Ticket
                      </Button>
                      <Button
                        variant={ticketForm.type === 'umrah' ? 'default' : 'outline'}
                        onClick={() => handleTicketFormChange('type', 'umrah')}
                        className="px-8 py-3"
                      >
                        Umrah / Hajj Ticket
                      </Button>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date of Flight */}
                      <div className="space-y-2">
                        <Label>Date of Flight</Label>
                        <Input
                          type="date"
                          value={ticketForm.date}
                          onChange={(e) => handleTicketFormChange('date', e.target.value)}
                          className="h-12"
                        />
                      </div>

                      {/* Select Airline */}
                      <div className="space-y-2">
                        <Label>Select Airline</Label>
                        <Select value={ticketForm.airline} onValueChange={(value) => handleTicketFormChange('airline', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Airline Name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emirates">Emirates</SelectItem>
                            <SelectItem value="qatar">Qatar Airways</SelectItem>
                            <SelectItem value="etihad">Etihad Airways</SelectItem>
                            <SelectItem value="pia">Pakistan International Airlines</SelectItem>
                            <SelectItem value="airblue">Airblue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Add Flight Segment Button */}
                    <div className="flex justify-start">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Flight Segment
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Bag Weight */}
                      <div className="space-y-2">
                        <Label>Bag Weight (kg)</Label>
                        <Input
                          type="number"
                          placeholder="Enter weight in kg"
                          value={ticketForm.bagWeight}
                          onChange={(e) => handleTicketFormChange('bagWeight', e.target.value)}
                          className="h-12"
                        />
                      </div>

                      {/* Meal Option */}
                      <div className="space-y-2">
                        <Label>Meal Option</Label>
                        <Select value={ticketForm.mealOption} onValueChange={(value) => handleTicketFormChange('mealOption', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="halal">Halal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Fare */}
                    <div className="space-y-2">
                      <Label>Fare (Price)</Label>
                      <Input
                        type="number"
                        placeholder="Enter fare amount"
                        value={ticketForm.fare}
                        onChange={(e) => handleTicketFormChange('fare', e.target.value)}
                        className="h-12"
                      />
                    </div>

                    {/* Add Ticket Button */}
                    <Button
                      onClick={handleAddTicket}
                      className="w-full h-14 text-lg bg-[#6415ff] hover:bg-purple-700"
                    >
                      Add Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}