
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isStreaming?: boolean;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your personal mental wellness companion. I'm here to listen, support, and help you navigate through whatever you're experiencing. What's on your mind today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [lastSeen, setLastSeen] = useState<Date>(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);

  // Real-time typing indicator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsUserTyping(true);

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsUserTyping(false);
    }, 1000);
  };

  // Update last seen timestamp
  useEffect(() => {
    const interval = setInterval(() => {
      setLastSeen(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getContextualResponse = useCallback((userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();

    // Enhanced patterns with more keywords
    const patterns = {
      greeting: /(hi|hello|hey|good morning|good afternoon|good evening|sup|what's up)/i,
      anxiety: /(anxious|worried|panic|nervous|scared|fear|overwhelm|worried sick|freaking out|stressed out|on edge)/i,
      depression: /(sad|depressed|down|hopeless|empty|worthless|alone|lonely|isolated|dark thoughts|blue|miserable)/i,
      stress: /(stress|pressure|overwhelm|burden|tired|exhausted|burned out|overloaded|too much)/i,
      anger: /(angry|mad|furious|irritated|frustrated|rage|pissed|annoyed|upset)/i,
      sleep: /(sleep|insomnia|tired|can't sleep|nightmares|restless|tossing|turning|wide awake)/i,
      relationships: /(relationship|friend|family|partner|boyfriend|girlfriend|husband|wife|breakup|conflict|fight)/i,
      work: /(work|job|career|boss|colleague|workplace|school|study|deadline|meeting|project)/i,
      selfharm: /(hurt myself|self harm|suicide|kill myself|end it all|don't want to live|worthless|give up)/i,
      positive: /(better|good|happy|excited|grateful|thankful|amazing|wonderful|great|fantastic|awesome)/i,
      therapy: /(therapist|counselor|therapy|treatment|medication|psychiatrist|psychologist)/i,
      coping: /(cope|manage|deal with|handle|get through|strategies|techniques|help)/i
    };

    const responses = {
      greeting: [
        "Hello! It's wonderful to connect with you today. I'm here to provide a safe, non-judgmental space where you can share anything that's on your mind. How are you feeling right now?",
        "Hi there! Thank you for reaching out. That takes courage, and I want you to know that whatever you're experiencing is valid. What would you like to talk about today?",
        "Hey! I'm so glad you're here. This is your space to be completely honest about how you're feeling. What's been on your mind lately?"
      ],
      anxiety: [
        "I can hear that you're experiencing anxiety, and I want you to know that what you're feeling is completely valid. Anxiety can feel overwhelming, but you're not alone in this. Let's try a quick grounding technique: Can you name 5 things you can see around you right now?",
        "Thank you for sharing that you're feeling anxious. It takes strength to acknowledge these feelings. Right now, let's focus on your breathing - take a slow breath in through your nose for 4 counts, hold for 4, then exhale through your mouth for 6. What situation is contributing to your anxiety today?",
        "Anxiety can make everything feel urgent and overwhelming, but remember that you're safe in this moment. Your feelings are temporary, even when they feel permanent. What specific thoughts or situations are triggering your anxiety right now?",
        "I notice you're dealing with anxiety. That racing heart, those worried thoughts - they're all valid responses your body is having. Let's slow things down together. Try this: breathe in for 4, hold for 7, out for 8. What's making you feel most anxious today?"
      ],
      depression: [
        "I'm truly sorry you're experiencing these heavy feelings. Depression can make everything feel difficult and hopeless, but please know that you matter deeply, and these feelings can change. You're brave for reaching out today. What has been the most challenging part of your day?",
        "Thank you for trusting me with how you're feeling. Depression often tells us lies about our worth and future, but those thoughts aren't facts. You are valuable, and your life has meaning. What small thing brought you even a moment of comfort recently?",
        "I hear the pain in what you're sharing, and I want you to know that feeling this way doesn't make you weak or broken. It makes you human. Depression is treatable, and you don't have to carry this alone. What kind of support would feel most helpful right now?",
        "Those feelings of sadness and emptiness are so heavy to carry. I want you to know that reaching out shows incredible strength. Even when everything feels dark, you're still here, and that matters. What's one tiny thing that used to bring you joy?"
      ],
      stress: [
        "Stress can feel like carrying the weight of the world on your shoulders. You're doing the best you can with everything on your plate, and that's enough. Let's break this down - what's the one thing causing you the most stress right now?",
        "It sounds like you're under a lot of pressure. Remember, you don't have to handle everything at once. Sometimes the most productive thing we can do is pause and breathe. What's one small thing you could take off your plate today?",
        "Chronic stress can be exhausting for both your mind and body. You're not alone in feeling overwhelmed by life's demands. What boundaries do you think would help you feel more balanced?",
        "That overwhelming feeling when everything feels urgent and important - I hear you. Your stress is valid. Let's try to find one thing you can control right now. What's the smallest step you could take to ease just a little pressure?"
      ],
      anger: [
        "I can sense your frustration, and anger is a completely normal human emotion. Often anger is protecting us from feeling hurt or vulnerable. Thank you for sharing this with me instead of keeping it bottled up. What's underneath this anger for you?",
        "Your anger is valid, and it's telling us something important about your needs or boundaries. Let's explore this together safely. What happened that triggered these feelings?",
        "Feeling angry can be intense and uncomfortable. It's okay to feel this way. Sometimes anger is our mind's way of saying something isn't right. What do you think your anger is trying to tell you?",
        "That fire in your chest, that urge to react - anger can be so powerful. You're wise to talk about it instead of acting on it impulsively. What boundary of yours feels like it's been crossed?"
      ],
      sleep: [
        "Sleep issues can affect everything - your mood, energy, and ability to cope with stress. You're not alone in struggling with this. When did you first notice changes in your sleep patterns? What thoughts tend to keep you awake?",
        "Poor sleep can make everything harder to handle. Your brain and body need rest to function well. Let's talk about what might be interfering with your sleep. Are racing thoughts, physical discomfort, or something else keeping you awake?",
        "Sleep disturbances are often connected to our mental health. Creating a bedtime routine and addressing what's on your mind can help. What does your evening routine look like currently?",
        "Those endless nights staring at the ceiling, mind racing - sleep problems are so frustrating. Your body needs rest to heal and recharge. What's usually running through your mind when you can't sleep?"
      ],
      relationships: [
        "Relationships can be one of our greatest sources of joy and our biggest challenges. It's normal to have ups and downs with people we care about. What's been happening in your relationship that's concerning you?",
        "Human connections are so important, and it sounds like you're navigating something difficult with someone who matters to you. Would you like to share more about what's been happening?",
        "Relationship struggles can affect our entire well-being. You're wise to think about these dynamics and seek support. What patterns are you noticing that you'd like to change?",
        "People we care about can bring us such joy and such pain. It's beautiful and complicated. What's happening in your relationships that's weighing on your heart right now?"
      ],
      work: [
        "Work stress is incredibly common, and it can spill over into every area of our lives. You deserve to feel valued and supported in your workplace. What's been the most challenging aspect of your work situation?",
        "Career pressures can feel overwhelming, especially when they conflict with our personal well-being. You're not defined by your job performance. What specific work situations are causing you the most distress?",
        "Workplace dynamics can be complex and draining. It's important to protect your mental health even while meeting professional responsibilities. How is your work environment affecting your overall well-being?",
        "Work taking over your life, demanding deadlines, difficult people - it can feel like there's no escape. Your mental health matters more than any job. What's making work feel so overwhelming right now?"
      ],
      therapy: [
        "It's wonderful that you're thinking about professional support. Therapy can be incredibly helpful for working through challenges and developing coping strategies. What's prompting you to consider therapy right now?",
        "Seeking professional help is a sign of strength, not weakness. Therapists can provide specialized tools and perspectives that friends and family might not be able to offer. What kind of support are you hoping to find?",
        "Many people find therapy life-changing. It's a space just for you to explore your thoughts and feelings without judgment. What feels most important for you to work on right now?",
        "Professional support can make such a difference. Whether it's therapy, counseling, or psychiatric care, getting the right help for your needs is so important. What's been your experience with mental health professionals so far?"
      ],
      coping: [
        "Developing healthy coping strategies is so important for managing difficult emotions and situations. You're already taking a positive step by reaching out and talking about what you're experiencing. What coping methods have you tried before?",
        "Everyone needs tools to help them handle life's challenges. Some strategies work better for different people - it's about finding what works for you. What situations do you find hardest to cope with?",
        "Building a toolkit of coping strategies takes time and practice. You're being proactive by thinking about this. What helps you feel most grounded when things get overwhelming?",
        "Learning to manage difficult emotions and situations is a skill that develops over time. You're already showing resilience by seeking support. What would feeling 'in control' look like for you?"
      ],
      selfharm: [
        "I'm deeply concerned about what you're sharing, and I'm glad you trusted me with these thoughts. These feelings are a sign that you're in significant pain, not that there's something wrong with you. Please know that you deserve support and care. Have you been able to talk to anyone else about these thoughts?",
        "Thank you for being honest with me about these difficult thoughts. What you're experiencing is a mental health emergency, and you deserve immediate, professional support. Please consider calling a crisis helpline or going to an emergency room. You are not alone, and help is available.",
        "I'm worried about you and want to make sure you get the support you need right away. These thoughts are a sign that you're struggling with intense emotional pain, and there are people trained to help. Can we talk about reaching out to a crisis counselor or trusted adult who can help keep you safe?",
        "What you're sharing with me is so important and brave. When we have thoughts of hurting ourselves, it usually means we're in tremendous emotional pain and need immediate support. Crisis hotlines are available 24/7: 988 (Suicide & Crisis Lifeline). You deserve to be safe and supported."
      ],
      positive: [
        "It's wonderful to hear something positive from you! These moments of feeling better are important and valid too. What's been contributing to feeling good today?",
        "I'm so glad you're experiencing some lightness today. It's beautiful when we can appreciate the good moments, even small ones. What's bringing you joy or peace right now?",
        "Thank you for sharing something positive with me. These feelings matter just as much as the difficult ones. How can you nurture and protect this sense of well-being?",
        "Your positive energy is contagious! It's so important to celebrate and acknowledge when things feel good. What's been the highlight of your day or week?"
      ]
    };

    // Check for self-harm keywords first (priority)
    if (patterns.selfharm.test(lowercaseMessage)) {
      return responses.selfharm[Math.floor(Math.random() * responses.selfharm.length)];
    }

    // Check other patterns
    for (const [category, pattern] of Object.entries(patterns)) {
      if (category !== 'selfharm' && pattern.test(lowercaseMessage)) {
        const categoryResponses = responses[category as keyof typeof responses];
        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
      }
    }

    // More varied contextual default responses
    const contextualDefaults = [
      "Thank you for sharing that with me. I can sense there's something important behind what you're saying. Can you help me understand more about what you're experiencing?",
      "I'm listening carefully to what you're telling me. Your feelings and experiences are valid, no matter what they are. What feels most important for you to talk about right now?",
      "It sounds like you have a lot on your mind. Sometimes just having someone listen can be helpful. What would feel most supportive for you in this conversation?",
      "I appreciate you opening up to me. Everyone's experience is unique, and I want to understand yours better. What's been weighing on you lately?",
      "Thank you for trusting me with your thoughts. Sometimes it's hard to put feelings into words. Take your time - I'm here to listen to whatever you need to share.",
      "I hear you, and what you're going through sounds really challenging. You're not alone in this. What's been the hardest part about what you're experiencing?",
      "Your feelings are completely valid, and I'm honored that you're sharing them with me. What would it look like for you to feel just a little bit better right now?",
      "That sounds really tough to deal with. You're showing a lot of courage by reaching out and talking about it. What kind of support would feel most helpful?"
    ];

    return contextualDefaults[Math.floor(Math.random() * contextualDefaults.length)];
  }, []);

  const typeMessage = async (message: string): Promise<void> => {
    setStreamingText('');
    const words = message.split(' ');

    for (let i = 0; i < words.length; i++) {
      // Variable typing speed for more natural feel
      const baseDelay = 40;
      const randomDelay = Math.random() * 80;
      const punctuationDelay = /[.!?]$/.test(words[i]) ? 200 : 0;

      await new Promise(resolve => setTimeout(resolve, baseDelay + randomDelay + punctuationDelay));
      setStreamingText(prev => prev + (i === 0 ? '' : ' ') + words[i]);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText.trim(),
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      const messageToProcess = inputText.trim();
      setInputText('');
      setIsUserTyping(false);
      setIsTyping(true);

      // More realistic response timing
      const responseDelay = 600 + Math.random() * 800 + Math.min(messageToProcess.length * 10, 500);
      await new Promise(resolve => setTimeout(resolve, responseDelay));

      const responseText = getContextualResponse(messageToProcess);

      // Start streaming the response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
        isStreaming: true
      };

      setMessages(prev => [...prev, { ...botMessage, text: '' }]);
      setIsTyping(false);

      await typeMessage(responseText);

      // Update the final message
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessage.id
            ? { ...msg, text: responseText, isStreaming: false }
            : msg
        )
      );
      setStreamingText('');
    }
  };

  const quickReplies = [
    "I'm feeling anxious and overwhelmed",
    "I've been really sad lately",
    "I'm stressed about everything",
    "I can't sleep well",
    "I need someone to listen",
    "I'm having relationship problems",
    "I'm considering therapy",
    "How do I cope with this?"
  ];

  // Format last seen time
  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Active now';
    if (diffInMinutes < 5) return 'Active 2 minutes ago';
    if (diffInMinutes < 10) return 'Active 5 minutes ago';
    return `Active ${diffInMinutes} minutes ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Enhanced Header with Real-time Status */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-10 border-b border-emerald-100">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-arrow-left-line text-white text-lg"></i>
              </div>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AI Wellness Companion</h1>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <p className="text-sm text-emerald-600 font-medium">{formatLastSeen(lastSeen)}</p>
              </div>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
            <i className="ri-brain-line text-white text-lg animate-pulse"></i>
          </div>
        </div>

        {/* Real-time User Typing Indicator */}
        {isUserTyping && (
          <div className="px-6 pb-2">
            <div className="flex items-center text-xs text-emerald-600">
              <div className="flex space-x-1 mr-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              You're typing...
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className={`pt-24 pb-40 px-6 ${isUserTyping ? 'pt-32' : 'pt-24'}`}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex items-end space-x-3 max-w-[320px]">
                {message.sender === 'bot' && (
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="ri-robot-line text-white text-sm"></i>
                  </div>
                )}
                <div
                  className={`px-5 py-4 rounded-3xl shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-lg'
                      : 'bg-white text-gray-800 rounded-bl-lg border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {message.sender === 'bot' && message.isStreaming
                      ? streamingText
                      : message.text}
                    {message.sender === 'bot' && message.isStreaming && (
                      <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse"></span>
                    )}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p
                      className={`text-xs ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    {message.sender === 'user' && (
                      <div className="flex items-center space-x-1">
                        <i
                          className={`ri-check-double-line text-xs ${
                            message.id ? 'text-blue-200' : 'text-blue-300'
                          }`}
                        ></i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-end space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-md">
                  <i className="ri-robot-line text-white text-sm"></i>
                </div>
                <div className="bg-white px-5 py-4 rounded-3xl rounded-bl-lg shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Quick Replies */}
      {messages.length === 1 && (
        <div className="fixed bottom-44 left-0 right-0 px-6 z-10">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-5 shadow-xl border border-gray-100">
            <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
              <i className="ri-lightbulb-line text-emerald-500 mr-2"></i>
              Quick ways to start:
            </p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(reply)}
                  className="w-full text-left bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl text-sm hover:from-emerald-100 hover:to-teal-100 transition-all duration-200 !rounded-button"
                >
                  <i className="ri-chat-quote-line mr-2"></i>
                  {reply}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Input Area */}
      <div className="fixed bottom-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 p-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && !isTyping && handleSendMessage()}
              placeholder="Share your thoughts and feelings..."
              disabled={isTyping}
              className="w-full bg-gray-50 border border-gray-200 rounded-3xl px-5 py-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 disabled:opacity-50"
            />
            {inputText && (
              <button
                onClick={() => setInputText('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
              inputText.trim() && !isTyping
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-xl hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            } !rounded-button`}
          >
            {isTyping ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <i className="ri-send-plane-line text-lg"></i>
            )}
          </button>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
