
'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  const quickAccessButtons = [
    {
      title: "Mental Health Assessment",
      subtitle: "Take a personalized wellness check",
      icon: "ri-brain-line",
      href: "/assessment",
      color: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-500/25"
    },
    {
      title: "AI Wellness Companion",
      subtitle: "24/7 emotional support & guidance",
      icon: "ri-chat-heart-line",
      href: "/chat",
      color: "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600",
      shadowColor: "shadow-emerald-500/25"
    },
    {
      title: "Condition Resources",
      subtitle: "Expert-curated mental health guides",
      icon: "ri-file-list-3-line",
      href: "/conditions",
      color: "bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700",
      shadowColor: "shadow-purple-500/25"
    },
    {
      title: "Professional Consultation",
      subtitle: "Connect with licensed therapists",
      icon: "ri-user-heart-line",
      href: "/consultation",
      color: "bg-gradient-to-br from-rose-500 via-pink-600 to-rose-700",
      shadowColor: "shadow-rose-500/25"
    }
  ];

  const features = [
    {
      icon: "ri-shield-check-line",
      title: "100% Confidential",
      description: "Your privacy is protected with end-to-end encryption"
    },
    {
      icon: "ri-time-line",
      title: "24/7 Available",
      description: "Support whenever you need it, day or night"
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Evidence-Based",
      description: "Clinically validated therapeutic approaches"
    },
    {
      icon: "ri-user-heart-line",
      title: "Licensed Professionals",
      description: "Certified therapists and mental health experts"
    },
    {
      icon: "ri-chat-smile-2-line",
      title: "Personalized Care",
      description: "Tailored support based on your unique needs"
    },
    {
      icon: "ri-global-line",
      title: "Global Community",
      description: "Connect with others on similar journeys"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "College Student",
      text: "MindSetU helped me through my anxiety. The chatbot is so understanding and the resources are amazing.",
      rating: 5
    },
    {
      name: "James R.",
      role: "Working Professional",
      text: "Finally found a mental health app that actually cares. The assessment helped me understand myself better.",
      rating: 5
    },
    {
      name: "Maya K.",
      role: "Graduate Student",
      text: "The crisis support feature was a lifesaver during my hardest moments. Thank you MindSetU team.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-xl shadow-lg z-10 border-b border-indigo-100">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-pacifico">
                MindSetU
              </h1>
              <p className="text-sm text-gray-600 mt-1 font-medium">Compassion Meets Technology – Your Mind, Our Mission</p>
            </div>
            <Link href="/profile">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-user-line text-white text-lg"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-32 px-6">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/50">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="ri-heart-pulse-line text-white text-xl"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">Welcome to Your Safe Space</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Your mental wellness journey starts here. Get personalized support, evidence-based resources, and professional guidance in a judgment-free environment.
                </p>
                <div className="flex items-center text-sm text-indigo-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Online & Ready to Help
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
              <i className="ri-rocket-line text-indigo-600 mr-2"></i>
              Get Started
            </h3>
            <div className="space-y-4">
              {quickAccessButtons.map((button, index) => (
                <Link key={index} href={button.href}>
                  <div className={`${button.color} ${button.shadowColor} rounded-2xl p-5 shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <i className={`${button.icon} text-white text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg">{button.title}</h4>
                        <p className="text-white/90 text-sm font-medium">{button.subtitle}</p>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-arrow-right-line text-white"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
              <i className="ri-star-line text-yellow-500 mr-2"></i>
              Why Choose MindSetU
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className={`${feature.icon} text-white text-lg`}></i>
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Testimonials */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
              <i className="ri-chat-quote-line text-green-500 mr-2"></i>
              What Our Users Say
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-user-smile-line text-white text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-5 text-center">Making a Real Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-xs text-indigo-100">Users Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-indigo-100">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-xs text-indigo-100">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <i className="ri-phone-line text-white text-xl animate-pulse"></i>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-lg">Crisis Support</p>
                <p className="text-white/90 text-sm font-medium">Immediate help available 24/7</p>
              </div>
              <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 !rounded-button">
                Get Help Now
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Start Your Journey Today</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Take the first step towards better mental health. Our comprehensive platform is designed to support you at every stage of your wellness journey.
              </p>
              <Link href="/assessment">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 !rounded-button">
                  Begin Assessment
                </button>
              </Link>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Your Wellness Toolkit</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="ri-meditation-line text-white text-2xl mb-2"></i>
                <p className="text-white font-semibold text-sm">Meditation</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="ri-article-line text-white text-2xl mb-2"></i>
                <p className="text-white font-semibold text-sm">Articles</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="ri-heart-3-line text-white text-2xl mb-2"></i>
                <p className="text-white font-semibold text-sm">Self-Care</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="ri-community-line text-white text-2xl mb-2"></i>
                <p className="text-white font-semibold text-sm">Community</p>
              </div>
            </div>
          </div>

          {/* Final motivational section */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 shadow-xl text-center">
            <i className="ri-sun-line text-white text-3xl mb-3"></i>
            <h3 className="text-xl font-bold text-white mb-2">You're Not Alone</h3>
            <p className="text-white/90 text-sm font-medium">
              Join thousands who have found hope, healing, and happiness through MindSetU
            </p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
