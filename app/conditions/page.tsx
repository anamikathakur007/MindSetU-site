
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ConditionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const conditions = [
    {
      id: 'depression',
      name: 'Depression',
      description: 'Persistent sadness and loss of interest in activities',
      icon: 'ri-emotion-unhappy-line',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      commonSymptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Sleep problems']
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      description: 'Excessive worry, fear, and nervousness',
      icon: 'ri-alarm-warning-line',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      commonSymptoms: ['Excessive worry', 'Restlessness', 'Panic attacks', 'Physical tension']
    },
    {
      id: 'stress',
      name: 'Stress & Burnout',
      description: 'Overwhelming pressure and emotional exhaustion',
      icon: 'ri-fire-line',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      commonSymptoms: ['Overwhelming pressure', 'Exhaustion', 'Irritability', 'Decreased performance']
    },
    {
      id: 'ptsd',
      name: 'PTSD',
      description: 'Post-traumatic stress and recurring memories',
      icon: 'ri-shield-cross-line',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      commonSymptoms: ['Flashbacks', 'Nightmares', 'Avoidance', 'Hypervigilance']
    },
    {
      id: 'ocd',
      name: 'OCD',
      description: 'Obsessive thoughts and compulsive behaviors',
      icon: 'ri-refresh-line',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      commonSymptoms: ['Repetitive thoughts', 'Compulsive behaviors', 'Rituals', 'Intrusive thoughts']
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      description: 'Extreme mood swings between highs and lows',
      icon: 'ri-contrast-2-line',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      commonSymptoms: ['Mood swings', 'Manic episodes', 'Depressive episodes', 'Energy fluctuations']
    },
    {
      id: 'adhd',
      name: 'ADHD',
      description: 'Attention and hyperactivity management challenges',
      icon: 'ri-focus-3-line',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      commonSymptoms: ['Inattention', 'Hyperactivity', 'Impulsivity', 'Difficulty focusing']
    },
    {
      id: 'eating',
      name: 'Eating Disorders',
      description: 'Unhealthy eating patterns and body image concerns',
      icon: 'ri-heart-pulse-line',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      commonSymptoms: ['Distorted body image', 'Restrictive eating', 'Food preoccupation', 'Weight concerns']
    },
    {
      id: 'sleep',
      name: 'Sleep Disorders',
      description: 'Problems with sleep patterns and quality',
      icon: 'ri-moon-line',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      commonSymptoms: ['Insomnia', 'Sleep disruption', 'Daytime fatigue', 'Sleep quality issues']
    },
    {
      id: 'social',
      name: 'Social Anxiety',
      description: 'Fear of social situations and judgment',
      icon: 'ri-group-line',
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      commonSymptoms: ['Social fear', 'Performance anxiety', 'Avoidance', 'Self-consciousness']
    }
  ];

  const filteredConditions = conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-20 border-b border-gray-100">
        <div className="px-6 py-5">
          <div className="flex items-center mb-5">
            <Link href="/" className="mr-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-arrow-left-line text-white text-lg"></i>
              </div>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Mental Health Conditions</h1>
              <p className="text-sm text-gray-600 font-medium">Expert resources and guidance</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
              <i className="ri-search-line text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              placeholder="Search mental health conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pt-36 px-6">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <i className="ri-book-open-line text-white text-xl"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg mb-1">Educational Resources</h2>
              <p className="text-white/90 text-sm font-medium">
                Learn about conditions and discover personalized support strategies
              </p>
            </div>
          </div>
        </div>

        {/* Conditions Grid */}
        {filteredConditions.length > 0 ? (
          <div className="space-y-5">
            {filteredConditions.map((condition) => (
              <Link key={condition.id} href={`/conditions/${condition.id}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl border border-white/50 active:scale-[0.98] transition-all duration-300">
                  <div className="flex items-start space-x-5">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${condition.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <i className={`${condition.icon} text-white text-2xl`}></i>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg mb-1">{condition.name}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{condition.description}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <i className="ri-arrow-right-line text-gray-500"></i>
                          </div>
                        </div>
                      </div>
                      
                      {/* Symptoms */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Common Signs</p>
                        <div className="flex flex-wrap gap-2">
                          {condition.commonSymptoms.slice(0, 3).map((symptom, index) => (
                            <span 
                              key={index} 
                              className={`${condition.bgColor} ${condition.textColor} px-3 py-1.5 rounded-full text-xs font-medium border border-current/20`}
                            >
                              {symptom}
                            </span>
                          ))}
                          {condition.commonSymptoms.length > 3 && (
                            <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium">
                              +{condition.commonSymptoms.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-search-line text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-3">No conditions found</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
              Try searching with different keywords or browse all available conditions
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="bg-purple-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 !rounded-button"
            >
              Show All Conditions
            </button>
          </div>
        )}

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-6 mt-10 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <i className="ri-phone-line text-white text-xl animate-pulse"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">Crisis Support Available</h3>
              <p className="text-white/90 text-sm font-medium">
                If you're having thoughts of self-harm, immediate help is available
              </p>
            </div>
            <Link href="/emergency">
              <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 !rounded-button">
                Get Help
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
