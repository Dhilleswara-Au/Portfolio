import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Andhra University College of Engineering, Andhra Pradesh',
      duration: '2022 - 2026',
      gpa: '8.01/10',
      description: 'Specialization in Software Engineering and Artificial Intelligence',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Kendriya Vidyalaya,',
      duration: '2020 - 2022',
      gpa: '85%',
      description: 'PCM with Computer Science',
    },
    {
      degree: 'Secondary School Certificate (10th)',
      institution: 'BSF Senior Secondary School, Shillong, Meghalaya',
      duration: '2018 - 2020',
      gpa: '83%',
      description: 'Emphasized foundational learning in Mathematics, Science, and English.',
    },
  ];

  const coursework = [
    'C Language',
    'Java',
    'Python',
    'Data Stuctures and Algorithms',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems',
    'Web Technologies',
    'Big Data Analytics',
    'Data Warehousing and Data Mining',
    'Object Oriented Software Engineering',
    'Cryptography & Network Security',
    'Artificial Intelligence',
    'Machine Learning'
  ];

  const achievements = [
    {
      title: 'Participant – HackAP Hackathon 2023',
      description: 'Developed and presented a project at HackAP 2023, showcasing teamwork and innovation.',
      icon: Trophy,
    },
    {
      title: 'Co-Lead – Web Development Chapter, Codiam',
      description: 'Co-led Codiams\' Web Dev Chapter, conducted tech sessions, mentored peers, and led full-stack projects.',
      icon: BookOpen,
    },
    {
      title: 'Participant – Smart India Hackathon 2024',
      description: 'Built a solution for an industry-level challenge.',
      icon: Trophy,
    },
  ];

  // const certifications = [
  //   'Google Cloud Professional Cloud Architect',
  //   'AWS Solutions Architect Associate',
  //   'MongoDB Certified Developer',
  //   'Meta Frontend Developer Certificate',
  // ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Academic Journey</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-4 border-blue-200 dark:border-blue-700 last:pb-0">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600 dark:text-gray-300">{edu.duration}</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Additional Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Academic Achievements</h3>
            <div className="space-y-6 mb-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border dark:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Relevant Coursework</h4>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border dark:border-gray-600">
                <div className="grid grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;