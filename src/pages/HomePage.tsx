import React , {useEffect} from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useLocation } from "react-router-dom";

const HomePage: React.FC = () => {

  const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const services = [
    {
      title: 'Architectural Design',
      description: 'Innovative architectural concepts that blend functionality, aesthetics, and environmental sensitivity from idea to execution.',
    },
    {
      title: 'Urban Design',
      description: 'Creative urban design solutions that enhance connectivity, functionality,and the quality of public spaces.',
    },
    {
      title: '3D Visualization & Animation',
      description: 'High-quality 3D visualizations and animations that effectively present architectural ideas and design intent.',
    },
    {
      title: 'Interior Design',
      description: 'Interior environments designed with precision and purpose, aligning spatial flow, materials, and user needs.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '7+', label: 'Cities' },
    { number: '2024', label: 'Established' },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver a wide spectrum of architectural and engineering solutions,
              thoughtfully crafted to address complex challenges with clarity, precision,
              and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-gray-900 font-medium hover:underline">
                  Learn more
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest engineering design projects and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '/public/projects/qatar/1.jpg',
              '/public/projects/medina/1.jpg',
              '/public/projects/residential/1.jpg'
            ].map((image, index) => (
              <Link key={index} to="/portfolio" className="group relative block aspect-square overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              View All Projects
              <ArrowUpRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Engineering Vision?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's collaborate to bring your ideas to life with innovative engineering solutions.
            </p>
            <a
              href="https://calendly.com/sanstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Schedule a Free Consultation
              <ArrowUpRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;