import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/data';
import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiGit, SiCplusplus, SiPython, SiHtml5, SiCss3,
  SiMysql, SiRedux, SiPostman, SiBootstrap
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillIcons = {
    'JavaScript': SiJavascript,
    'React.js': SiReact,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Express.js': SiExpress,
    'Tailwind CSS': SiTailwindcss,
    'Git': SiGit,
    'C++': SiCplusplus,
    'Python': SiPython,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'MySQL': SiMysql,
    'Redux': SiRedux,
    'Postman': SiPostman,
    'Bootstrap': SiBootstrap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const SkillCard = ({ skill }) => {
    const Icon = skillIcons[skill];
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-dark-800 border border-dark-700 rounded-lg p-4 flex flex-col items-center justify-center gap-3 card-hover"
      >
        {Icon && <Icon className="text-4xl text-primary-500" />}
        <span className="text-dark-200 text-sm font-medium text-center">{skill}</span>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-container bg-dark-800/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-primary-500 mb-12"></div>

        <div className="space-y-12">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-dark-200">
              Languages
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.languages.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-dark-200">
              Frontend
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.frontend.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-dark-200">
              Backend
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.backend.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-dark-200">
              Databases
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.databases.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-dark-200">
              Tools & Others
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.tools.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;