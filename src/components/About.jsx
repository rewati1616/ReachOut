import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/data';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-display font-bold mb-4"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-primary-500 mb-12"
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-semibold mb-4 text-dark-200">
              Who I Am
            </h3>
            <p className="text-dark-300 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-dark-300 leading-relaxed">
              I specialize in building modern, responsive web applications using the MERN stack. 
              With a strong foundation in data structures and algorithms from my C++ background, 
              I bring both creative problem-solving and technical rigor to every project.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-semibold mb-4 text-dark-200">
              What I Do
            </h3>
            <ul className="space-y-3 text-dark-300">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">▹</span>
                <span>Design and develop full-stack web applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">▹</span>
                <span>Build RESTful APIs and manage databases</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">▹</span>
                <span>Create responsive and intuitive user interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">▹</span>
                <span>Implement secure authentication and data protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">▹</span>
                <span>Collaborate in agile development environments</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;