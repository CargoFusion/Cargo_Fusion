import React from 'react';
import { Truck, Package, Warehouse, Clock, Car, Plane, ShoppingCart, Building, Shield, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="text-blue-600" size={32} />,
      title: 'Full Truckload (FTL)',
      description: 'Dedicated trucks for your large shipments with direct delivery, enhanced security, and faster transit times.',
      features: ['Direct delivery without stops', 'Enhanced security & safety', 'Cost-effective for bulk shipments', 'Faster transit times'],
      popular: false,
      color: 'blue'
    },
    {
      icon: <Package className="text-blue-600" size={32} />,
      title: 'Part Truckload (PTL)',
      description: 'Share truck space and costs with other shippers. Perfect for small to medium-sized shipments.',
      features: ['Shared transportation costs', 'Flexible shipment quantities', 'Regular scheduled services', 'Door-to-door delivery'],
      popular: true,
      color: 'orange'
    },
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: 'Express Courier',
      description: 'Ultra-fast delivery for urgent documents, small packages, and time-sensitive shipments.',
      features: ['Same-day & next-day delivery', 'Real-time GPS tracking', 'Doorstep pickup service', 'SMS & email notifications'],
      popular: false,
      color: 'red'
    },
    {
      icon: <ShoppingCart className="text-blue-600" size={32} />,
      title: 'E-commerce Fulfillment',
      description: 'Complete solution for online sellers including warehousing, pick & pack, and last-mile delivery.',
      features: ['Automated pick & pack services', 'Return handling & processing', 'COD collection available', 'Multi-channel integration'],
      popular: false,
      color: 'purple'
    },
    {
      icon: <Warehouse className="text-blue-600" size={32} />,
      title: 'Warehousing & Storage',
      description: 'Secure, climate-controlled storage facilities with advanced inventory management systems.',
      features: ['Climate-controlled environment', 'Advanced security systems', 'Inventory management', 'Flexible storage terms'],
      popular: false,
      color: 'green'
    },
    {
      icon: <Car className="text-blue-600" size={32} />,
      title: 'Last-Mile Delivery',
      description: 'Final delivery solution connecting distribution centers to end customers in urban and rural areas.',
      features: ['Doorstep delivery service', 'Flexible delivery timing', 'Cash on delivery option', 'Photo proof of delivery'],
      popular: false,
      color: 'teal'
    }
  ];

  const additionalServices = [
    { icon: <Plane size={20} />, title: 'Air Freight', desc: 'Fast international shipping' },
    { icon: <Shield size={20} />, title: 'Insurance', desc: 'Complete cargo protection' },
    { icon: <Building size={20} />, title: 'Corporate Solutions', desc: 'Enterprise logistics' },
    { icon: <MapPin size={20} />, title: 'White Glove', desc: 'Premium handling service' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <Package size={16} className="mr-2" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From small parcels to full truckloads, we offer end-to-end logistics services 
            designed to solve your business challenges and accelerate growth.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100 ${
                service.popular ? 'ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-white' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300 ${
                    service.popular ? 'bg-orange-100 group-hover:bg-orange-200' : ''
                  }`}>
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                      service.popular ? 'bg-orange-500' : 'bg-blue-600'
                    }`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 group-hover:shadow-lg transform group-hover:scale-105 ${
                service.popular
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              onClick={() => {
                const message = `Hi Cargo Fusion! I'm interested in your ${service.title} service. Please provide me with detailed pricing and information.`;
                const phoneNumber = '919176776598';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              >
                Get Quote via WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <p className="text-gray-600">Specialized solutions for unique requirements</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Coverage */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Pan-India Service Network</h3>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Cities Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25,000+</div>
                <div className="text-blue-100">Pin codes Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1,500+</div>
                <div className="text-blue-100">Fleet Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.5%</div>
                <div className="text-blue-100">Delivery Success</div>
              </div>
            </div>
          </div>
          
          {/* Major Cities */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune',
              'Hyderabad', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Kanpur',
              'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Vadodara'
            ].map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 px-4 py-3 rounded-xl font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 transform hover:scale-105 cursor-pointer border border-blue-100"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 text-lg">
            <span className="font-semibold text-blue-600">And 500+ more cities</span> across India with same-day and next-day delivery options
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;