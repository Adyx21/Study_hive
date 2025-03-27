import React, { useState, useEffect, useRef } from 'react';

// Custom SVG Icons
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Vertical Taskbar Component
const VerticalTaskbar = ({ onItemSelect }) => {
  const [activeItem, setActiveItem] = useState(null);

  const taskbarItems = [
    { 
      icon: HomeIcon, 
      text: 'Dashboard', 
      bgColor: 'bg-blue-50', 
      hoverBg: 'hover:bg-blue-100',
      sectionId: 'home'
    },
    { 
      icon: UserIcon, 
      text: 'Profile', 
      bgColor: 'bg-green-50', 
      hoverBg: 'hover:bg-green-100',
      sectionId: 'community'
    },
    { 
      icon: MailIcon, 
      text: 'Messages', 
      bgColor: 'bg-purple-50', 
      hoverBg: 'hover:bg-purple-100',
      sectionId: 'resources'
    },
    { 
      icon: ChartIcon, 
      text: 'Analytics', 
      bgColor: 'bg-orange-50', 
      hoverBg: 'hover:bg-orange-100',
      sectionId: 'features'
    },
    { 
      icon: SettingsIcon, 
      text: 'Settings', 
      bgColor: 'bg-gray-50', 
      hoverBg: 'hover:bg-gray-100',
      sectionId: 'settings'
    }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-16 hover:w-48 transition-all duration-300 ease-in-out bg-white shadow-md group z-50">
      <nav className="h-full flex flex-col py-4">
        {taskbarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className={`
                relative flex items-center p-3 cursor-pointer 
                ${item.bgColor} ${item.hoverBg}
                transition-all duration-300 ease-in-out
                group-hover:px-4
              `}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => onItemSelect(item.sectionId)}
            >
              <div className="flex items-center w-full">
                <Icon className="w-6 h-6 text-gray-600 shrink-0" />
                <span 
                  className={`
                    ml-3 whitespace-nowrap overflow-hidden 
                    ${activeItem === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'}
                    transition-all duration-300 ease-in-out
                    text-gray-800 font-medium
                  `}
                >
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

// StudyBuddy Chatbot Component
const StudyBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([{
      id: 0,
      text: "Hi there! I'm StudyBuddy, your AI academic assistant. How can I help you today?",
      sender: 'bot'
    }]);
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulated OpenAI API response
      const botMessage = {
        id: messages.length + 2,
        text: "I'm processing your request. In a real implementation, this would be an AI-generated response.",
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble processing your request right now. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-white shadow-xl rounded-xl border flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="text-lg font-bold">StudyBuddy AI</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`
                  max-w-[80%] p-3 rounded-lg 
                  ${msg.sender === 'user' 
                    ? 'bg-blue-100 self-end ml-auto' 
                    : 'bg-gray-100 self-start'}
                `}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-grow p-2 border rounded-l-lg"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Thinking...' : 'Send'}
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Launcher */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-4 right-4 bg-blue-600 text-white 
          w-16 h-16 rounded-full shadow-xl 
          flex items-center justify-center
          hover:bg-blue-700 transition
        "
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
};

// Main StudyHive Component
const StudyHive = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'community', label: 'Community' },
    { id: 'resources', label: 'Resources' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center p-8 bg-yellow-50 ml-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to StudyHive</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your collaborative learning ecosystem designed to transform the way students study, connect, and succeed.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        );
      case 'features':
        return (
          <div className="grid md:grid-cols-3 gap-6 p-8 bg-blue-50 ml-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Collaborative Study</h3>
              <p>Create and join study groups, share notes, and collaborate in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Smart Resources</h3>
              <p>Access curated learning materials, practice tests, and interactive tutorials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics and personalized insights.</p>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="p-8 bg-purple-50 ml-16">
            <h2 className="text-3xl font-bold text-center mb-6">Our Learning Community</h2>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-6 rounded-lg shadow-md w-64">
                <h4 className="text-xl font-semibold mb-2">Global Connections</h4>
                <p>Connect with learners worldwide, share experiences, and gain diverse perspectives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-64">
                <h4 className="text-xl font-semibold mb-2">Expert Mentorship</h4>
                <p>Learn from experienced educators and industry professionals.</p>
              </div>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="p-8 bg-green-50 ml-16">
            <h2 className="text-3xl font-bold text-center mb-6">Learning Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Video Tutorials', 'Practice Quizzes', 'E-books', 'Webinars'].map((resource, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="text-xl font-semibold mb-2">{resource}</h4>
                  <p className="text-sm text-gray-600">Comprehensive {resource.toLowerCase()} to enhance your learning.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8 bg-gray-50 ml-16">
            <h2 className="text-3xl font-bold text-center mb-6">User Settings</h2>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Account Preferences</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Notification Settings</label>
                  <select className="w-full p-2 border rounded">
                    <option>All Notifications</option>
                    <option>Important Only</option>
                    <option>None</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Theme</label>
                  <select className="w-full p-2 border rounded">
                    <option>Light Mode</option>
                    <option>Dark Mode</option>
                    <option>System Default</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Vertical Taskbar */}
      <VerticalTaskbar onItemSelect={setActiveSection} />
      
      {/* Add StudyBuddy Chatbot */}
      <StudyBuddy />

      {/* Navigation */}
      <nav className="bg-white shadow-md ml-16">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">StudyHive</div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  px-4 py-2 rounded-full transition 
                  ${activeSection === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-blue-100'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Dynamic Content Area */}
      <main className="container mx-auto">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8 ml-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 StudyHive. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyHive;
