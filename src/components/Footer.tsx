import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Dhilleswara-Au',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/dhilleswara-rao-009335257/',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:dhilleswararao19@email.com',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/pic.png" alt="GD" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">G Dhilleswara Rao</h3>
                <p className="text-gray-400">AI/ML Engineer | Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Passionate BTech Computer Science student specializing in full-stack development, 
              AI/ML, and creating innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors transform hover:scale-110"
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>dhilleswararao19@gmail.com</p>
              <p>+91 63048 51323</p>
              <p>Visakhapatnam, Andhra Pradesh, India</p>
              <p className="text-green-400 text-sm">Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>&copy; {currentYear} Dhilleswara Rao. Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and lots of ☕</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;