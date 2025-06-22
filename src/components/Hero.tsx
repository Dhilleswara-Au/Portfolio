import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'files/resume.pdf';
    link.download = 'Dhilleswara_resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Section - Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/pic.png"
              alt="GD"
              className="w-auto h-auto object-cover rounded-2xl shadow-lg mx-auto md:mx-0"
            />
          </div>

          {/* Right Section - Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                G Dhilleswara Rao
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              B.Tech Computer Science Engineering Student
              <br />
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Full-Stack Developer & AI/ML Enthusiast
              </span>
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Driven to create innovative tech solutions through code. Skilled in modern web technologies, artificial intelligence and machine learning. Always learning, always building, always aiming to make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mb-8">
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
              >
                Learn More About Me
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <button
                onClick={scrollToAbout}
                className="animate-bounce p-3 rounded-full bg-white/30 dark:bg-gray-700/30 border border-gray-300 dark:border-gray-600 backdrop-blur-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors shadow-md"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
