// app/page.tsx
import Header from "./components/Header";
import BannerCarousel from "./components/BannerCarousel";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhereWeWork from "./components/WeWork";
import WhatWeBuild from "./components/WhatWeBuild";
import OurOwners from "./components/OurOwners";
import SafetySection from "./components/SafetySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BannerCarousel />
      <main>
         {/* <Services /> */}
        <WhatWeBuild/>
       
        
       <WhereWeWork/>
       <SafetySection/>
        
        <OurOwners/>
        {/* Add other sections */}
        {/* <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Go Green?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our sustainable solutions.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
              Get Free Consultation
            </button>
          </div>
        </section> */}
         <Footer/>
      </main>
    </div>
  );
}