'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Search,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Teachers', href: '/teachers', icon: GraduationCap },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Classes', href: '/classes', icon: BookOpen },
  { name: 'Grades', href: '/grades', icon: Award },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  const notifications = [
    { id: 1, message: 'New attendance report available', time: '5m ago' },
    { id: 2, message: 'Grade submission deadline tomorrow', time: '1h ago' },
    { id: 3, message: 'System maintenance scheduled', time: '2h ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 shadow-lg"
        style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-transparent">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-md">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">SafConnect</span>
              <p className="text-xs text-slate-500">School Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-l-4 border-blue-600 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50 border-l-4 border-transparent hover:border-blue-300'
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile Section */}
          <div className="border-t border-slate-100 p-4 bg-gradient-to-t from-slate-50 to-transparent">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-sm">AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">Admin User</p>
                <p className="text-xs text-slate-500 truncate">admin@school.edu</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start text-slate-700 hover:bg-slate-100">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/login" className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-700 hover:bg-slate-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search students, teachers..."
                  className="pl-10 bg-slate-50 border-slate-200 focus:bg-white rounded-lg"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-slate-700 hover:bg-slate-100"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                </Button>
                
                {/* Notifications Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-transparent">
                      <h3 className="font-semibold text-slate-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                          <p className="text-sm text-slate-900">{notif.message}</p>
                          <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-slate-100 text-center bg-slate-50">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 font-medium">
                        View All
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">AD</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4 hidden sm:block" />
                </Button>

                {/* Profile Dropdown Menu */}
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-transparent">
                      <p className="text-sm font-semibold text-slate-900">Admin User</p>
                      <p className="text-xs text-slate-500">admin@school.edu</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start text-slate-700 hover:bg-slate-100">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                      <Link href="/login" className="block">
                        <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white mt-12 shadow-lg">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-md">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">SafConnect</span>
                </div>
                <p className="text-sm text-slate-600">Professional school management system for modern education.</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/dashboard" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Dashboard</Link></li>
                  <li><Link href="/students" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Students</Link></li>
                  <li><Link href="/teachers" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Teachers</Link></li>
                  <li><Link href="/attendance" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Attendance</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Help Center</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Documentation</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact Us</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Status</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Privacy Policy</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Terms of Service</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cookie Policy</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Security</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-600">© 2024 SafConnect. All rights reserved. Lincoln High School.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Twitter</a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">LinkedIn</a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
