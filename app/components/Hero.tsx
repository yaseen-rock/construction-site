// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Global Green Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Leading consultants in sustainable solutions and environmental innovation.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}