import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-dark-400 flex items-center justify-center gap-2">
          Designed & Built by {personalInfo.name} with{' '}
          <FaHeart className="text-primary-500" />
        </p>
        <p className="text-dark-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;