import React from 'react';
import { Code, Database, Globe, Brain, Server, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'C Language', level: 60, icon: Code },
    { name: 'Java Language', level: 75, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'ReactJS', level: 75, icon: Globe },
    { name: 'Node.js/Express.js', level: 75, icon: Globe },
    { name: 'MongoDB', level: 80, icon: Database },
    { name: 'AI/ML', level: 90, icon: Brain },
    { name: 'GitHub', level: 88, icon: Server },
  ];

  const interests = [
    'Python',
    'Java',
    'MERN Stack',
    'Full-Stack Web Development',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Deep Learning',
    'Computer Vision',
    'Generative AI',
    'Open Source',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                I'm a passionate B.Tech Computer Science Engineering student with a deep love for technology 
                and innovation. Currently in my final year, I've spent the last four years immersing myself 
                in the world of software development, algorithms, and emerging technologies.
              </p>
              <p className="mb-4">
                My journey began with curiosity about how websites work, which led me to explore web development, 
                artificial intelligence, and eventually machine learning. I believe in the power of technology to 
                solve real-world problems and create meaningful impact.
              </p>
              <p className="mb-6">
                When I'm not coding, you'll find me contributing to open-source projects, participating in 
                hackathons, or exploring the latest tech trends. I'm always eager to collaborate with 
                like-minded individuals and take on challenging projects that push my boundaries.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Interests</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Career Objective</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seeking opportunities to leverage my technical skills and passion for innovation in a 
                dynamic software development role. Eager to contribute to cutting-edge projects while 
                continuing to grow as a full-stack developer, AI/ML enthusiast, and problem solver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;