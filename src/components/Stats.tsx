import React from 'react';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="text-blue-600" size={28} />,
      number: '10M+',
      label: 'Shipments Delivered',
      description: 'Successfully completed'
    },
    {
      icon: <Users className="text-blue-600" size={28} />,
      number: '50K+',
      label: 'Happy Customers',
      description: 'Trust our services'
    },
    {
      icon: <MapPin className="text-blue-600" size={28} />,
      number: '500+',
      label: 'Cities Connected',
      description: 'Across India'
    },
    {
      icon: <Award className="text-blue-600" size={28} />,
      number: '99.5%',
      label: 'On-Time Delivery',
      description: 'Rate achieved'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join the growing community of businesses 
            that trust us with their logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="bg-blue-50 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-gray-800">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">Certified & Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="font-semibold text-gray-700">ISO 9001:2015</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="font-semibold text-gray-700">GSTIN Verified</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="font-semibold text-gray-700">Make In India</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="font-semibold text-gray-700">StartUp India</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="font-semibold text-gray-700">IDFY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;