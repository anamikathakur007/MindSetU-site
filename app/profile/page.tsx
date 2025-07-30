
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    age: '24',
    gender: 'Non-binary',
    joinDate: 'January 2024'
  });

  const [showSettings, setShowSettings] = useState(false);

  const stats = [
    { label: 'Days Active', value: '45', icon: 'ri-calendar-line' },
    { label: 'Sessions Completed', value: '12', icon: 'ri-check-line' },
    { label: 'Assessments Taken', value: '3', icon: 'ri-heart-pulse-line' },
    { label: 'Resources Used', value: '28', icon: 'ri-book-open-line' }
  ];

  const menuItems = [
    {
      title: 'My Assessments',
      description: 'View your mental health assessment history',
      icon: 'ri-file-chart-line',
      href: '/assessments',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Chat History',
      description: 'Review your support conversations',
      icon: 'ri-chat-history-line',
      href: '/chat-history',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Appointments',
      description: 'Manage your professional consultations',
      icon: 'ri-calendar-check-line',
      href: '/appointments',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Privacy Settings',
      description: 'Control your data and privacy preferences',
      icon: 'ri-shield-check-line',
      href: '/privacy',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Emergency Contacts',
      description: 'Manage your crisis support contacts',
      icon: 'ri-contacts-line',
      href: '/emergency-contacts',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Help & Support',
      description: 'Get help using the app',
      icon: 'ri-question-line',
      href: '/help',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <i className="ri-settings-3-line text-gray-600"></i>
          </button>
        </div>
      </div>

      <div className="pt-20 pb-28 px-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-500 text-xs mt-1">Member since {user.joinDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-500 text-xs">Age</p>
              <p className="font-semibold text-gray-800">{user.age} years</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-500 text-xs">Gender</p>
              <p className="font-semibold text-gray-800">{user.gender}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Your Journey</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${stat.icon} text-blue-600 text-sm`}></i>
                </div>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="bg-white rounded-2xl p-4 shadow-sm active:scale-95 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <i className="ri-arrow-right-line text-gray-400"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mt-6">
          <div className="flex items-start space-x-3">
            <i className="ri-shield-check-line text-green-600 text-lg flex-shrink-0 mt-0.5"></i>
            <div>
              <p className="text-green-800 font-medium text-sm mb-1">Your Privacy is Protected</p>
              <p className="text-green-600 text-xs">
                All your data is encrypted and kept anonymous unless you choose to share medical history. 
                You have full control over your information.
              </p>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="mt-8">
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium !rounded-button">
            Sign Out
          </button>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
