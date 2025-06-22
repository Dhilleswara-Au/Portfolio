import React from 'react';
import { Github, ExternalLink, Play, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Keeper - Notes Management App',
      description: 'A responsive notes management app inspired by Google Keep, allowing users to create, save, and manage notes seamlessly.',
      image: 'images/keeper_app.png',
      technologies: ['React.js', 'CSS'],
      features: [
        'Note creation and deletion',
        'Real-time UI updates',
        'Clean and responsive layout',
        'Deployed on CodeSandbox for accessibility and collaboration'
      ],
      githubUrl: 'https://github.com/Dhilleswara-Au/keeper-app',
      liveUrl: 'https://44vy43.csb.app/',
      category: 'Frontend'
    },   
    {
      title: 'Simple Calculator',
      description: 'A basic calculator web app capable of performing addition, subtraction, multiplication, and division. Built with fundamental web technologies for fast and lightweight performance.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Addition, subtraction, multiplication, and division operations',
        'Responsive design for mobile and desktop',
        'Clear UI with intuitive button layout',
        'Deployed using Netlify'
      ],
      githubUrl: 'https://github.com/Dhilleswara-Au/oibsip_2',
      liveUrl: 'https://dhilleswara-calculator.netlify.app/',
      category: 'Frontend'
    },
    {
      title: 'ToDo - To-Do List App',
      description: 'A clean and efficient to-do list app built with React.js, allowing users to manage daily tasks with ease. Add, check off, and remove tasks in a simple, responsive interface.',
      image: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'CSS'],
      features: [
        'Add and remove to-do items',
        'Mark tasks as completed',
        'Real-time UI updates with React Hooks',
        'Fully responsive design',
        'Deployed on CodeSandbox for easy access'
      ],
      githubUrl: 'https://github.com/Dhilleswara-Au/React-To-Do',
      liveUrl: 'https://7r2p45.csb.app/',
      category: 'Frontend'
    },    
    {
      title: 'VanaEkam - Tribal Empowerment Platform',
      description: 'Developed VanaEkam, a full-stack web application aimed at improving the living standards of tribal communities by enabling donations and promoting local artisans through e-commerce.',
      image: 'https://images.pexels.com/photos/167706/pexels-photo-167706.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      features: [
        'Donation page for supporting tribal development initiatives',
        'E-commerce page for tribal artisans to sell handmade products',
        'Responsive and accessible front-end interface',
        'Backend integration with REST APIs using Express.js and MongoDB',
        'Team collaboration for scalable architecture'
      ],
      githubUrl: 'https://github.com/Dhilleswara-Au/tribal-welfare-dev',
      liveUrl: '#',
      category: 'Full-Stack'
    },
    {
      title: 'TeachV - Online Learning Platform',
      description: 'TeachV is a user-friendly online learning platform designed to provide accessible and structured educational content. It supports course browsing, enrollment, and video-based learning for students.',
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      features: [
        'Course catalog with category filtering and search',
        'Video-based lessons with progress tracking',
        'User registration and login system',
        'Secure backend APIs for course and user management',
        'Fully responsive design for desktop and mobile users'
      ],
      githubUrl: 'https://github.com/Dhilleswara-Au/TeachV',
      liveUrl: '#',
      category: 'Full-Stack'
    },
    {
      title: 'ADfilms',
      description: 'A modern, responsive website for ADfilms — a creative ad-making agency showcasing branding, marketing, and video production services. Designed to attract clients, display work portfolio, and capture inquiries.',
      image: 'https://imgs.search.brave.com/4XZZB1DQR05jOJwGL8zEbmqn7qLFfenyBwtSM3jW-90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvWWFvUFJIMGY0/V2svaHFkZWZhdWx0/LmpwZw',
      technologies: ['React.js', 'TailwindCSS', 'MongoDB'],
      features: [
        'Landing page with hero video and service highlights',
        'Portfolio section with categorized ad campaigns',
        'Client testimonials and case studies',
        'Contact form with email integration',
        'Responsive design optimized for all screen sizes'
      ],
      githubUrl: 'https://github.com/Gautam-Yedla/ADFilms',
      liveUrl: '#',
      category: 'Full-Stack'
    }
    
    
    
  ];

  const categories = ['All', 'Frontend', 'Full-Stack', 'AI/ML', 'Data Science'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack': return <Code className="w-4 h-4" />;
      case 'Frontend': return <Globe className="w-4 h-4" />;
      case 'AI/ML': return <Database className="w-4 h-4" />;
      case 'IoT/Mobile': return <Play className="w-4 h-4" />;
      case 'Data Science': return <Database className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 border dark:border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200`}>
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Dhilleswara-AU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;