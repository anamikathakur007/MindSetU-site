
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
    "How often have you had little interest or pleasure in doing things?",
    "How often have you felt nervous, anxious, or on edge?",
    "How often have you had trouble falling or staying asleep?",
    "How often have you felt tired or had little energy?",
    "How often have you had trouble concentrating on things?",
    "How often have you felt bad about yourself or that you're a failure?",
    "How often have you had thoughts of hurting yourself?"
  ];

  const options = [
    { text: "Not at all", value: 0 },
    { text: "Several days", value: 1 },
    { text: "More than half the days", value: 2 },
    { text: "Nearly every day", value: 3 }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getScore = () => answers.reduce((sum, score) => sum + score, 0);
  const getRiskLevel = () => {
    const score = getScore();
    if (score <= 5) return 'low';
    if (score <= 10) return 'moderate';
    return 'high';
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const riskLevel = getRiskLevel();
    const score = getScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
          <div className="px-6 py-4 flex items-center">
            <Link href="/">
              <i className="ri-arrow-left-line text-xl text-gray-700"></i>
            </Link>
            <h1 className="text-lg font-semibold text-gray-800 ml-4">Assessment Results</h1>
          </div>
        </div>

        <div className="pt-20 pb-24 px-6">
          {/* Result Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <div className="text-center mb-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                riskLevel === 'low' ? 'bg-green-100' :
                  riskLevel === 'moderate' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <i className={`text-2xl ${
                  riskLevel === 'low' ? 'ri-shield-check-line text-green-600' :
                    riskLevel === 'moderate' ? 'ri-alert-line text-yellow-600' : 'ri-heart-pulse-line text-red-600'
                }`}></i>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Your Score: {score}/24</h2>
              <p className={`text-sm font-medium ${
                riskLevel === 'low' ? 'text-green-600' :
                  riskLevel === 'moderate' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {riskLevel === 'low' && 'Low Risk - You\'re doing well!'}
                {riskLevel === 'moderate' && 'Moderate Risk - Consider support'}
                {riskLevel === 'high' && 'High Risk - Please seek help'}
              </p>
            </div>

            {/* Recommendations */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Recommended Actions:</h3>

              {riskLevel === 'low' && (
                <div className="space-y-3">
                  <Link href="/conditions/wellness">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <div className="flex items-center space-x-3">
                        <i className="ri-leaf-line text-green-600"></i>
                        <div>
                          <p className="font-medium text-green-800">Wellness Activities</p>
                          <p className="text-sm text-green-600">Maintain your mental wellness</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {riskLevel === 'moderate' && (
                <div className="space-y-3">
                  <Link href="/chat">
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <div className="flex items-center space-x-3">
                        <i className="ri-chat-3-line text-yellow-600"></i>
                        <div>
                          <p className="font-medium text-yellow-800">Talk to Support Bot</p>
                          <p className="text-sm text-yellow-600">Get emotional support</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {riskLevel === 'high' && (
                <div className="space-y-3">
                  <Link href="/chat/crisis">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                      <div className="flex items-center space-x-3">
                        <i className="ri-chat-heart-line text-red-600"></i>
                        <div>
                          <p className="font-medium text-red-800">Crisis Support Chat</p>
                          <p className="text-sm text-red-600">Immediate specialized help</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/consultation">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <i className="ri-user-heart-line text-blue-600"></i>
                        <div>
                          <p className="font-medium text-blue-800">Contact Professional</p>
                          <p className="text-sm text-blue-600">Speak with a psychiatrist</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={resetTest}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium !rounded-button"
              >
                Retake Test
              </button>
              <Link href="/" className="flex-1">
                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium !rounded-button">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
        <div className="px-6 py-4 flex items-center">
          <Link href="/">
            <i className="ri-arrow-left-line text-xl text-gray-700"></i>
          </Link>
          <h1 className="text-lg font-semibold text-gray-800 ml-4">Mental Health Assessment</h1>
        </div>
      </div>

      <div className="pt-20 pb-24 px-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
            {questions[currentQuestion]}
          </h2>

          <div className="space-y-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors !rounded-button"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <i className="ri-information-line text-yellow-600 text-lg flex-shrink-0 mt-0.5"></i>
            <p className="text-sm text-yellow-800">
              This assessment is for informational purposes only and is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
