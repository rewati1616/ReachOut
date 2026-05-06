import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="section-container bg-dark-800/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary-500 mb-12"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary-500"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>

              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-dark-100 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-dark-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-dark-300 mb-4">{exp.description}</p>

                <h4 className="text-lg font-semibold mb-2 text-dark-200">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-dark-300">
                      <span className="text-primary-500 mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;