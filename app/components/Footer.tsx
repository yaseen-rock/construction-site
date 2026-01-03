// components/Footer.tsx
import { 
  Phone, Mail, MapPin, Facebook, Twitter, 
  Linkedin, Instagram, Globe, Clock 
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
             
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Global Green Solutions
                </h2>
                <p className="text-green-400 text-sm font-medium">
                  Sustainability Consultants
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pioneering sustainable solutions for a greener future. We provide 
              expert environmental consulting and green construction services 
              across the UAE and beyond.
            </p>
            
            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/sustainability" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Sustainability Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/green-energy" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Green Energy Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/audits" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Environmental Audits
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Green Construction
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Sustainability Training
                </Link>
              </li>
              <li>
                <Link href="/services/certification" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  LEED Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Headquarters</h4>
                  <p className="text-gray-300">
                    Business Bay, Dubai, UAE<br />
                    PO Box 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-300">
                    +971 4 123 4567<br />
                    +971 50 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-300">
                    info@globalgreensolutions.ae<br />
                    support@globalgreensolutions.ae
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-300">
                    Sun - Thu: 8:00 AM - 6:00 PM<br />
                    Fri: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest in sustainability and green solutions.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <p className="text-center text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} Global Green Solutions Consultant. All rights reserved.
              </p>
            </div>

            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Certified:</span>
              <div className="flex items-center space-x-1">
                <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs font-medium">LEED</span>
                <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs font-medium">ISO 14001</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium">Green Mark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}