'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ConsultationPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialization: 'Clinical Psychologist',
      experience: '8 years',
      rating: 4.9,
      availability: 'Available today',
      languages: ['English', 'Mandarin'],
      image: `https://readdy.ai/api/search-image?query=professional%20female%20psychologist%20doctor%20in%20white%20coat%2C%20friendly%20smile%2C%20modern%20medical%20office%20background%2C%20confident%20and%20caring%20demeanor%2C%20medical%20professional%20portrait&width=300&height=300&seq=doc1&orientation=squarish`
    },
    {
      id: '2',
      name: 'Dr. Michael Rodriguez',
      specialization: 'Psychiatrist',
      experience: '12 years',
      rating: 4.8,
      availability: 'Available tomorrow',
      languages: ['English', 'Spanish'],
      image: `https://readdy.ai/api/search-image?query=professional%20male%20psychiatrist%20doctor%20in%20white%20coat%2C%20warm%20smile%2C%20modern%20medical%20office%20background%2C%20experienced%20and%20trustworthy%20appearance%2C%20medical%20professional%20portrait&width=300&height=300&seq=doc2&orientation=squarish`
    },
    {
      id: '3',
      name: 'Dr. Priya Sharma',
      specialization: 'Anxiety & Depression Specialist',
      experience: '10 years',
      rating: 4.9,
      availability: 'Available in 2 hours',
      languages: ['English', 'Hindi'],
      image: `https://readdy.ai/api/search-image?query=professional%20female%20doctor%20specialist%20in%20white%20coat%2C%20gentle%20smile%2C%20modern%20clinic%20background%2C%20compassionate%20and%20professional%20demeanor%2C%20medical%20professional%20portrait&width=300&height=300&seq=doc3&orientation=squarish`
    }
  ];

  const consultationTypes = [
    {
      type: 'Video Call',
      icon: 'ri-video-line',
      duration: '45 minutes',
      price: '$75',
      description: 'Face-to-face consultation via video'
    },
    {
      type: 'Voice Call',
      icon: 'ri-phone-line',
      duration: '45 minutes',
      price: '$65',
      description: 'Audio consultation over phone'
    },
    {
      type: 'Chat Session',
      icon: 'ri-chat-3-line',
      duration: '30 minutes',
      price: '$55',
      description: 'Text-based consultation'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 pb-20">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="px-6 py-4 flex items-center">
          <Link href="/">
            <i className="ri-arrow-left-line text-xl text-gray-700"></i>
          </Link>
          <h1 className="text-lg font-semibold text-gray-800 ml-4">Professional Consultation</h1>
        </div>
      </div>

      <div className="pt-20 px-6">
        {!showBooking ? (
          <>
            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="ri-alarm-warning-line text-red-600"></i>
                </div>
                <div className="flex-1">
                  <p className="text-red-800 font-medium text-sm">Crisis Support</p>
                  <p className="text-red-600 text-xs">Need immediate help? Call emergency services</p>
                </div>
                <Link href="/emergency">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-full text-xs font-medium !rounded-button">
                    Emergency
                  </button>
                </Link>
              </div>
            </div>

            {/* Available Doctors */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Professionals</h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                            <p className="text-sm text-gray-600">{doctor.specialization}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className="ri-star-fill text-yellow-400 text-sm"></i>
                            <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-xs text-gray-500">{doctor.experience} experience</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            doctor.availability.includes('today') || doctor.availability.includes('hours') 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {doctor.availability}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {doctor.languages.map((lang, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                {lang}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => {
                              setSelectedDoctor(doctor.id);
                              setShowBooking(true);
                            }}
                            className="bg-pink-500 text-white px-4 py-2 rounded-xl text-sm font-medium !rounded-button"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Report Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Medical Records (Optional)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Upload any medical reports or previous assessments to help your doctor provide better care.
              </p>
              <Link href="/upload">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-upload-cloud-line text-gray-400 text-xl"></i>
                  </div>
                  <p className="text-gray-600 text-sm">Tap to upload medical reports</p>
                  <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG supported</p>
                </div>
              </Link>
            </div>
          </>
        ) : (
          /* Booking Interface */
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <button 
                onClick={() => setShowBooking(false)}
                className="text-gray-600"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
              <h2 className="text-lg font-semibold text-gray-800">Book Appointment</h2>
            </div>

            {/* Selected Doctor */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              {doctors.filter(d => d.id === selectedDoctor).map(doctor => (
                <div key={doctor.id} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation Type */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Choose Consultation Type</h3>
              <div className="space-y-3">
                {consultationTypes.map((consult, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                          <i className={`${consult.icon} text-pink-600`}></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{consult.type}</h4>
                          <p className="text-xs text-gray-500">{consult.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">{consult.price}</p>
                        <p className="text-xs text-gray-500">{consult.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className="border border-gray-200 rounded-xl p-3 text-sm font-medium hover:border-pink-300 hover:bg-pink-50 transition-colors !rounded-button"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm Booking */}
            <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-2xl font-semibold !rounded-button">
              Confirm Appointment - $75
            </button>
          </div>
        )}
      </div>

      <Navigation />
    </div>
  );
}