import React, { useState } from 'react';
import { Search, Package, Mail, MapPin, Clock, Truck, CheckCircle, AlertCircle } from 'lucide-react';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
      
      // Simulate tracking process
      setTimeout(() => {
        const subject = 'Shipment Tracking Request';
        const body = `Hi Cargo Fusion Team,

I would like to track my shipment with the following details:

Tracking ID: ${trackingId}

Please provide me with the current status and expected delivery information.

Thank you for your assistance.

Best regards`;
        
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=admin@cargofusion.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
        
        setIsTracking(false);
      }, 1500);
    }
  };

  const handleWhatsAppTrack = () => {
    if (trackingId.trim()) {
      const message = `Hi Cargo Fusion! I would like to track my shipment with Tracking ID: ${trackingId}. Please provide me with the current status and expected delivery information.`;
      const phoneNumber = '919176776598';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="tracking" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <Package size={16} className="mr-2" />
            Real-time Tracking
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your Shipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with real-time tracking information. Enter your tracking ID 
            to get instant status updates and delivery notifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            {/* Tracking Form */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Enter Tracking Details
              </h3>
              <p className="text-gray-600">
                Get instant updates on your shipment status and location
              </p>
            </div>

            <form onSubmit={handleTrack} className="space-y-6">
              <div className="relative">
                <label htmlFor="tracking-id" className="block text-sm font-semibold text-gray-700 mb-3">
                  Tracking ID *
                </label>
                <div className="relative">
                  <input
                    id="tracking-id"
                    name="tracking-id"
                    type="text"
                    required
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-lg bg-gray-50 hover:bg-white"
                    placeholder="Enter your tracking ID (e.g., CF123456789)"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Package className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="submit"
                  disabled={!trackingId.trim() || isTracking}
                  className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isTracking ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>Track via Gmail</span>
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppTrack}
                  disabled={!trackingId.trim()}
                  className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    <span>Track via WhatsApp</span>
                  </div>
                </button>
              </div>
            </form>

            {/* Help Text */}
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <AlertCircle className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Need Help Finding Your Tracking ID?</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Your tracking ID was provided when you booked your shipment. Check your booking confirmation email, 
                    SMS, or receipt. It usually starts with "CF" followed by numbers (e.g., CF123456789).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <MapPin className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Location</h3>
                <p className="text-gray-600">
                  Track your shipment's exact location with GPS-enabled real-time updates throughout the journey.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Clock className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Updates</h3>
                <p className="text-gray-600">
                  Get instant notifications about pickup, transit milestones, and expected delivery times.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <CheckCircle className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proof of Delivery</h3>
                <p className="text-gray-600">
                  Receive photo confirmation and digital signature proof once your shipment is delivered.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Additional Support?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to help you with any tracking queries or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = "Hi Cargo Fusion! I need help with tracking my shipment. Please assist me.";
                  const phoneNumber = '919176776598';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                <span>WhatsApp Support</span>
              </button>
              <a 
                href="tel:+919176776598"
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Truck size={20} />
                <span>Call: 917-677-6598</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;