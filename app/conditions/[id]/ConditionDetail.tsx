'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';

interface ConditionDetailProps {
  conditionId: string;
}

export default function ConditionDetail({ conditionId }: ConditionDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const conditionData: Record<string, any> = {
    depression: {
      name: 'Depression',
      description: 'Depression is a common mental health condition that causes persistent feelings of sadness and loss of interest in daily activities.',
      symptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Sleep problems', 'Appetite changes', 'Difficulty concentrating', 'Feelings of worthlessness'],
      color: 'from-blue-400 to-blue-500',
      icon: 'ri-emotion-unhappy-line'
    },
    anxiety: {
      name: 'Anxiety Disorders',
      description: 'Anxiety disorders involve excessive worry, fear, or nervousness that interferes with daily life and activities.',
      symptoms: ['Excessive worry', 'Restlessness', 'Panic attacks', 'Physical tension', 'Avoidance behavior', 'Sleep difficulties', 'Irritability'],
      color: 'from-yellow-400 to-orange-400',
      icon: 'ri-alarm-warning-line'
    },
    stress: {
      name: 'Stress & Burnout',
      description: 'Chronic stress and burnout occur when overwhelming pressure leads to physical and emotional exhaustion.',
      symptoms: ['Overwhelming pressure', 'Exhaustion', 'Irritability', 'Decreased performance', 'Physical symptoms', 'Emotional detachment', 'Sleep problems'],
      color: 'from-red-400 to-pink-400',
      icon: 'ri-fire-line'
    }
  };

  const condition = conditionData[conditionId] || conditionData.depression;

  const resources = [
    {
      title: '5-Minute Yoga',
      description: 'Gentle yoga exercises to reduce stress',
      icon: 'ri-leaf-line',
      color: 'bg-green-100 text-green-600',
      image: `https://readdy.ai/api/search-image?query=peaceful%20woman%20doing%20gentle%20yoga%20meditation%20in%20serene%20natural%20environment%2C%20soft%20lighting%2C%20calming%20atmosphere%2C%20wellness%20and%20mindfulness%2C%20isolated%20on%20white%20background%2C%20minimalist%20style%2C%20clean%20composition&width=300&height=200&seq=yoga1&orientation=landscape`
    },
    {
      title: 'Meditation Music',
      description: 'Calming sounds for relaxation',
      icon: 'ri-music-line',
      color: 'bg-purple-100 text-purple-600',
      image: `https://readdy.ai/api/search-image?query=serene%20music%20therapy%20setup%20with%20headphones%20and%20peaceful%20nature%20sounds%20visualization%2C%20calming%20blue%20and%20purple%20tones%2C%20meditation%20and%20relaxation%20theme%2C%20clean%20modern%20design&width=300&height=200&seq=music1&orientation=landscape`
    },
    {
      title: 'Breathing Exercises',
      description: 'Guided breathing techniques',
      icon: 'ri-lungs-line',
      color: 'bg-blue-100 text-blue-600',
      image: `https://readdy.ai/api/search-image?query=peaceful%20person%20practicing%20breathing%20exercises%2C%20calm%20meditation%20pose%2C%20soft%20natural%20lighting%2C%20wellness%20and%20mindfulness%20concept%2C%20serene%20background%2C%20clean%20composition&width=300&height=200&seq=breath1&orientation=landscape`
    },
    {
      title: 'Mind Games',
      description: 'Cognitive exercises and puzzles',
      icon: 'ri-puzzle-line',
      color: 'bg-orange-100 text-orange-600',
      image: `https://readdy.ai/api/search-image?query=colorful%20brain%20training%20puzzle%20games%20and%20cognitive%20exercises%2C%20modern%20educational%20design%2C%20bright%20engaging%20colors%2C%20mental%20wellness%20theme%2C%20clean%20interface%20style&width=300&height=200&seq=games1&orientation=landscape`
    }
  ];

  const homeRemedies = [
    'Maintain a regular sleep schedule',
    'Practice daily physical exercise',
    'Eat nutritious, balanced meals',
    'Limit caffeine and alcohol',
    'Connect with supportive friends and family',
    'Practice mindfulness and meditation',
    'Spend time in nature',
    'Keep a gratitude journal'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="px-6 py-4 flex items-center">
          <Link href="/conditions">
            <i className="ri-arrow-left-line text-xl text-gray-700"></i>
          </Link>
          <div className="ml-4 flex items-center space-x-3">
            <div className={`w-8 h-8 bg-gradient-to-br ${condition.color} rounded-lg flex items-center justify-center`}>
              <i className={`${condition.icon} text-white text-sm`}></i>
            </div>
            <h1 className="text-lg font-semibold text-gray-800">{condition.name}</h1>
          </div>
        </div>
      </div>

      <div className="pt-20 px-6">
        {/* Tab Navigation */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-1 mb-6 shadow-sm">
          <div className="grid grid-cols-3 gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'resources', label: 'Resources' },
              { id: 'remedies', label: 'Self-Care' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 rounded-xl text-sm font-medium transition-colors !rounded-button ${
                  activeTab === tab.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">About {condition.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{condition.description}</p>
              
              <h3 className="font-semibold text-gray-800 mb-3">Common Symptoms</h3>
              <div className="space-y-2">
                {condition.symptoms.map((symptom: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <i className="ri-information-line text-yellow-600 text-lg flex-shrink-0 mt-0.5"></i>
                <p className="text-sm text-yellow-800">
                  This information is for educational purposes only. Please consult with a healthcare professional for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className={`absolute top-3 left-3 w-8 h-8 ${resource.color} rounded-full flex items-center justify-center`}>
                    <i className={`${resource.icon} text-sm`}></i>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-xl text-sm font-medium !rounded-button">
                    Start Activity
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Self-Care Tab */}
        {activeTab === 'remedies' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Self-Care Tips</h2>
              <div className="space-y-3">
                {homeRemedies.map((remedy, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-green-600 text-xs"></i>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{remedy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-lightbulb-line text-blue-600"></i>
                </div>
                <div className="flex-1">
                  <p className="text-blue-800 font-medium text-sm">Remember</p>
                  <p className="text-blue-600 text-xs">Self-care is a journey, not a destination. Be patient with yourself.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consult Doctor Button */}
        <div className="mt-8">
          <Link href="/consultation">
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-2xl font-semibold text-center shadow-sm !rounded-button">
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-user-heart-line"></i>
                <span>Consult a Professional</span>
              </div>
            </button>
          </Link>
        </div>
      </div>

      <Navigation />
    </div>
  );
}