'use client';

import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

export default function AuthModal({ isOpen, onClose, mode, onModeChange }: AuthModalProps) {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-full p-0 overflow-hidden bg-gray-100 border-0">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {mode === 'login' ? 'Welcome back' : 'Join us now'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="min-h-screen relative">
          {/* Header */}
          <header className="bg-white shadow-sm border-b relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="bg-emerald-400 rounded-lg p-2 mr-3 relative">
                    <span className="text-white font-bold text-sm">PA</span>
                    <div className="absolute -top-1 -right-1 bg-emerald-300 rounded-full px-1.5 py-0.5">
                      <span className="text-xs text-emerald-800 font-semibold">PROGRAMMERS</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-emerald-600 rounded-full px-1.5 py-0.5">
                      <span className="text-xs text-white font-semibold">ARMY</span>
                    </div>
                  </div>
                </div>

                {/* Search and Navigation */}
                <div className="flex items-center space-x-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔍
                    </div>
                  </div>
                  
                  <nav className="flex items-center space-x-6">
                    <a href="#" className="text-gray-900 hover:text-emerald-600 font-medium">Home</a>
                    <div className="flex items-center">
                      <span className="text-gray-900 hover:text-emerald-600 font-medium">Domains</span>
                      <span className="ml-1">▼</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-900 hover:text-emerald-600 font-medium">More</span>
                      <span className="ml-1">▼</span>
                    </div>
                  </nav>
                  
                  <div className="bg-slate-700 p-2 rounded-full">
                    <div className="w-6 h-6 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>

                {/* Close Button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Action Buttons */}
          <div className="absolute top-20 left-8 z-10 space-y-3">
            <div className="bg-indigo-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">💬</span>
              </div>
              <span className="text-sm font-medium">Join our Discord Community!!</span>
            </div>
            <div className="bg-emerald-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
              <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">PA</span>
              </div>
              <span className="text-sm font-medium">Subscribe us for regular updates</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex min-h-[calc(100vh-64px)] relative">
            {/* Left Side - Welcome Text and Illustration */}
            <div className="flex-1 flex flex-col justify-center items-center relative bg-gray-100 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0">
                {/* Tree branches */}
                <div className="absolute top-1/4 left-1/4 w-32 h-48 opacity-20">
                  <div className="w-1 h-24 bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-16 h-1 bg-gray-300 absolute top-8 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                  <div className="w-12 h-1 bg-gray-300 absolute top-12 left-1/2 transform -translate-x-1/2 -rotate-45"></div>
                  <div className="w-20 h-1 bg-gray-300 absolute top-16 left-1/2 transform -translate-x-1/2 rotate-12"></div>
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-36 opacity-20">
                  <div className="w-1 h-18 bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-12 h-1 bg-gray-300 absolute top-6 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                  <div className="w-8 h-1 bg-gray-300 absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-45"></div>
                </div>
              </div>

              <div className="relative z-10 text-center mb-12">
                <h1 className="text-6xl font-bold text-slate-800 mb-4">
                  {mode === 'signup' ? 'Join us' : 'Welcome'}<br />
                  {mode === 'signup' ? 'now!!!' : 'back!!!'}
                </h1>
              </div>

              {/* Illustration */}
              <div className="relative">
                {/* Person sitting with laptop */}
                <div className="relative">
                  {/* Shadow/ground */}
                  <div className="w-48 h-8 bg-gray-300 rounded-full opacity-50 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
                  
                  {/* Person */}
                  <div className="relative">
                    {/* Body */}
                    <div className="w-16 h-20 bg-slate-700 rounded-t-3xl absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Head */}
                    <div className="w-12 h-12 bg-pink-300 rounded-full absolute bottom-24 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Hair */}
                    <div className="w-10 h-6 bg-slate-800 rounded-t-full absolute bottom-30 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Laptop */}
                    <div className="w-12 h-8 bg-slate-600 rounded absolute bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-6 bg-emerald-300 rounded-sm absolute top-1 left-1"></div>
                    </div>
                    
                    {/* Arms */}
                    <div className="w-4 h-12 bg-pink-300 rounded absolute bottom-16 left-8"></div>
                    <div className="w-4 h-12 bg-pink-300 rounded absolute bottom-16 right-8"></div>
                    
                    {/* Legs */}
                    <div className="w-6 h-16 bg-slate-800 rounded absolute bottom-0 left-6"></div>
                    <div className="w-6 h-16 bg-slate-800 rounded absolute bottom-0 right-6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center relative">
              {/* Background with decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800">
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-16 left-8 w-16 h-16 bg-emerald-300 rounded-full opacity-40"></div>
              </div>

              {/* Person illustration on form */}
              <div className="absolute top-8 right-8 z-10">
                <div className="relative">
                  {/* Person with laptop */}
                  <div className="w-20 h-24 relative">
                    {/* Body */}
                    <div className="w-12 h-16 bg-emerald-400 rounded-t-2xl absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Head */}
                    <div className="w-8 h-8 bg-pink-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Hair */}
                    <div className="w-6 h-4 bg-slate-800 rounded-t-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Laptop */}
                    <div className="w-8 h-6 bg-slate-700 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-4 bg-white rounded-sm absolute top-1 left-1"></div>
                    </div>
                    
                    {/* Arms */}
                    <div className="w-3 h-8 bg-pink-300 rounded absolute bottom-8 left-2"></div>
                    <div className="w-3 h-8 bg-pink-300 rounded absolute bottom-8 right-2"></div>
                    
                    {/* Legs */}
                    <div className="w-4 h-12 bg-slate-800 rounded absolute -bottom-8 left-1"></div>
                    <div className="w-4 h-12 bg-slate-800 rounded absolute -bottom-8 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
                        👤
                      </div>
                      <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      />
                    </div>
                  )}
                  
                  {mode === 'signup' && (
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
                        👤
                      </div>
                      <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
                      ✉️
                    </div>
                    <Input
                      type="email"
                      placeholder={mode === 'login' ? 'User name/Email' : 'Email'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
                      🔒
                    </div>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-12 py-3 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600 hover:text-slate-800"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {mode === 'login' && (
                    <div className="text-right">
                      <button type="button" className="text-sm text-slate-600 hover:text-slate-800">
                        Forgot your password?
                      </button>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 rounded-lg font-medium"
                  >
                    {mode === 'login' ? 'Sign In' : 'Sign up'}
                  </Button>

                  <div className="text-center text-sm text-slate-600">
                    or sign up using
                  </div>

                  {/* Social Login Buttons */}
                  <div className="flex justify-center space-x-4">
                    <button type="button" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600">
                      G
                    </button>
                    <button type="button" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900">
                      <span className="text-lg">⚡</span>
                    </button>
                    <button type="button" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
                      f
                    </button>
                    <button type="button" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
                      in
                    </button>
                  </div>
                </form>

                {/* Mode Switch */}
                <div className="text-center mt-6">
                  <button 
                    onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
                    className="text-slate-600 hover:text-slate-800 text-sm"
                  >
                    {mode === 'login' 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-white py-4">
            <div className="text-center">
              <div className="flex justify-center space-x-6 text-gray-400 mb-2">
                <span className="text-2xl">📘</span>
                <span className="text-2xl">🐙</span>
                <span className="text-2xl">📱</span>
                <span className="text-2xl">💼</span>
                <span className="text-2xl">📧</span>
                <span className="text-2xl">🐦</span>
                <span className="text-2xl">📷</span>
              </div>
              <p className="text-xs text-gray-400">
                Copyright © Programmers Army All rights reserved 2020
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}