'use client';

import { Search, ChevronDown, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthModal from './AuthModal';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleAuthClick = (mode: 'login' | 'signup') => {
    router.push('/login');
  };

  const handleProfileClick = () => {
    router.push('/profile');
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/programmers-army-logo.png"
                  alt="Programmers Army Logo"
                  width={180}
                  height={60}
                  className="h-10 lg:h-12 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-emerald-600 font-semibold text-lg transition-colors">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-emerald-600 font-semibold text-lg transition-colors">
                  Domains <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Web Development</DropdownMenuItem>
                  <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                  <DropdownMenuItem>Data Science</DropdownMenuItem>
                  <DropdownMenuItem>Machine Learning</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about" className="text-slate-700 hover:text-emerald-600 font-semibold text-lg transition-colors">
                About us
              </Link>
              <Link href="/contributors" className="text-slate-700 hover:text-emerald-600 font-semibold text-lg transition-colors">
                Contributors
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-emerald-600 font-semibold text-lg transition-colors">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Resources</DropdownMenuItem>
                  <DropdownMenuItem>Community</DropdownMenuItem>
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right side - Login button, User icon and mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Login Button */}
              <Button
                onClick={() => handleAuthClick('login')}
                className="hidden sm:block bg-slate-700 hover:bg-slate-800 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Login/Sign up
              </Button>

              {/* Mobile Login Button */}
              <Button
                onClick={() => handleAuthClick('login')}
                className="sm:hidden bg-slate-700 hover:bg-slate-800 text-white px-3 py-2 rounded-full font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Login
              </Button>

              {/* User Profile Icon */}
              <button
                onClick={handleProfileClick}
                className="bg-emerald-400 hover:bg-emerald-500 p-2 lg:p-3 rounded-full transition-all duration-200 hover:shadow-lg"
              >
                <User className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {/* Search Bar for Mobile */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* Navigation Links */}
                <Link 
                  href="/" 
                  className="text-slate-700 hover:text-emerald-600 font-semibold py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <div className="text-slate-700 font-semibold py-2">Domains</div>
                  <div className="pl-4 space-y-2">
                    <div className="text-slate-600 py-1">Web Development</div>
                    <div className="text-slate-600 py-1">Mobile Development</div>
                    <div className="text-slate-600 py-1">Data Science</div>
                    <div className="text-slate-600 py-1">Machine Learning</div>
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className="text-slate-700 hover:text-emerald-600 font-semibold py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </Link>
                
                <Link 
                  href="/contributors" 
                  className="text-slate-700 hover:text-emerald-600 font-semibold py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contributors
                </Link>

                <div className="space-y-2">
                  <div className="text-slate-700 font-semibold py-2">More</div>
                  <div className="pl-4 space-y-2">
                    <div className="text-slate-600 py-1">Resources</div>
                    <div className="text-slate-600 py-1">Community</div>
                    <div className="text-slate-600 py-1">Blog</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
}