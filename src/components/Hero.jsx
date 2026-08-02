import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/data';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 font-medium mb-2">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-dark-400 mb-6">
                {personalInfo.role}
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  View My Work 
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={'https://drive.google.com/file/d/1Vzo9mRfQ87i-0GLcCWsWGzhf2-LcWj1P/view?usp=sharing'}
                  target="_blank"
                  download
                  className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-all"
                >
                  Download CV
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.2, color: '#ff6b6b' }}
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 text-2xl hover:text-primary-500 transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#ff6b6b' }}
                  href={'https://www.linkedin.com/in/rewati-warhade-32521a23a/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 text-2xl hover:text-primary-500 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#ff6b6b' }}
                  href={socialLinks.email}
                  target="_blank"
                  className="text-dark-400 text-2xl hover:text-primary-500 transition-colors"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-dark-800 rounded-lg p-6 shadow-2xl border border-dark-700">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm text-dark-300 font-mono">
                <code>{`const developer = {
  name: "${personalInfo.name}",
  location: "${personalInfo.location}",
  role: "${personalInfo.role}",
  
  skills: [
    "React", "Node.js",
    "MongoDB", "Express"
  ],
  
  status: "Ready to work",
  
  contact: () => {
    return "${personalInfo.email}";
  }
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <HiArrowDown className="text-3xl text-dark-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
