import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Shikkha Logo" className="h-10 w-10 brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight text-white">Shikkha</span>
            </Link>
            <p className="text-sm text-slate-400">
              Empowering the next generation through quality education and community support. Join us in making a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Updates</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/donate" className="hover:text-white transition-colors">Donate Now</Link></li>
              <li><Link to="/sponsor" className="hover:text-white transition-colors">Sponsor a Child</Link></li>
              <li><Link to="/volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>123 Education Way, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>info@shikkha.org</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shikkha Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
