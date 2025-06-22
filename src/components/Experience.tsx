import React from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI Fundamentals & AI Ready Intern',
      company: 'APSCHE | APSSDC | Andhra University | NASSCOM',
      location: 'Andhra Pradesh, India',
      duration: 'June 2025 - July 2025',
      type: 'Short-Term Internship',
      description: 'Completed a specialized internship program focusing on the fundamentals of Artificial Intelligence and industry readiness, organized jointly by APSCHE, APSSDC, Andhra University, and NASSCOM.',
      achievements: [
        'Gained practical exposure to core AI concepts and applications',
        'Worked on mini-projects simulating real-world AI scenarios',
        'Participated in interactive workshops led by industry experts',
        'Completed certification modules aligned with NASSCOM standards'
      ],
      technologies: ['Python', 'Machine Learning', 'AI Concepts', 'Data Analysis', 'Google Collab', 'Data Visualization']
    },    
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Jan 2023 - Present',
      type: 'Freelance',
      description: 'Providing web development services to small businesses and startups. Created custom websites and web applications tailored to client requirements.',
      achievements: [
        'Delivered 3 projects',
        'Built e-commerce solutions',
        'Maintained ongoing client relationships and support',
      ],
      technologies: ['React', 'Next.js', 'Express.js', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-700 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>
                
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-3">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Internship' 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Looking for New Opportunities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking full-time positions where I can contribute my skills and continue growing 
              as a software developer. Let's connect and discuss how I can add value to your team!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;