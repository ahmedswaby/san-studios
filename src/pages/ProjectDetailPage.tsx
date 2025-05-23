import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Building2, Users2, Calendar, CheckCircle2 } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const project = {
    id: parseInt(id || '1'),
    title: 'Modern Office Complex',
    category: 'Structural Design',
    client: 'Tech Innovation Corp',
    location: 'Cairo, Egypt',
    year: '2023',
    duration: '18 months',
    description: "A state-of-the-art office complex featuring innovative structural solutions and sustainable design principles. The project showcases our expertise in creating modern workspaces that prioritize both functionality and environmental responsibility.",
    challenge: "The main challenge was to design a structure that maximized space efficiency while maintaining optimal natural lighting and reducing energy consumption. The site's location in a seismically active zone added complexity to the structural requirements.",
    solution: "We implemented an innovative steel-concrete composite structure with advanced seismic isolation systems. The design incorporates large spans and column-free spaces, enabling flexible office layouts. Smart building systems and green technologies were integrated to achieve LEED Gold certification.",
    results: [
      'Achieved 40% reduction in energy consumption',
      'Created 50,000 sq ft of flexible office space',
      'Obtained LEED Gold certification',
      'Implemented state-of-the-art seismic protection',
      'Reduced construction time by 20%',
      'Maximized natural lighting coverage'
    ],
    images: [
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg'
    ],
    services: [
      'Structural Engineering',
      'Sustainability Consulting',
      'Project Management',
      'Technical Documentation'
    ]
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-white mb-8 hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full">
                {project.category}
              </span>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full">
                {project.location}
              </span>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="w-full rounded-xl"
                  />
                ))}
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Client</p>
                      <p className="font-medium text-gray-900">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users2 className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Services</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Interested in similar projects?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help bring your engineering vision to life.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule a Consultation
                  <ArrowUpRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1" />
                      <span className="ml-3 text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore More Projects
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our other engineering projects and innovative solutions.
            </p>
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
    </div>
  );
};

export default ProjectDetailPage;