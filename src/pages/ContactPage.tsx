import React ,  { useState, useRef, useEffect }from 'react';
import { Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";


const ContactPage: React.FC = () => {
 const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const form = useRef();
  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: 'Visit Us',
    //   details: ['123 Engineering Boulevard', 'Cairo, Egypt']
    // },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+20 11111 27627', "+20 11531 42759"]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@san-studios.com']
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Sunday - Thursday', '9:00 AM - 6:00 PM']
    }
  ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  // emailjs.sendForm('service_foc17ys', 'template_sen4h29', form.current, 'zRCrK_iDD8ijqiR_U')
  //   .then(() => {
  //       alert('Message sent successfully!');
  //   }, (error) => {
  //       alert('Failed to send message. ' + error);
  //   });


  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help bring your engineering vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Icon className="w-8 h-8 text-gray-900 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6" ref={form} onSubmit={handleSubmit} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                      value={formData.name}
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                        value={formData.email}
                  onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                    value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.54749421954!2d31.24560983700576!3d30.044419651435495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841885535bec3%3A0x520da52b3a7a660f!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1709865555776!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 text-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              Schedule a free consultation to discuss your engineering needs.
            </p>
            <a
              href="https://calendly.com/sanstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Book a Free Consultation
              <ArrowUpRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;