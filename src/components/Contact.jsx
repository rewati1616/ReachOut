import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/data';
import axios from 'axios';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-primary-500 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-dark-100">
              Let's Connect
            </h3>
            <p className="text-dark-300 mb-8">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-dark-300">
                <FaEnvelope className="text-2xl text-primary-500" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4 text-dark-300">
                <FaMapMarkerAlt className="text-2xl text-primary-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-800 border border-dark-700 p-4 rounded-lg hover:border-primary-500 transition-colors"
              >
                <FaGithub className="text-2xl text-dark-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={'https://www.linkedin.com/in/rewati-warhade-32521a23a/'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-800 border border-dark-700 p-4 rounded-lg hover:border-primary-500 transition-colors"
              >
                <FaLinkedin className="text-2xl text-dark-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-dark-100 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-dark-100 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-dark-100 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-dark-100 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;