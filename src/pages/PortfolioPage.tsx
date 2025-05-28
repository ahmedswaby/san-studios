import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLocation } from "react-router-dom";

const PortfolioPage: React.FC = () => {
 const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  const projects = [
     {
      id: 5,
      title: 'WUKAIR CENTRAL',
      description: 'Qatar boasts a rich history and unique cultural heritage while experiencing sustainable growth in the real estate sector. Inspired by this, we are excited to introduce a unique residential-commercial project that blends traditional and contemporary Qatari styles. This development is designed to meet the needs of investors and residents seeking a distinctive living experience.',
      image: '/public/projects/qatar/1.jpg',
      year: '2024'
    },
    {
      id: 6,
      title: 'AL RABWA RESIDENCES',
      description: 'This contemporary residential complex is designed to blend timeless elegance with modern living. Comprising two symmetrical blocks connected by a central glass atrium, the architecture reflects a refined balance between bold geometric forms and natural textures.',
      image: '/public/projects/residential/1.jpg',
      year: '2024'
    },
    {
      id: 1,
      title: 'TABUK LUXE HOTEL',
      description: 'The hotel boasts a cutting-edge architectural design, characterized by dynamic facades that seamlessly blend aesthetics with functionality. The use of advanced materials and geometric patterns creates a visually striking exterior, ensuring that the hotel stands as an iconic landmark in the urban landscape.',
      image: '/public/projects/tabok/1.jpg',
      year: '2023'
    },
    {
      id: 2,
      title: 'SAS RTL HOTEL',
      description: 'The hotel, located in the heart of Medina, Saudi Arabia, offers a unique blend of modern luxury and cultural reverence. Set in a prime location, the design seamlessly integrates with the spiritual and historical significance of the city, while standing out with its striking contemporary facade.',
      image: '/public/projects/medina/1.jpg',
      year: '2023'
    },
    {
      id: 3,
      title: 'AL-MUZAIN BARBERSHOP',
      description: 'This project showcases a refined and modern AL-MUZAIN BARBERSHOP interior designed to offer a premium grooming experience in a sophisticated setting. The design concept blends minimalist elegance with functional efficiency, creating a welcoming and luxurious atmosphere for clients',
      image: '/public/projects/barber-shop/5.jpg',
      year: '2024'
    },
    {
      id: 4,
      title: 'PRIVATE LIVING ROOM',

      description: 'This reception space embodies a harmonious fusion of modern sophistication and natural warmth. The design concept focuses on creating an inviting and upscale environment through a refined palette of earthy neutrals, soft greens, and textured materials.',
      image: '/public/projects/reception/1.jpg',
      year: '2024'
    },
   
  ];

  // const categories = ['All', 'Structural Design', 'Process Engineering', 'Architectural Engineering', 'Urban Planning', 'Healthcare Engineering', 'Civil Engineering'];
  // const [selectedCategory, setSelectedCategory] = React.useState('All');
  // const [searchQuery, setSearchQuery] = React.useState('');

  // const filteredProjects = projects.filter(project => {
  //   const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
  //   const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     project.description.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

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
            {/* <div className="flex flex-wrap gap-3"> */}
              {/* {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))} */}
            {/* </div> */}

            {/* Search */}
            {/* <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description.slice(0 , 120) + '...'}</p>
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
      <section className="py-20 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              Let's discuss how our engineering expertise can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/sanstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-white hover:text-gray-900  transition-colors duration-300"
              >
                Schedule a Meeting
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

export default PortfolioPage;