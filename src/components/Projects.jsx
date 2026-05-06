import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary-500 mb-12"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold mb-2 text-dark-100">
                  {project.title}
                </h3>
                <p className="text-dark-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-dark-700 text-primary-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={"https://github.com/rewati1616/Task-Manager"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-dark-300 hover:text-primary-500 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={"https://github.com/rewati1616/8-PuzzleGame"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-dark-300 hover:text-primary-500 transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-dark-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-display font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-dark-300 mb-6">{selectedProject.description}</p>

              <h4 className="text-xl font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-dark-300">
                    <span className="text-primary-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-dark-700 text-primary-400 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2"
                >
                  <FaGithub /> View Code
                </a>
                {selectedProject.demo !== '#' && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg hover:bg-primary-500 hover:text-white transition-all flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;