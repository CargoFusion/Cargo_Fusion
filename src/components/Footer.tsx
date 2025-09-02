import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Full Truckload (FTL)',
    'Part Truckload (PTL)',
    'Express Courier',
    'E-commerce Fulfillment',
    'Warehousing',
    'Last-Mile Delivery'
  ];

  const quickLinks = [
    'About Us',
    'Track Shipment',
    'Get Quote',
    'Service Areas',
    'Pricing',
    'Customer Support'
  ];

  const resources = [
    'Shipping Calculator',
    'Transit Times',
    'Packaging Guidelines',
    'Terms & Conditions',
    'Privacy Policy',
    'Careers'
  ];

  const majorCities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Pune',
    'Hyderabad',
    'Ahmedabad'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Cargo Fusion</h1>
                  <p className="text-sm text-gray-400">Fast • Reliable • Affordable</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's most innovative logistics partner, connecting businesses and individuals 
                across 500+ cities with fast, reliable, and transparent transportation solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <a href="tel:+919176776598" className="hover:text-blue-300 transition-colors">
                    +91 917-677-6598
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <a href="mailto:admin@cargofusion.in" className="hover:text-blue-300 transition-colors">
                    admin@cargofusion.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  <a 
                    href="https://wa.me/919176776598?text=Hi%20Cargo%20Fusion!%20I%20would%20like%20to%20know%20more%20about%20your%20logistics%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors"
                  >
                    WhatsApp: +91 91767-76598
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 mt-1" />
                  <span>
                    10 kaval cherry steel, thiumazhisai,<br />
                    Chennai - 600124, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-6">
                <span className="text-gray-400">Follow us:</span>
                <div className="flex space-x-3">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-bold mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {majorCities.map((city, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block">
                View all 500+ cities →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© 2024 Cargo Fusion. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <div className="text-gray-400">
                GST: 33BKJPR6231E1Z9
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded">ISO 9001:2015 Certified</span>
              <span className="bg-gray-800 px-3 py-1 rounded">GSTIN Verified</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Make In India</span>
              <span className="bg-gray-800 px-3 py-1 rounded">StartUp India Recognized</span>
            </div>
          </div>
        </div>
      </div>
      {/* Build by section */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-400">
            Build by LAPCOMSS | +91 89392 20746 | <a href="https://maps.app.goo.gl/FhoLtAJQvyR7GKic8" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">View on Google Maps</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
