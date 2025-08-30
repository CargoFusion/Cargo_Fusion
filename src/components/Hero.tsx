import React, { useState } from 'react';
import { ArrowRight, CheckCircle, MapPin, Clock, Shield, Calculator, Truck } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    fromCity: '',
    toCity: '',
    weight: '',
    serviceType: 'express',
    goodsType: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppCalculate = () => {
    const { fromCity, toCity, weight, serviceType, goodsType } = formData;
    
    // Create WhatsApp message
    const message = `Hi Cargo Fusion! 

I would like to get a shipping quote with the following details:

📍 From: ${fromCity || 'Not specified'}
📍 To: ${toCity || 'Not specified'}
⚖️ Weight: ${weight || 'Not specified'} kg
🚚 Service Type: ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}
📦 Goods Type: ${goodsType.charAt(0).toUpperCase() + goodsType.slice(1)}

Please provide me with the best rates and delivery timeline.

Thank you!`;

    // WhatsApp number (replace with actual business number)
    const phoneNumber = '919176776598'; // Replace with actual WhatsApp business number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/90"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                India's Fastest Growing Logistics Network
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fast, Reliable &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Transparent
                </span>{' '}
                Transport Across India
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Solve your shipping challenges with instant quotes, real-time tracking, 
                and seamless delivery. No hidden costs, no delays - just reliable logistics.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-blue-800 bg-opacity-30 rounded-lg p-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Instant Quotes</h3>
                  <p className="text-sm text-blue-200">Transparent pricing</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-blue-800 bg-opacity-30 rounded-lg p-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Tracking</h3>
                  <p className="text-sm text-blue-200">Live GPS updates</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-blue-800 bg-opacity-30 rounded-lg p-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">100% Secure</h3>
                  <p className="text-sm text-blue-200">Insured delivery</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-400" />
                <span>500+ Cities Connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-400" />
                <span>50K+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-400" />
                <span>99.5% On-Time Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                <span>Get Instant Quote</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Quote/Track Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800 border border-gray-100">

              <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
                Calculate Shipping Cost
              </h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      From City
                    </label>
                    <input
                      type="text"
                      name="fromCity"
                      value={formData.fromCity}
                      onChange={handleInputChange}
                      placeholder="Enter pickup city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      To City
                    </label>
                    <input
                      type="text"
                      name="toCity"
                      value={formData.toCity}
                      onChange={handleInputChange}
                      placeholder="Enter delivery city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option>Express</option>
                      <option>Standard</option>
                      <option>Economy</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={handleWhatsAppCalculate}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  <span>Calculate Cost via WhatsApp</span>
                </button>
              </form>
              
              <p className="text-center text-sm text-gray-600 mt-6">
                <span className="inline-flex items-center space-x-1">
                  <Shield size={16} className="text-green-500" />
                  <span>Secure • No spam • Instant results</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;