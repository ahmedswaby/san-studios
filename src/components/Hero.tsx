import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg"
          alt="Engineering background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering Excellence Through Innovative Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
           “AT SAN STUDIO We transform complex challenges into elegant solutions, bringing your engineering visions to life with precision and creativity.”.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              View Our Work
              <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Book a Consultation
              <ArrowUpRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;