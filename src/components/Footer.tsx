import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import Behance from '../components/icons/behance.svg'; 
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">SAN STUDIO</h3>
            <p className="text-gray-400 text-sm">
              Engineering design consultation specializing in innovative solutions for complex technical challenges.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a> */}
              <a href="https://www.behance.net/sanstudioeg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <img src={Behance} width={23} />
              </a>
              <a href="https://www.linkedin.com/company/san-studios-eg/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@san-studios.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a> */}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigate</h3>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {[
                'Engineering Consulting', 
                'Structural Design', 
                '3D Modeling', 
                'Technical Documentation', 
                'Project Management'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/expertise" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>123 Engineering Boulevard</p>
              <p>Cairo, Egypt</p>
              <p className="pt-2">
                <a href="tel:+2011234567890" className="hover:text-white transition-colors duration-300">+20 11234 567890</a>
              </p>
              <p>
                <a href="mailto:info@san-studios.com" className="hover:text-white transition-colors duration-300">info@san-studios.com</a>
              </p>
            </address>
            <div className="mt-4">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-white hover:underline transition-colors duration-300"
              >
                Schedule a consultation
                <ArrowUpRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} SAN Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;