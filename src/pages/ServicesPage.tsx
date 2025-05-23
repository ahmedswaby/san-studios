import React from 'react';
import { ArrowUpRight, Building2, Ruler, Cuboid as Cube, FileText, Users, Workflow } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Innovative architectural concepts that blend functionality, aesthetics, and environmental sensitivity from idea to execution.',
      features: [
        "Conceptual Design",
         "Site Planning & Integration",
         'Sustainable Design Strategies',
         'Design Development & Coordination',
         'Feasibility Studies',
      ]
    },
    {
      icon: Ruler,
      title: 'Urban Design',
      description: 'Creative urban design solutions that enhance connectivity, functionality, and the quality of public spaces.',
      features: [
        'Master Planning',
        'Streetscape & Public Realm Design',
        'Mobility & Connectivity Solutions',
        'Environmental & Social Integration'
      ]
    },
    {
      icon: Cube,
      title: '3D Visualization & Animation',
      description: 'High-quality 3D visualizations and animations that effectively present architectural ideas and design intent.',
      features: [
        'Architectural Visualization',
        '3D Animation',
        'Rendering & Post-production'
      ]
    },
    {
      icon: FileText,
      title: 'Interior Design',
      description: 'Interior environments designed with precision and purpose, aligning spatial flow, materials, and user needs.',
      features: [
        'Interior Space Planning',
        'Material Selection',
        'Lighting & Mood Conceptualization',
        'Furniture Layout & Styling'
      ]
    },
    // {
    //   icon: Users,
    //   title: 'Project Management',
    //   description: 'End-to-end project management services ensuring smooth execution and successful delivery of engineering projects.',
    //   features: [
    //     'Timeline Planning',
    //     'Resource Allocation',
    //     'Quality Control',
    //     'Progress Monitoring'
    //   ]
    // },
    // {
    //   icon: Workflow,
    //   title: 'Process Engineering',
    //   description: 'Optimization of industrial processes and systems to enhance efficiency and reduce operational costs.',
    //   features: [
    //     'Process Analysis',
    //     'System Integration',
    //     'Automation Solutions',
    //     'Performance Metrics'
    //   ]
    // }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Expertise
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We deliver a wide spectrum of architectural and engineering solutions,
thoughtfully crafted to address complex challenges with clarity, precision,
and innovation.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
              <ArrowUpRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 text-gray-900 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Engineering Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our expertise can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Book a Free Consultation
                <ArrowUpRight size={20} className="ml-2" />
              </a>
              <a
                href="mailto:info@san-studios.com"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
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

export default ServicesPage;