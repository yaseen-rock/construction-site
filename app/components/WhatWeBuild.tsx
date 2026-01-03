// components/WhatWeBuild.tsx
'use client';

import { useState } from 'react';
import { Building2, Wrench, Factory, Star } from 'lucide-react';

export default function WhatWeBuild() {
  const [activeCategory, setActiveCategory] = useState('buildings');

  const categories = [
    {
      id: 'civil',
      title: 'Civil',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Infrastructure projects focusing on sustainability and environmental impact reduction.',
      image: 'https://www.blackcatgc.com/images/civil/Fence_Installations.jpg',
      projects: [
        'Green Public Transportation',
        'Sustainable Water Management',
        'Eco-Friendly Road Networks',
        'Renewable Energy Infrastructure'
      ]
    },
    {
      id: 'buildings',
      title: 'Buildings',
      icon: <Building2 className="h-6 w-6" />,
      description: 'Sustainable commercial and residential structures with green building certifications.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop',
      projects: [
        'LEED Certified Office Towers',
        'Green Residential Complexes',
        'Sustainable Educational Facilities',
        'Eco-Friendly Hospitality'
      ]
    },
    
    {
      id: 'industrial',
      title: 'Industrial',
      icon: <Factory className="h-6 w-6" />,
      description: 'Manufacturing and industrial facilities optimized for energy efficiency and waste reduction.',
      image: 'https://kalyaniinfrastructure.com/services-industrial-turnkey-projects/bangkok-thailand-november-22-2019-construction-industry-engineer-foreman-standing-orders-airport-worker-team-work-high-safety/',
      projects: [
        'Clean Manufacturing Plants',
        'Circular Economy Facilities',
        'Waste-to-Energy Projects',
        'Sustainable Logistics Hubs'
      ]
    },
    {
      id: 'special',
      title: 'Special Projects',
      icon: <Star className="h-6 w-6" />,
      description: 'Innovative and unique sustainability initiatives pushing environmental boundaries.',
      image: 'https://static.vecteezy.com/system/resources/previews/050/624/765/non_2x/construction-workers-working-on-electrical-wiring-and-cables-photo.jpeg',
      projects: [
        'Carbon Capture Facilities',
        'Urban Green Spaces',
        'Climate Resilience Projects',
        'Biodiversity Conservation'
      ]
    }
  ];

  const activeCategoryData = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-lg text-gray-600">
            We look beyond your immediate construction needs to develop comprehensive solutions for each project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Content */}
          <div>
            {/* Category Tabs */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-green-50 hover:shadow-md'
                    }`}
                  >
                    <div className={`mb-2 ${
                      activeCategory === category.id ? 'text-white' : 'text-green-600'
                    }`}>
                      {category.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base">{category.title}</span>
                  </button>
                ))}
              </div>

              {/* Category Description */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    {activeCategoryData.icon}
                  </div>
                  {activeCategoryData.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeCategoryData.description}
                </p>
                
                {/* Projects List */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Project Types:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activeCategoryData.projects.map((project, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Green Certifications</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={activeCategoryData.image}
                  alt={`${activeCategoryData.title} projects`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                      {activeCategoryData.icon}
                    </div>
                    <h3 className="text-2xl font-bold">Our {activeCategoryData.title} Work</h3>
                  </div>
                  <p className="text-gray-200">Sustainable solutions for modern challenges</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'ring-4 ring-green-500 ring-offset-2 transform scale-105'
                      : 'opacity-70 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    activeCategory === category.id 
                      ? 'bg-green-600/40' 
                      : 'bg-black/30'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-xs font-medium ${
                      activeCategory === category.id ? 'text-white' : 'text-gray-200'
                    }`}>
                      {category.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Project Highlights */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Sustainability Features:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">♻️</span>
                  </div>
                  <span className="text-sm text-gray-700">Energy Efficient</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">💧</span>
                  </div>
                  <span className="text-sm text-gray-700">Water Conservation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">🌱</span>
                  </div>
                  <span className="text-sm text-gray-700">Green Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">🌞</span>
                  </div>
                  <span className="text-sm text-gray-700">Solar Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl">
            View All Projects
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Explore our portfolio of sustainable construction projects
          </p>
        </div>
      </div>
    </section>
  );
}