// components/WhereWeWork.tsx
'use client';

import { useState, useEffect } from 'react';
import { Building2, MapPin, Users, FolderOpen, Target } from 'lucide-react';

export default function WhereWeWork() {
  const [activeEmirate, setActiveEmirate] = useState('dubai');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const emirates = [
    {
      id: 'dubai',
      name: 'Dubai',
      description: 'Commercial hub with innovative sustainability projects including green buildings, smart cities, and eco-friendly infrastructure.',
      projects: 350,
      color: '#3B82F6',
      borderColor: '#1D4ED8',
      svgPosition: { x: 65, y: 40 },
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop'
    },
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      description: 'Capital city leading in renewable energy, large-scale environmental initiatives, and sustainable urban planning.',
      projects: 280,
      color: '#10B981',
      borderColor: '#047857',
      svgPosition: { x: 45, y: 50 },
      image: 'https://images.unsplash.com/photo-1600508774547-8a3c7c0ed852?w=800&h=400&fit=crop'
    },
    {
      id: 'sharjah',
      name: 'Sharjah',
      description: 'Cultural capital focusing on heritage conservation, community sustainability projects, and green cultural spaces.',
      projects: 150,
      color: '#F97316',
      borderColor: '#C2410C',
      svgPosition: { x: 55, y: 45 },
      image: 'https://images.unsplash.com/photo-1523803374869-47c3034a9936?w=800&h=400&fit=crop'
    },
    {
      id: 'ajman',
      name: 'Ajman',
      description: 'Coastal city specializing in marine conservation, sustainable fishing, and beachfront eco-projects.',
      projects: 85,
      color: '#14B8A6',
      borderColor: '#0F766E',
      svgPosition: { x: 58, y: 48 },
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=400&fit=crop'
    },
    {
      id: 'ras-al-khaimah',
      name: 'Ras Al Khaimah',
      description: 'Mountainous region with eco-tourism projects, sustainable agriculture, and renewable energy installations.',
      projects: 75,
      color: '#8B5CF6',
      borderColor: '#7C3AED',
      svgPosition: { x: 60, y: 30 },
      image: 'https://images.unsplash.com/photo-1580651214613-f4692d6d138f?w=800&h=400&fit=crop'
    },
    {
      id: 'fujairah',
      name: 'Fujairah',
      description: 'Eastern coast leading in renewable energy projects, water conservation, and sustainable port operations.',
      projects: 60,
      color: '#F59E0B',
      borderColor: '#D97706',
      svgPosition: { x: 80, y: 45 },
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop'
    },
    {
      id: 'umm-al-quwain',
      name: 'Umm Al Quwain',
      description: 'Historic emirate with wildlife conservation projects and sustainable tourism development.',
      projects: 50,
      color: '#EC4899',
      borderColor: '#DB2777',
      svgPosition: { x: 52, y: 43 },
      image: 'https://images.unsplash.com/photo-1596394516093-9ba7a8c8c56e?w=800&h=400&fit=crop'
    }
  ];

  const activeEmirateData = emirates.find(e => e.id === activeEmirate) || emirates[0];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helping you transform communities across the UAE with sustainable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats & Info */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Employee Owned</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Fully committed team of sustainability experts
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <FolderOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">1,000+</div>
                    <div className="text-sm text-gray-600 font-medium">Active Projects</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Ongoing sustainable initiatives across UAE
                </p>
              </div>
            </div>

            {/* Active Emirate Info */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
              <div 
                className="h-2 w-full"
                style={{ background: activeEmirateData.color }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{ backgroundColor: `${activeEmirateData.color}20`, borderColor: activeEmirateData.color, borderWidth: '2px' }}>
                    <MapPin className="h-5 w-5" style={{ color: activeEmirateData.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {activeEmirateData.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Target className="h-3 w-3 mr-1" />
                      <span>{activeEmirateData.projects} active sustainability projects</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {activeEmirateData.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span>Multiple office locations across {activeEmirateData.name}</span>
                </div>
              </div>
            </div>

            {/* Emirates List */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                Our UAE Locations:
              </h4>
              <div className="flex flex-wrap gap-2">
                {emirates.map((emirate) => (
                  <button
                    key={emirate.id}
                    onClick={() => setActiveEmirate(emirate.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                      activeEmirate === emirate.id
                        ? 'text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow'
                    }`}
                    style={activeEmirate === emirate.id ? { backgroundColor: emirate.color } : {}}
                  >
                    {emirate.name}
                  </button>
                ))}
              </div>
            </div>

            {/* View Offices Button */}
            <button className="mt-8 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium flex items-center justify-center shadow-lg hover:shadow-xl">
              <MapPin className="h-5 w-5 mr-2" />
              View Our Offices
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-center text-gray-500 text-sm mt-3">
              See the offices behind our projects across all 7 Emirates
            </p>
          </div>

          {/* Right Column - Interactive Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">UAE Operations Map</h3>
                      <p className="text-gray-300 text-sm">Click on any emirate to explore our projects</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-2xl font-bold">{activeEmirateData.projects}</div>
                    <div className="text-gray-300 text-sm">Projects in {activeEmirateData.name}</div>
                  </div>
                </div>
              </div>

              {/* SVG Map Container */}
              <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-gray-50">
                {/* SVG Map */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* UAE Outline */}
                  <path
                    d="M30,20 L70,20 L80,50 L70,80 L30,80 L20,50 Z"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.5"
                  />

                  {/* Emirate Regions */}
                  {emirates.map((emirate) => (
                    <g key={emirate.id}>
                      {/* Region highlight */}
                      <circle
                        cx={emirate.svgPosition.x}
                        cy={emirate.svgPosition.y}
                        r="4"
                        fill={activeEmirate === emirate.id ? emirate.color : emirate.color}
                        stroke={activeEmirate === emirate.id ? emirate.borderColor : emirate.color}
                        strokeWidth={activeEmirate === emirate.id ? "2" : "1"}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveEmirate(emirate.id)}
                        className="hover:stroke-[3px] transition-all"
                      />
                      
                      {/* Pulse effect for active emirate - only render on client */}
                      {isClient && activeEmirate === emirate.id && (
                        <circle
                          cx={emirate.svgPosition.x}
                          cy={emirate.svgPosition.y}
                          r="8"
                          fill="none"
                          stroke={emirate.color}
                          strokeWidth="1"
                          strokeOpacity="0.4"
                        >
                          <animate
                            attributeName="r"
                            from="8"
                            to="15"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="stroke-opacity"
                            from="0.4"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      {/* Connection lines */}
                      <line
                        x1="50"
                        y1="50"
                        x2={emirate.svgPosition.x}
                        y2={emirate.svgPosition.y}
                        stroke="rgba(156, 163, 175, 0.2)"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                      />
                    </g>
                  ))}

                  {/* Labels */}
                  {emirates.map((emirate) => (
                    <text
                      key={`label-${emirate.id}`}
                      x={emirate.svgPosition.x + 6}
                      y={emirate.svgPosition.y + 4}
                      fill={activeEmirate === emirate.id ? emirate.color : "#6B7280"}
                      fontSize="3"
                      fontWeight={activeEmirate === emirate.id ? "bold" : "normal"}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveEmirate(emirate.id)}
                      className="font-sans"
                    >
                      {emirate.name}
                    </text>
                  ))}

                  {/* Active Emirate Highlight */}
                  {activeEmirateData && (
                    <g>
                      <circle
                        cx={activeEmirateData.svgPosition.x}
                        cy={activeEmirateData.svgPosition.y}
                        r="6"
                        fill="none"
                        stroke={activeEmirateData.color}
                        strokeWidth="2"
                        strokeOpacity="0.8"
                      />
                    </g>
                  )}
                </svg>

                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-2"
                          style={{ backgroundColor: activeEmirateData.color }}
                        ></div>
                        <span className="font-medium text-gray-900">{activeEmirateData.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">{activeEmirateData.projects} projects</span>
                        <div className="text-xs text-gray-500">Click other emirates to explore</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Legend: </span>
                    Larger dots indicate more projects
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-xs text-gray-600">Active</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-xs text-gray-600">Inactive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-700">{emirates.length}</div>
                <div className="text-sm text-blue-600">Emirates</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-700">
                  {emirates.reduce((sum, e) => sum + e.projects, 0)}
                </div>
                <div className="text-sm text-green-600">Total Projects</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-700">7+</div>
                <div className="text-sm text-purple-600">Years Operating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}