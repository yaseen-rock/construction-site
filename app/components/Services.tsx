// components/Services.tsx
import { Leaf, Sun, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Sustainability Consulting",
      description: "Expert guidance for implementing sustainable practices in your business.",
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Green Energy Solutions",
      description: "Renewable energy implementation and optimization strategies.",
      icon: <Sun className="h-10 w-10 text-green-600" />,
      color: "bg-emerald-100"
    },
    {
      title: "Environmental Audits",
      description: "Comprehensive assessments of your environmental impact and compliance.",
      icon: <ClipboardCheck className="h-10 w-10 text-green-600" />,
      color: "bg-teal-100"
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Icon with background */}
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-green-600 font-medium hover:text-green-700">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}