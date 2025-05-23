import React from 'react';
import { ArrowUpRight, Award, Users, Clock, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {

  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Project Completes',
    },
    {
      icon: Users,
      number: '5+',
      label: 'Years Experience',
    },
    {
      icon: Globe,
      number: '7+',
      label: 'Cities',
    },
    {
      icon: Clock,
      number: '2024',
      label: 'Established',
    }
  ];

  const team = [
    {
      name: 'Sarah Anderson',
      role: 'Principal Engineer',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Structural Engineer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      name: 'David Kim',
      role: '3D Modeling Specialist',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About SAN Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              SAN Studio is a multidisciplinary architecture and engineering office committed to
              delivering innovative, integrated, and forward-thinking design solutions. Our team of
              architects, engineers, and creatives collaborates across disciplines to transform
              complex challenges into purposeful, sustainable outcomes. With a passion for design
              excellence and a systems-driven approach, we shape environments that are
              functional, resilient, and deeply connected to their context.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Icon className="w-12 h-12 mx-auto text-gray-900 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To deliver exceptional design solutions that integrate architecture,
              engineering, and innovation shaping environments that are efficient,
              sustainable, and impactful.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To redefine the standards of built environments through systemic, creative,
                  and responsible design becoming a leading force in architectural and
                  engineering excellence across cities and contexts.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, excellence, and sustainability guide every project we
                  undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Meet our team of experienced professionals dedicated to delivering exceptional engineering solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help bring your engineering vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule a Meeting
                <ArrowUpRight size={20} className="ml-2" />
              </a>
              <a
                href="mailto:info@san-studios.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Us
                <ArrowUpRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;