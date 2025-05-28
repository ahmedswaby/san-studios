import React , { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
  import { useLocation } from "react-router-dom";

const ProjectDetailPage: React.FC = () => {
 const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  const { id } = useParams();

  // This would typically come from an API or database
  const projects = [
    {
      id: 1,
      title: 'TABUK LUXE HOTEL',
      location: 'Cairo, Egypt',
      year: '2023',
      PLOTAREA : "3,247 SQ.M",
      BUA : "18,295 SQ.M",
      description: 'The hotel boasts a cutting-edge architectural design, characterized by dynamic facades that seamlessly blend aesthetics with functionality. The use of advanced materials and geometric patterns creates a visually striking exterior, ensuring that the hotel stands as an iconic landmark in the urban landscape.',

      images: [
        '/public/projects/tabok/1.jpg',
        '/public/projects/tabok/2.jpg',
        '/public/projects/tabok/3.jpg',
        '/public/projects/tabok/4.jpg',
        '/public/projects/tabok/5.jpg',
        '/public/projects/tabok/6.jpg',
        '/public/projects/tabok/7.jpg',
        '/public/projects/tabok/8.jpg',
        '/public/projects/tabok/9.jpg',
      ],
      services: [
        "Conceptual Design",
        'Interior Design',
        '3D Visualization',
      ]
    }
    , {
      id: 2,
      title: 'SAS RTL HOTEL',
      location: 'Cairo, Egypt',
      year: '2023',
      PLOTAREA : "612 SQ.M",
      BUA : "5,178 SQ.M",
      description: "The hotel, located in the heart of Medina, Saudi Arabia, offers a unique blend of modern luxury and cultural reverence. Set in a prime location, the design seamlessly integrates with the spiritual and historical significance of the city, while standing out with its striking contemporary facade",
      images: [
        '/public/projects/medina/1.jpg',
        '/public/projects/medina/2.jpg',
        '/public/projects/medina/3.jpg',
        '/public/projects/medina/4.jpg',
        '/public/projects/medina/5.jpg',
        '/public/projects/medina/6.jpg',
        '/public/projects/medina/7.jpg',
        '/public/projects/medina/8.jpg',
        '/public/projects/medina/9.jpg',
        '/public/projects/medina/10.jpg',
        '/public/projects/medina/11.jpg',
      ],
      services: [
        'Conceptual Design',
        '3D visualization',
        '3D Animation',
        'Interior Design'
      ]
    },
    {
      id: 3,
      title: 'AL-MUZAIN BARBERSHOP',

      location: 'Cairo, Egypt',
      year: '2023',
      AREA :  "110 SQ.M",
      description: "This project showcases a refined and modern AL-MUZAIN BARBERSHOP interior designed to offer a premium grooming experience in a sophisticated setting. The design concept blends minimalist elegance with functional efficiency, creating a welcoming and luxurious atmosphere for clients.",
      images: [
        '/public/projects/barber-shop/1.jpg',
        '/public/projects/barber-shop/2.jpg',
        '/public/projects/barber-shop/3.jpg',
        '/public/projects/barber-shop/4.jpg',
        '/public/projects/barber-shop/5.jpg',
      ],
      services: [
        'Interior Design',
        '3D visualization',]
    },
    {
      id: 4,
      title: 'PRIVATE LIVING ROOM',

      location: 'Cairo, Egypt',
      year: '2023',
      AREA: "65 SQ.M",
      description: "This reception space embodies a harmonious fusion of modern sophistication and natural warmth. The design concept focuses on creating an inviting and upscale environment through a refined palette of earthy neutrals, soft greens, and textured materials.",
      images: [
        '/public/projects/reception/1.jpg',
        '/public/projects/reception/2.jpg',
        '/public/projects/reception/3.jpg',
        '/public/projects/reception/4.jpg',
        '/public/projects/reception/5.jpg',
        '/public/projects/reception/6.jpg',
        '/public/projects/reception/7.jpg',
      ],
        services: [
        'Interior Design',
        '3D visualization',]
    
    },
    {
      id: 5,
      title: 'WUKAIR CENTRAL',
      location: 'Cairo, Egypt',
      year: '2023',
      PLOTAREA: "29,295 SQ.M",
      bua: "38,346 SQ.M",
      description: "Qatar boasts a rich history and unique cultural heritage while experiencing sustainable growth in the real estate sector. Inspired by this, we are excited to introduce a unique residential-commercial project that blends traditional and contemporary Qatari styles. This development is designed to meet the needs of investors and residents seeking a distinctive living experience.",
      images: [
        '/public/projects/qatar/1.jpg',
        '/public/projects/qatar/2.jpg',
        '/public/projects/qatar/3.jpg',
        '/public/projects/qatar/4.jpg',
        '/public/projects/qatar/5.jpg',
        '/public/projects/qatar/6.jpg',
        '/public/projects/qatar/7.jpg',
        '/public/projects/qatar/8.jpg',
      ],
      services: [
        'Conceptual Design',
        '3D visualization',
      ]
    },
    {
      id: 6,
      title: 'AL RABWA RESIDENCES',

      location: 'Cairo, Egypt',
      year: '2023',
      PLOTAREA: "2,055 SQ.M",
      bua: "5,176 SQ.M",
      description: "This contemporary residential complex is designed to blend timeless elegance with modern living. Comprising two symmetrical blocks connected by a central glass atrium, the architecture reflects a refined balance between bold geometric forms and natural textures.",
      images: [
        '/public/projects/residential/1.jpg',
        '/public/projects/residential/2.jpg',
        '/public/projects/residential/3.jpg',
        '/public/projects/residential/4.jpg',
        '/public/projects/residential/5.jpg',
        '/public/projects/residential/6.jpg',
        '/public/projects/residential/7.jpg',
        '/public/projects/residential/8.jpg',
      ],
      services: [
    'Conceptual Design',
        '3D visualization',
      ]
    }
  ]

  const project = projects.find(p => p.id === parseInt(id || '1')) || projects[0];

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
                <section>
                  <div className="container">
                    <div>
                      <div className="space-y-12">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                          <p className="text-gray-600">{project.description}</p>
                        </div>

                        {/* <div>
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
              </div> */}
                      </div>
                    </div>
                  </div>
                </section>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    {/* <Building2 className="w-5 h-5 text-gray-600 mt-1" /> */}
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    {/* <Clock className="w-5 h-5 text-gray-600 mt-1" /> */}
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Year</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    {/* <Clock className="w-5 h-5 text-gray-600 mt-1" /> */}
                    {project.PLOTAREA && (
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Plot Area</p>
                      <p className="font-medium text-gray-900">{project.PLOTAREA}</p>
                    </div>
                    )}
                    {project.AREA && (
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Area</p>
                      <p className="font-medium text-gray-900">{project.AREA}</p>
                    </div>
                    )}
                  </div>
                  <div className="flex items-start">
                    {/* <Clock className="w-5 h-5 text-gray-600 mt-1" /> */}
                    {project.bua && (
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">BUA</p>
                      <p className="font-medium text-gray-900">{project.bua}</p>
                    </div>
                    )}
                  </div>
                  <div className="flex items-start">
                    {/* <Clock className="w-5 h-5 text-gray-600 mt-1" /> */}
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Scope</p>
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
                  {/* <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Interested in similar projects?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help bring your engineering vision to life.
                </p>
                <a
                  href="https://calendly.com/sanstudio"
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
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}

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