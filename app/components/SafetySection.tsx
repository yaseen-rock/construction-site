// components/SafetySection.tsx
'use client';

import { Shield, Home, Users, Target, CheckCircle, Award } from 'lucide-react';

export default function SafetySection() {
  const safetyMetrics = [
    { value: '1M+', label: 'Safe Work Hours', icon: <Users className="h-5 w-5" /> },
    { value: '0', label: 'Lost Time Incidents', icon: <Target className="h-5 w-5" /> },
    { value: '100%', label: 'Safety Compliance', icon: <Shield className="h-5 w-5" /> },
    { value: '5⭐', label: 'Safety Rating', icon: <Award className="h-5 w-5" /> }
  ];

  const safetyPrinciples = [
    {
      title: 'Proactive Planning',
      description: 'Every project begins with comprehensive safety planning and risk assessment.',
      icon: '📋'
    },
    {
      title: 'Continuous Training',
      description: 'Regular safety training and certifications for all team members.',
      icon: '🎓'
    },
    {
      title: 'Daily Inspections',
      description: 'Routine site inspections to identify and mitigate potential hazards.',
      icon: '🔍'
    },
    {
      title: 'Family First',
      description: 'Ensuring every worker returns home safely to their family each day.',
      icon: '❤️'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Main Safety Image */}
            <div className="relative h-[500px]">
              <img
                src="https://www.pcl.com/content/dam/people-working/PCL%20-%20Nisku%20Mod%20Yard%20-%20June%2010,%202016-57-min.jpg"
                alt="Safety First - Our team working safely on site"
                className="w-full h-full object-cover"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-600/80 backdrop-blur-sm flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Safety in Action</h3>
                    <p className="text-gray-200">Our team at Nisku Mod Yard, June 2016</p>
                  </div>
                </div>
              </div>

              {/* Safety Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5.0</div>
                  <div className="text-sm text-gray-700">Safety Score</div>
                  <div className="flex justify-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Metrics - Below Image */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {safetyMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-green-400">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mr-4">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Safety: A Way of Life
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our culture of safety is one that extends beyond the job site to ensure 
                everyone returns home safely every day. Safety isn't just a policy—it's 
                our core value and daily commitment.
              </p>
            </div>

            {/* Safety Principles */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Safety Principles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {safetyPrinciples.map((principle, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition-colors">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">{principle.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{principle.title}</h4>
                        <p className="text-gray-600 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Commitment */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border-l-4 border-green-500">
              <div className="flex items-start">
                <Home className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Commitment to You</h4>
                  <p className="text-gray-700">
                    We believe that zero accidents is an achievable goal. Through rigorous 
                    training, proper equipment, and a culture where every team member is 
                    empowered to stop work if they see an unsafe condition, we protect 
                    what matters most—our people.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Checklist */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Daily Safety Protocols
              </h4>
              <div className="space-y-3">
                {[
                  'Pre-task hazard assessments',
                  'Personal protective equipment checks',
                  'Emergency response drills',
                  'Tool and equipment inspections',
                  'Site safety briefings'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl mb-4">
                Learn More About Our Safety Program
              </button>
              <p className="text-center text-gray-500 text-sm">
                Download our comprehensive safety manual and protocols
              </p>
            </div>
          </div>
        </div>

        {/* Additional Safety Features */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Safety Certifications & Awards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'OSHA Compliance', year: '2023' },
              { name: 'ISO 45001 Certified', year: '2022' },
              { name: 'UAE Safety Excellence', year: '2023' },
              { name: 'Green Building Safety', year: '2024' }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mx-auto mb-4 flex items-center justify-center border-2 border-green-200">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div className="font-bold text-gray-900">{cert.name}</div>
                <div className="text-sm text-gray-500">Awarded {cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}