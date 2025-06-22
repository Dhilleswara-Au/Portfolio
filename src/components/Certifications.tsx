import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'Machine Learning A-Z: AI, Python & R',
      issuer: 'Udemy',
      date: 'June 2025',
      credentialId: 'UC-fd5aaeb0-16f8-43eb-99a5-1f9c0a51f8bb',
      verificationUrl: 'https://www.udemy.com/certificate/UC-fd5aaeb0-16f8-43eb-99a5-1f9c0a51f8bb/',
      logo: 'https://imgs.search.brave.com/CJaOgG51oIihdxfarqJ0TzyNYkbKewpSNwilszxs_go/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYWNo/aW5lLWxlYXJuaW5n/LXRlY2hub2xvZ3kt/ZGlhZ3JhbS1hcnRp/ZmljaWFsLWludGVs/bGlnZW5jZS1haS1u/ZXVyYWwtbmV0d29y/ay1hdXRvbWF0aW9u/LWRhdGEtbWluaW5n/LXZyLXNjcmVlbi1i/dXNpbmVzc21hbi0x/NTk1MTU3NTIuanBn',
      description: 'Completed a comprehensive course covering Machine Learning algorithms using Python and R, with hands-on projects and code templates guided by data science experts.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'R', 'Deep Learning'],
    },
    {
      name: 'CS50x: Introduction to Computer Science',
      issuer: 'Harvard University',
      date: 'Jun 2025',
      credentialId: '369646ba-573b-41bc-808d-a9dfce69b761',
      verificationUrl: 'https://cs50.harvard.edu/certificates/369646ba-573b-41bc-808d-a9dfce69b761',
      logo: 'https://imgs.search.brave.com/SCX4yE2Ul-wWS4AuTiUG3eqH8CLETp1RNvnGcIfi6o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGwu/aGFydmFyZC5lZHUv/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvMTZfOV9tZWRp/dW0vcHVibGljL2Nv/dXJzZS9DUzUweF9w/bGwucG5nP2l0b2s9/UEpoVVRlNGc',
      description: 'Completed Harvard’s CS50x course covering core computer science concepts, including algorithms, data structures, web development, and final project implementation.',
      skills: ['C', 'Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Algorithms', 'Data Structures', 'Web Development']
    },
    {
      name: 'Introduction to Data Science',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: '', // Not applicable
      verificationUrl: 'https://drive.google.com/file/d/1St2svU8Hj5IOjmVJrznm-20TTr6RSLr4/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Completed a foundational course in Data Science, covering key concepts such as data wrangling, basic statistics, data visualization, and an introduction to machine learning techniques.',
      skills: ['Data Analysis', 'Python Basics', 'Statistics', 'Data Visualization', 'Machine Learning Fundamentals']
    },
    {
      name: 'Introduction to Artificial Intelligence',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1J6vCTUvetTKlvo4PyXKmbzc8jtzx6BR5/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Successfully completed the course "Introduction to Artificial Intelligence" offered by Infosys Springboard, gaining foundational knowledge in AI concepts and applications.',
      skills: ['Artificial Intelligence', 'Machine Learning Basics', 'AI Concepts', 'Digital Skills']
    },
    {
      name: 'Introduction to Natural Language Processing',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1Oveh_w3RVlY3bDmcvze4TfjFTU8A_0r0/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Completed a foundational course on Natural Language Processing (NLP), covering core concepts like text preprocessing, tokenization, sentiment analysis, and applications of NLP in real-world tasks.',
      skills: ['NLP', 'Text Preprocessing', 'Sentiment Analysis', 'Tokenization', 'Python for NLP']
    },
    {
      name: 'Introduction to Deep Learning',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1lzomtdMMhycijJ24brxJfYH12XAR17a4/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Completed a beginner-level course on Deep Learning, covering the basics of neural networks, activation functions, forward and backward propagation, and applications in AI.',
      skills: ['Neural Networks', 'Deep Learning Fundamentals', 'Activation Functions', 'Backpropagation', 'AI Concepts']
    },  
    {
      name: 'Computer Vision 101',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1cGRT7eizRmbimfgux4ZKV3m5_yRe3Gic/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Completed an introductory course on Computer Vision, exploring key concepts such as image processing, feature detection, object recognition, and real-world applications in AI.',
      skills: ['Computer Vision', 'Image Processing', 'Feature Detection', 'Object Recognition', 'AI Applications']
    },
    {
      name: 'Introduction to Robotic Process Automation',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1ne8czCUsCXFJanMaYWQ5fodmInWkRpHA/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/S4Bl4fr7jKjq5TaWhO3Cc5GMVR1Xp2mfDWPSNQra7Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb3N5cy5jb20v/Y29udGVudC9kYW0v/aW5mb3N5cy13ZWIv/ZW4vYWJvdXQvc3By/aW5nYm9hcmQvaW1h/Z2VzL2luZm9zeXMt/c3ByaW5nYm9hcmQu/cG5n',
      description: 'Successfully completed the course "Introduction to Robotic Process Automation" offered by Infosys Springboard, covering the basics of RPA tools, workflows, and automation use cases.',
      skills: ['Robotic Process Automation', 'Workflow Automation', 'Digital Transformation', 'RPA Tools']
    },    
    {
      name: 'HackAP Hackathon 2023 – Tribal Welfare Theme',
      issuer: 'AHub, AU Incubation Council',
      date: 'Nov 2023',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1wWj_QT5gmSTmm2icBgiDU1A2HqOXKWvn/view?usp=sharing', 
      logo: 'https://static.wixstatic.com/media/32147b_f598c6a1284a49d78c6a739e5c4c2e20~mv2.png/v1/fill/w_57,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/32147b_f598c6a1284a49d78c6a739e5c4c2e20~mv2.png',
      description: 'Participated in the HackAP Hackathon themed on Tribal Welfare, held on 25–26 November 2023, collaboratively ideating solutions for social impact.',
      skills: ['Hackathons', 'Team Collaboration', 'Problem Solving', 'Pitching Ideas', 'Social Impact Projects']
    },
    {
      name: 'Smart India Internal Hackathon 2024',
      issuer: 'Ministry of Education, AICTE, and Andhra University',
      date: 'Sep 2024',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1aTz1yst52nWfz-MPLPkjAg72gJNcTsbk/view?usp=sharing',
      logo: 'https://imgs.search.brave.com/ZSMDSYq8KXx2EJNLi-Yn1lHIyVcaFz4YLcpNi0lCvHA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vb3Bwb3J0/dW5pdHljZWxsLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9TSUgyLnBu/Zw',
      description: 'Participated in the Smart India Internal Hackathon 2024 at Andhra University, contributing to innovative problem-solving aligned with national development challenges.',
      skills: ['Hackathon Participation', 'Innovation', 'Teamwork', 'Problem Solving', 'Product Ideation']
    },
    {
      name: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Forage | Tata Consultancy Services (TCS)',
      date: 'Feb 2024',
      credentialId: '8wvh3C6FAYvtvwmDk',
      verificationUrl: 'https://drive.google.com/file/d/1wUmBGy8wbpeYOPD2xd1uXaSeExFwOU9C/view?usp=sharing',
      logo: 'https://www.theforage.com/_next/image?url=https%3A%2F%2Fcdn.theforage.com%2Fvinternships%2Fcompanyassets%2FifobHAoMjQs9s6bKS%2F5XsFFJu2oCLdmYJW2%2F1707299754989%2F451px-Tata_logo.svg%20(1).png&w=1920&q=75',
      description: 'Completed a practical job simulation covering IAM fundamentals, strategy assessment, custom IAM solutions, and platform integration as part of the TCS Cybersecurity Analyst Program.',
      skills: ['IAM', 'Access Control', 'Security Strategy', 'Platform Integration', 'Cybersecurity Concepts']
    },
    {
      name: 'Expert Talk: Cloud Security Essentials',
      issuer: 'Ministry of Electronics and Information Technology (MeitY), ISEA, CDAC',
      date: 'Feb 2025',
      credentialId: 'ISEA/CITR/AU/ET/2025/3/807245',
      verificationUrl: 'https://assessment.isea.app/validate-certificate/ISEA/CITR/AU/ET/2025/3/807245',
      logo: 'https://www.infosecawareness.in/img/Logo/isea.png',
      description: 'Attended an expert session on Cloud Security Essentials as part of the “Securing the Future” series at Andhra University. Organized under ISEA Phase III, sponsored by MeitY, Government of India.',
      skills: ['Cloud Security', 'Cybersecurity Awareness', 'Information Security', 'ISEA Phase III', 'Government Tech Initiatives']
    },
    {
      name: 'AI Bootcamp: Web-Based Face Tracking using Cursor.AI',
      issuer: 'Smarted Innovations | NSDC & Skill India',
      date: 'Jun 2025',
      credentialId: 'N/A', 
      verificationUrl: 'https://drive.google.com/file/d/1z6HcfDaku6f1wgb9c-_uCNe1FzYN4zI0/view?usp=sharing',
      logo: 'https://smarted.pro/svg/SMARTED%20LOGO.svg',
      description: 'Completed a 5-day hands-on bootcamp focused on Artificial Intelligence by developing a web-based face tracking system using Cursor.AI. Gained exposure to real-time AI applications and front-end integration.',
      skills: ['Face Tracking', 'Cursor.AI', 'Computer Vision', 'AI Integration', 'Web Development']
    },
    
  ];

  const stats = [
    { label: 'Total Certifications', value: '25+', icon: Award },
    { label: 'Courses', value: '20+', icon: CheckCircle },
    { label: 'Hackathons', value: '2', icon: CheckCircle },
    { label: 'Others', value: '3', icon: CheckCircle },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuously expanding my knowledge through industry-recognized certifications and professional development programs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg text-center border dark:border-gray-700">
                <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">{cert.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                  <div>
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Commitment to Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in staying current with industry trends and technologies. I'm always working towards new 
              certifications and expanding my skill set to provide the best solutions for complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hours of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Courses Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;