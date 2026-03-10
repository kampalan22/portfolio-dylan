import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Anthony Ssengendo.";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <div className={`transition-opacity duration-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Computer Science Student
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold mt-3">
              Full-Stack & AI Engineer
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-opacity duration-500 delay-300 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={handleViewResume}
              disabled
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              View Resume
            </button>
          </div>

          <div className={`mt-16 animate-bounce transition-opacity duration-500 delay-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
