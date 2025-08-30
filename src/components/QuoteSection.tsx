import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Info, Truck, Clock, Shield, Star } from 'lucide-react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    fromCity: '',
    toCity: '',
    weight: '',
    serviceType: 'express',
    dimensions: '',
    goodsType: 'general'
  });

  const [quote, setQuote] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const serviceTypes = {
    express: { label: 'Express (1-2 days)', icon: <Clock size={16} />, color: 'text-red-600' },
    standard: { label: 'Standard (3-5 days)', icon: <Truck size={16} />, color: 'text-blue-600' },
    economy: { label: 'Economy (5-7 days)', icon: <Shield size={16} />, color: 'text-green-600' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateQuote = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fromCity || !formData.toCity || !formData.weight) {
      alert('Please fill in all required fields (From City, To City, and Weight)');
      return;
    }
    
    setLoading(true);
    setQuote(null); // Clear previous quote
    
    // Enhanced quote calculation logic
    setTimeout(() => {
      // Redirect to WhatsApp for quote instead of showing pricing
      const serviceTypeDisplay = formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1);
      const message = `Hi Cargo Fusion! I would like to get a detailed shipping quote. Please provide me with competitive rates and delivery options for my shipment requirements. (Calculate Shipping Cost — From City: ${formData.fromCity} | To City: ${formData.toCity} | Weight: ${formData.weight} kg | Service Type: ${serviceTypeDisplay})`;
      const phoneNumber = '919176776598';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setQuote({
        message: 'Quote request sent via WhatsApp',
        estimatedDelivery: formData.serviceType === 'express' ? '1-2 days' : 
                          formData.serviceType === 'standard' ? '3-5 days' : '5-7 days',
        whatsappSent: true
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <Star size={16} className="mr-2" />
            Trusted by 50,000+ businesses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Instant Shipping Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Compare rates instantly and book 
            your shipment with confidence. Save up to 25% compared to traditional methods.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg">
                <Calculator className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Smart Shipping Calculator
                </h3>
                <p className="text-gray-600 mt-1">Powered by AI for accurate pricing</p>
              </div>
            </div>

            <form onSubmit={calculateQuote} className="space-y-8">
              {/* Route Selection */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Truck size={20} className="mr-2 text-blue-600" />
                  Route Details
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      From City *
                    </label>
                    <input
                      type="text"
                      name="fromCity"
                      value={formData.fromCity}
                      onChange={handleInputChange}
                      placeholder="Enter pickup city"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      To City *
                    </label>
                    <input
                      type="text"
                      name="toCity"
                      value={formData.toCity}
                      onChange={handleInputChange}
                      placeholder="Enter delivery city"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calculator size={20} className="mr-2 text-blue-600" />
                  Package Information
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Weight (kg) *
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="Enter weight"
                      required
                      min="0.1"
                      step="0.1"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Goods Type
                    </label>
                    <select
                      name="goodsType"
                      value={formData.goodsType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                    >
                      <option value="general">General Goods</option>
                      <option value="electronics">Electronics</option>
                      <option value="fragile">Fragile Items</option>
                      <option value="documents">Documents</option>
                      <option value="textiles">Textiles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Dimensions (Optional)
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder="L x W x H (cm)"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Service Type Selection */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Choose Service Type</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(serviceTypes).map(([key, service]) => (
                    <label
                      key={key}
                      className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all duration-200 ${
                        formData.serviceType === key
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={key}
                        checked={formData.serviceType === key}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between mb-2">
                        <span className={`${service.color} font-medium`}>
                          {service.icon}
                        </span>
                        {key === 'economy' && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            SAVE 25%
                          </span>
                        )}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {service.label.split(' (')[0]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {service.label.split(' (')[1]?.replace(')', '')}
                      </div>
                      <div className="text-sm text-blue-600 font-medium mt-2">
                        ₹{service.rate}/kg base rate
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-xl shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Calculator size={24} />
                    <span>Calculate Shipping Cost</span>
                    <ArrowRight size={24} />
                  </>
                )}
              </button>
              
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => {
                    const message = `Hi Cargo Fusion! I would like to get a detailed shipping quote. Please provide me with competitive rates and delivery options for my shipment requirements.`;
                    const phoneNumber = '919176776598';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  <span>Get Quote via WhatsApp</span>
                </button>
              </div>
            </form>

            {quote && (
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-3xl">
                <div className="flex items-center mb-6">
                  <CheckCircle className="text-blue-600 mr-3" size={32} />
                  <div>
                    <h4 className="text-2xl font-bold text-blue-800">Quote Request Sent!</h4>
                    <p className="text-blue-700">Route: {formData.fromCity} → {formData.toCity}</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-md text-center">
                  <h5 className="font-bold text-gray-900 mb-4">Your quote request has been sent via WhatsApp!</h5>
                  <p className="text-gray-700 mb-4">
                    Our team will respond with competitive rates and delivery options for your shipment within minutes.
                  </p>
                  <div className="text-lg font-semibold text-blue-600">
                    Estimated Delivery: {quote.estimatedDelivery}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      const message = `Hi Cargo Fusion! I would like to proceed with booking my shipment. Please provide me with the next steps.`;
                      const phoneNumber = '919176776598';
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Proceed to Book
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg">
                    Contact Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">100% Secure</h4>
              <p className="text-sm text-gray-600">Insured deliveries</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <CheckCircle size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
              <p className="text-sm text-gray-600">Transparent pricing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-3 rounded-full mb-3">
                <Clock size={24} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Real-time Tracking</h4>
              <p className="text-sm text-gray-600">Live GPS updates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Star size={24} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">4.9/5 Rating</h4>
              <p className="text-sm text-gray-600">10K+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;