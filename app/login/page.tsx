'use client';

import { useState } from 'react';
import { Eye, EyeOff, MessageCircle, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Login() {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(mode, { name, username, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Action Buttons - Floating */}
      <div className="hidden lg:block fixed top-24 left-8 z-20 space-y-4">
        <div className="bg-indigo-500 text-white px-4 py-3 rounded-2xl flex items-center space-x-3 shadow-xl hover:bg-indigo-600 transition-all duration-300 cursor-pointer hover:scale-105">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium">Join our Discord Community!!</span>
        </div>
        <div className="bg-emerald-500 text-white px-4 py-3 rounded-2xl flex items-center space-x-3 shadow-xl hover:bg-emerald-600 transition-all duration-300 cursor-pointer hover:scale-105">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium">Subscribe us for regular updates</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] relative">
        {/* Left Side - Welcome Text and Illustration */}
        <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden py-12 lg:py-0">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            {/* Geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 bg-indigo-200 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-25"></div>
            
            {/* Abstract tree-like SVG */}
            <svg className="absolute bottom-20 left-1/4 w-40 h-60 opacity-10" viewBox="0 0 100 150" fill="none">
              <path d="M50 140 L50 20" stroke="#64748b" strokeWidth="3"/>
              <path d="M30 40 L70 40" stroke="#64748b" strokeWidth="2"/>
              <path d="M35 60 L65 60" stroke="#64748b" strokeWidth="2"/>
              <path d="M25 80 L75 80" stroke="#64748b" strokeWidth="2"/>
              <circle cx="50" cy="20" r="15" fill="#10b981" opacity="0.3"/>
            </svg>
          </div>

          <div className="relative z-10 text-center mb-12 px-6">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
              {mode === 'signup' ? 'Join us' : 'Welcome'}<br />
              <span className="text-emerald-500">{mode === 'signup' ? 'now!!!' : 'back!!!'}</span>
            </h1>
          </div>

          {/* Modern illustration */}
          <div className="relative z-10">
            <div className="relative">
              {/* Shadow */}
              <div className="w-64 h-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30 absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Person with modern styling */}
              <div className="relative">
                {/* Body */}
                <div className="w-20 h-28 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-t-3xl absolute bottom-8 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                
                {/* Head */}
                <div className="w-16 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute bottom-32 left-1/2 transform -translate-x-1/2 shadow-md"></div>
                
                {/* Hair */}
                <div className="w-14 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-full absolute bottom-36 left-1/2 transform -translate-x-1/2"></div>
                
                {/* Laptop */}
                <div className="w-18 h-12 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg absolute bottom-16 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <div className="w-16 h-10 bg-gradient-to-b from-white to-gray-100 rounded-md absolute top-1 left-1 flex items-center justify-center shadow-inner">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Arms */}
                <div className="w-5 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute bottom-20 left-4 transform rotate-12 shadow-md"></div>
                <div className="w-5 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute bottom-20 right-4 transform -rotate-12 shadow-md"></div>
                
                {/* Legs */}
                <div className="w-8 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full absolute bottom-0 left-2 shadow-lg"></div>
                <div className="w-8 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full absolute bottom-0 right-2 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Modern Form */}
        <div className="flex-1 flex items-center justify-center relative py-12 lg:py-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-emerald-400 rounded-full opacity-30 blur-lg"></div>
            <div className="absolute bottom-20 left-12 w-16 h-16 bg-emerald-300 rounded-full opacity-25 blur-md"></div>
            <div className="absolute top-1/3 -right-8 w-12 h-12 bg-emerald-500 rounded-full opacity-20 blur-sm"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </div>

          {/* Floating person illustration */}
          <div className="hidden lg:block absolute top-8 right-8 z-10">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="w-28 h-32 relative">
                {/* Body */}
                <div className="w-18 h-22 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-t-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-xl"></div>
                
                {/* Head */}
                <div className="w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                
                {/* Hair */}
                <div className="w-10 h-6 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                
                {/* Laptop */}
                <div className="w-12 h-8 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg absolute bottom-8 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <div className="w-10 h-6 bg-gradient-to-b from-white to-gray-100 rounded-md absolute top-1 left-1 shadow-inner">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full absolute top-1 left-1 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Arms */}
                <div className="w-4 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute bottom-14 left-1 transform rotate-12 shadow-md"></div>
                <div className="w-4 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full absolute bottom-14 right-1 transform -rotate-12 shadow-md"></div>
                
                {/* Legs */}
                <div className="w-6 h-18 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full absolute -bottom-14 left-1 shadow-lg"></div>
                <div className="w-6 h-18 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full absolute -bottom-14 right-1 shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Modern Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-md w-full mx-6 relative z-10 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-slate-600 text-sm">
                {mode === 'signup' ? 'Join our community today' : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {mode === 'signup' && (
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
              )}
              
              {mode === 'signup' && (
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
              )}

              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <Input
                  type="email"
                  placeholder={mode === 'login' ? 'Email or Username' : 'Email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-14 py-4 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {mode === 'login' && (
                <div className="text-right">
                  <button type="button" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    Forgot your password?
                  </button>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                {mode === 'login' ? 'Sign In' : 'Sign Up'}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">or sign up using</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-center space-x-4">
                {/* Google */}
                <button type="button" className="group w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-red-300 hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                
                {/* GitHub */}
                <button type="button" className="group w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="#181717" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                
                {/* Facebook */}
                <button type="button" className="group w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                
                {/* LinkedIn */}
                <button type="button" className="group w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="#0A66C2" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </form>

            {/* Mode Switch */}
            <div className="text-center mt-8">
              <span className="text-sm text-slate-600">
                {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              </span>
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="ml-2 text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors hover:underline"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}