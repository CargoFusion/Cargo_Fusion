import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

// List of common country codes
const countryCodes = [
  { code: '+1', name: 'USA/Canada' },
  { code: '+44', name: 'UK' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+81', name: 'Japan' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+86', name: 'China' },
  { code: '+55', name: 'Brazil' },
  { code: '+7', name: 'Russia' },
  { code: '+27', name: 'South Africa' },
  { code: '+52', name: 'Mexico' },
  { code: '+971', name: 'UAE' },
  { code: '+65', name: 'Singapore' },
];

// Main application component
export default function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Pre-filled with country code
    phone: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission logic
    console.log('Form submitted:', formData);

    setStatusMessage('Thank you for your message! We will get back to you soon.');

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      countryCode: '+91', // Reset with pre-filled country code
      phone: '',
      subject: '',
      message: ''
    });

    // Clear the status message after a few seconds
    setTimeout(() => {
      setStatusMessage('');
    }, 5000);
  };

  // Handle WhatsApp contact button
  const handleWhatsAppContact = () => {
    const { name, countryCode, phone, subject, message } = formData;
    
    // Validate that name, phone, and message are not empty
    if (!name || !phone || !message) {
      setStatusMessage('Please fill in your name, phone number, and message before sending via WhatsApp.');
      return;
    }

    const fullPhoneNumber = `${countryCode}${phone}`;
    const whatsappMessage = `Hi Cargo Fusion!

Name: ${name}
Phone: ${fullPhoneNumber}
Subject: ${subject || 'General Inquiry'}

Message: ${message}

Please get back to me at your earliest convenience.`;

    // A real-world business number would be here
    const whatsappNumber = '919176776598'; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Have questions about our services? Need a custom quote? We're here to help you with all your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up-delay">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+918001234567" className="text-blue-500 hover:underline">
                      +91 917-677-6598
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:admin@cargofusion.in" className="text-blue-500 hover:underline">
                      admin@cargofusion.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919176776598?text=Hi%20Cargo%20Fusion!%20I%20would%20like%20to%20know%20more%20about%20your%20logistics%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      +91 91767-76598
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Emergency support available 24/7 via WhatsApp
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up-delay-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex space-x-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="px-2 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    >
                      {countryCodes.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request Quote</option>
                  <option value="tracking">Shipment Tracking</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none placeholder-gray-400"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              {/* Submission message */}
              {statusMessage && (
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-semibold animate-fade-in-down">
                  {statusMessage}
                </div>
              )}

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 animate-bounce-once"
                >
                  <MessageCircle size={24} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Google Maps Section */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg mt-12 animate-fade-in-up-delay-3">
          <div className="flex items-center space-x-2 mb-4 text-blue-600">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h5 className="text-lg font-semibold text-gray-900">Our Location</h5>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.291703277157!2d80.2643465!3d13.1815563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52710002ed39c3%3A0xd7a67b730f186f24!2sLaptop%20and%20Computer%20System%20Service!5e0!3m2!1sen!2sin!4v1717462086968!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laptop and Computer System Service"
            />
          </div>
          
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/C8evQT8BE7fe43Na8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
