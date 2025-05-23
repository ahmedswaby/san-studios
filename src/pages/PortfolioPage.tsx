import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Structural Design',
      description: 'A sustainable office building featuring innovative structural solutions and energy-efficient design.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      year: '2023'
    },
    {
      id: 2,
      title: 'Industrial Facility Optimization',
      category: 'Process Engineering',
      description: 'Complete redesign and optimization of manufacturing facility layout and processes.',
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      year: '2023'
    },
    {
      id: 3,
      title: 'Residential Tower',
      category: 'Architectural Engineering',
      description: 'High-rise residential complex with advanced structural systems and sustainable features.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      year: '2022'
    },
    {
      id: 4,
      title: 'Smart City Infrastructure',
      category: 'Urban Planning',
      description: 'Comprehensive infrastructure planning and design for a smart city development.',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
      year: '2022'
    },
    {
      id: 5,
      title: 'Healthcare Facility',
      category: 'Healthcare Engineering',
      description: 'State-of-the-art medical facility with specialized engineering solutions.',
      image: 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg',
      year: '2022'
    },
    {
      id: 6,
      title: 'Sustainable Bridge Design',
      category: 'Civil Engineering',
      description: 'Innovative bridge design incorporating sustainable materials and construction methods.',
      image: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg',
      year: '2021'
    }
  ];

  const categories = ['All', 'Structural Design', 'Process Engineering', 'Architectural Engineering', 'Urban Planning', 'Healthcare Engineering', 'Civil Engineering'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Explore our diverse range of engineering projects and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-900 font-medium group-hover:underline">
                    View Project Details
                    <ArrowUpRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our engineering expertise can help bring your vision to life.
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

export default PortfolioPage;