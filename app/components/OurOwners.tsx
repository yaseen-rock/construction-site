// components/OurOwners.tsx
'use client';

import { useState } from 'react';
import { Award, Target, Users, Star, CheckCircle, Phone, Mail } from 'lucide-react';

export default function OurOwners() {
  const [activeOwner, setActiveOwner] = useState('mohammad');

  const owners = [
    {
      id: 'mohammad',
      name: 'Mohammad Arif Ahmad',
      title: 'Founder & CEO',
      image: 'https://i.ibb.co/3mmfZp6y/arif.png',
      bio: 'With over 10 years of experience in sustainable development, Mohammad leads our vision for eco-friendly solutions across the UAE.',
      achievements: [
        '10+ Years in Sustainability',
        'LEED Platinum Certified',
        'UAE Green Building Council Member',
        'Awarded Green Innovator 2023'
      ],
      quote: 'True sustainability comes from understanding both the environment and the communities we serve.'
    }
  ];

  const teamMembers = [
    {
      id: 'swati',
      name: 'Swati Sharma',
      title: 'Chief Accountant',
      image: 'https://thecsrjournal.in/wp-content/uploads/2025/11/69056e84d9dbd-aishwarya-rai-313946686-16x9-1.webp',
      department: 'Finance & Accounts',
      responsibilities: [
        'Financial Planning',
        'Budget Management',
        'Tax Compliance',
        'Financial Reporting'
      ],
      contact: 'swati@globalgreensolutions.ae'
    },
    {
      id: 'reyana',
      name: 'Reyana Fernandez',
      title: 'Receptionist & Office Manager',
      image: 'https://i.ibb.co/jkTKVdDD/9627eb68-3ed0-4202-a1c6-271d9ebe8030.png',
      department: 'Administration',
      responsibilities: [
        'Client Reception',
        'Office Management',
        'Appointment Scheduling',
        'Visitor Coordination'
      ],
      contact: 'reyana@globalgreensolutions.ae'
    },
    {
      id: 'sunny',
      name: 'Sunny Kumar',
      title: 'Site Manager',
      image: 'https://i.ibb.co/bRDgFvbq/sunny.png',
      department: 'Operations',
      responsibilities: [
        'Site Supervision',
        'Safety Compliance',
        'Project Coordination',
        'Team Management'
      ],
      contact: 'sunny@globalgreensolutions.ae'
    }
  ];

  const activeOwnerData = owners.find(o => o.id === activeOwner) || owners[0];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Owners
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As owners, we are more accountable to you and more invested in your success. Across all levels of our organization, our experienced, innovative, solution providers put our culture of ownership to work for you. When you succeed, we succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Owner Profile */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Image Section */}
            <div className="relative h-64 bg-gradient-to-r from-green-600 to-emerald-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <img
                    src={activeOwnerData.image}
                    alt={activeOwnerData.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeOwnerData.name}
                </h3>
                <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
                  {activeOwnerData.title}
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-center">
                {activeOwnerData.bio}
              </p>

              {/* Quote */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-l-4 border-green-500">
                <div className="flex">
                  <div className="mr-3 text-green-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">
                    "{activeOwnerData.quote}"
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  Key Achievements:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeOwnerData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Ownership Philosophy */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                <div className="font-medium text-gray-900 mb-2">Employee Owned</div>
                <p className="text-sm text-gray-600">
                  Every team member has a stake in your success
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
                <div className="font-medium text-gray-900 mb-2">Owner Accessibility</div>
                <p className="text-sm text-gray-600">
                  Direct access to leadership when you need it
                </p>
              </div>
            </div>

            {/* Ownership Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-green-600 mr-2" />
                The Ownership Advantage
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <Star className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Direct Accountability</h4>
                    <p className="text-sm text-gray-600">
                      As owners, we take personal responsibility for every project's success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Faster Decision Making</h4>
                    <p className="text-sm text-gray-600">
                      No corporate bureaucracy means quicker responses and solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Aligned Success</h4>
                    <p className="text-sm text-gray-600">
                      Our success is directly tied to yours—when you win, we win.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Ready to Partner with Owners?</h3>
              <p className="text-green-100 mb-4">
                Experience the difference of working directly with decision-makers.
              </p>
              <button className="w-full bg-white text-green-700 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Contact Mohammad Directly
              </button>
              <p className="text-center text-green-200 text-sm mt-3">
                Average response time: 2 hours
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Section - Updated with your team */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Meet Our Leadership Team
          </h3>
          <div className="text-center text-gray-600 mb-12">
            <p>Our dedicated team of professionals ensures every project's success from concept to completion.</p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Member Image */}
                <div className="relative h-56 bg-gradient-to-r from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {member.title}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {member.department}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-2">
                      {member.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-center space-x-4">
                      <a 
                        href={`mailto:${member.contact}`} 
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </a>
                      <div className="h-4 w-px bg-gray-200"></div>
                      <button className="flex items-center text-sm text-green-600 hover:text-green-800 transition-colors">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Join Our Team Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-green-300">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-green-400 flex items-center justify-center mb-6">
                  <span className="text-3xl text-green-600 font-bold">+</span>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  Join Our Team
                </h4>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented professionals to join our growing team.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}