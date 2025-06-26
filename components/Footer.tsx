'use client';

import { Github, Linkedin, Twitter, Instagram, Youtube, Mail, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      name: 'Facebook',
      hoverBg: 'hover:bg-blue-600',
      borderColor: 'border-blue-600',
      iconColor: 'text-blue-600'
    },
    { 
      icon: Github, 
      href: '#', 
      name: 'GitHub',
      hoverBg: 'hover:bg-gray-900',
      borderColor: 'border-gray-700',
      iconColor: 'text-gray-700'
    },
    { 
      icon: Instagram, 
      href: '#', 
      name: 'Instagram',
      hoverBg: 'hover:bg-pink-600',
      borderColor: 'border-pink-600',
      iconColor: 'text-pink-600'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      name: 'LinkedIn',
      hoverBg: 'hover:bg-blue-700',
      borderColor: 'border-blue-700',
      iconColor: 'text-blue-700'
    },
    { 
      icon: Mail, 
      href: '#', 
      name: 'Email',
      hoverBg: 'hover:bg-red-600',
      borderColor: 'border-red-600',
      iconColor: 'text-red-600'
    },
    { 
      icon: Twitter, 
      href: '#', 
      name: 'Twitter',
      hoverBg: 'hover:bg-blue-400',
      borderColor: 'border-blue-400',
      iconColor: 'text-blue-400'
    },
    { 
      icon: Youtube, 
      href: '#', 
      name: 'YouTube',
      hoverBg: 'hover:bg-red-600',
      borderColor: 'border-red-600',
      iconColor: 'text-red-600'
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-start mb-8">
          <Image
          src="/programmers-army-logo.png"
          alt="Programmers Army Logo"
          width={120}
          height={40}
          className="h-8 w-auto object-contain filter brightness-0 invert"
        />
        </div>
        
        <div className="text-center">
          {/* Social Media Links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`
                    w-12 h-12 min-w-[3rem] min-h-[3rem] 
                    rounded-full border-2 ${social.borderColor} 
                    flex items-center justify-center flex-shrink-0
                    transition-all duration-300 ease-in-out
                    ${social.hoverBg} hover:text-white hover:scale-110 hover:shadow-lg
                    ${social.iconColor} hover:border-transparent
                    group relative overflow-hidden
                    aspect-square
                  `}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {/* Background fill effect */}
                  <div className={`
                    absolute inset-0 rounded-full transition-transform duration-300 ease-in-out
                    transform scale-0 group-hover:scale-100 origin-center
                    ${social.hoverBg.replace('hover:', '')}
                  `}></div>
                  
                  {/* Icon */}
                  <social.icon className="w-5 h-5 transition-colors duration-300 relative z-10 group-hover:text-white flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 text-left md:text-left">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-slate-700 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for the latest updates</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none border-0 text-gray-900 focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-6">
            <p className="text-gray-400 text-sm">
              Copyright © Programmers Army All rights reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}