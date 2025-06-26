'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import ArticleCard from '@/components/ArticleCard';
import ActivityCard from '@/components/ActivityCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Search, BookOpen, Users, Trophy, TrendingUp, ChevronDown, ChevronRight, Heart } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getClockRotation = () => {
    const hours = currentTime.getHours() % 12;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    return {
      hour: (hours * 30) + (minutes * 0.5), // 30 degrees per hour + minute adjustment
      minute: minutes * 6, // 6 degrees per minute
      second: seconds * 6  // 6 degrees per second
    };
  };

  const rotation = getClockRotation();
  const topics = [
    'Data Structures',
    'Algorithms', 
    'Dynamic Programming',
    'Bit Manipulation',
    'Number Theory'
  ];

  const articles = [
    {
      title: 'Advanced Data Structures and Algorithms',
      description: 'A comprehensive guide to understanding complex data structures and algorithmic patterns',
      rating: 4.8,
      category: 'Algorithms'
    },
    {
      title: 'Binary Search Trees and AVL Trees',
      description: 'Deep dive into self-balancing binary search trees and their practical applications',
      rating: 4.5,
      category: 'Data Structures'
    },
    {
      title: 'Dynamic Programming Mastery',
      description: 'Learn common DP patterns and optimization techniques for competitive programming',
      rating: 4.7,
      category: 'Programming'
    },
    {
      title: 'Graph Theory and Network Analysis',
      description: 'Master graph algorithms, traversal methods, and shortest path solutions',
      rating: 4.4,
      category: 'Algorithms'
    },
    {
      title: 'Hash Tables and Hash Functions',
      description: 'Understanding collision resolution, hash function design, and performance optimization',
      rating: 4.2,
      category: 'Data Structures'
    },
    {
      title: 'Bit Manipulation Techniques',
      description: 'Efficient bit operations and their applications in competitive programming',
      rating: 4.6,
      category: 'Programming'
    }
  ];

  const activities = [
    { type: 'Webinar' as const, title: 'Topic of Webinar/Contest', date: '1st January 2021' },
    { type: 'Contest' as const, title: 'Topic of Webinar/Contest', date: '1st January 2021' },
    { type: 'Webinar' as const, title: 'Topic of Webinar/Contest', date: '1st January 2021' },
    { type: 'Contest' as const, title: 'Topic of Webinar/Contest', date: '1st January 2021' },
    { type: 'Webinar' as const, title: 'Topic of Webinar/Contest', date: '1st January 2021' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[80vh]">
        {/* Emerald Background Shape */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Main emerald background blob */}
            <path
              d="M400,50 C600,20 800,40 1000,80 C1200,120 1400,100 1440,90 L1440,0 L1440,700 C1300,750 1100,780 900,740 C700,700 500,680 300,720 C200,740 100,760 0,780 L0,150 C100,100 250,80 400,50 Z"
              fill="#86efac"
              opacity="0.9"
            />
            {/* Secondary emerald layer */}
            <path
              d="M500,100 C700,70 900,90 1100,130 C1300,170 1440,150 1440,140 L1440,0 L1440,750 C1350,800 1150,830 950,790 C750,750 550,730 350,770 C250,790 150,810 50,830 L50,200 C150,150 300,130 500,100 Z"
              fill="#6ee7b7"
              opacity="0.7"
            />
            {/* Tertiary emerald layer */}
            <path
              d="M600,150 C800,120 1000,140 1200,180 C1400,220 1440,200 1440,190 L1440,0 L1440,800 C1400,800 1200,800 1000,800 C800,800 600,800 400,800 C300,800 200,800 100,800 L100,250 C200,200 400,180 600,150 Z"
              fill="#a7f3d0"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-800 mb-4 font-medium">Welcome To</h2>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Programmers Army
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Write Something nice here<br />
                  using these two lines
                </p>
              </div>
              
              {/* Search bar */}
              <div className="flex max-w-2xl">
                <Input
                  type="text"
                  placeholder="Search for programming resources"
                  className="flex-1 rounded-l-full border-2 border-slate-700 border-r-0 focus:ring-2 focus:ring-slate-700 focus:border-slate-700 px-6 py-4 text-lg h-14"
                />
                <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-r-full rounded-l-none text-lg font-medium h-14">
                  Search
                </Button>
              </div>
            </div>
            
            {/* Right side - Person with laptop illustration */}
            <div className="relative flex justify-center items-center">
              {/* Person illustration */}
              <div className="relative z-20">
                {/* Person with laptop */}
                <div className="relative">
                  {/* Body */}
                  <div className="w-40 h-48 bg-slate-700 rounded-t-3xl relative mx-auto">
                    {/* Laptop */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-900 rounded-lg shadow-lg">
                      <div className="w-30 h-18 bg-gray-200 rounded-sm absolute top-1 left-1 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Head */}
                  <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-pink-300 rounded-full"></div>
                  
                  {/* Hair */}
                  <div className="absolute -top-30 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-slate-800 rounded-t-full"></div>
                  
                  {/* Arms */}
                  <div className="absolute top-8 -left-10 w-10 h-24 bg-pink-300 rounded-full transform rotate-15"></div>
                  <div className="absolute top-8 -right-10 w-10 h-24 bg-pink-300 rounded-full transform -rotate-15"></div>
                  
                  {/* Legs */}
                  <div className="absolute -bottom-16 left-6 w-12 h-28 bg-slate-800 rounded-full"></div>
                  <div className="absolute -bottom-16 right-6 w-12 h-28 bg-slate-800 rounded-full"></div>
                  
                  {/* Shadow */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-gray-400 rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Floating clock */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center shadow-xl z-30 border-4 border-orange-400">
                <div className="w-18 h-18 bg-orange-400 rounded-full relative">
                  {/* Clock hands */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-1 h-7 bg-slate-800 transform -translate-x-1/2 -translate-y-full origin-bottom transition-transform duration-1000"
                    style={{ transform: `translate(-50%, -100%) rotate(${rotation.hour}deg)` }}
                  ></div>
                  <div 
                    className="absolute top-1/2 left-1/2 w-1 h-5 bg-slate-800 transform -translate-x-1/2 -translate-y-full origin-bottom transition-transform duration-1000"
                    style={{ transform: `translate(-50%, -100%) rotate(${rotation.minute}deg)` }}
                  ></div>
                  <div 
                    className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-red-600 transform -translate-x-1/2 -translate-y-full origin-bottom transition-transform duration-75"
                    style={{ transform: `translate(-50%, -100%) rotate(${rotation.second}deg)` }}
                  ></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-slate-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  {/* Clock numbers */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-800">12</div>
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-slate-800">3</div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-800">6</div>
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-slate-800">9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Feature Name"
              description="Some Features Of Programmers Army"
              iconColor="bg-yellow-300"
            />
            <FeatureCard
              title="Feature Name"
              description="Some Features Of Programmers Army"
              iconColor="bg-yellow-300"
            />
            <FeatureCard
              title="Feature Name"
              description="Some Features Of Programmers Army"
              iconColor="bg-yellow-300"
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3">
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-700 rounded-full opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        index === 1 ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Heart className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    rating={article.rating}
                    category={article.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Activities</h2>
            <Button className="bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="flex space-x-8 overflow-x-auto pb-4">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                type={activity.type}
                title={activity.title}
                date={activity.date}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}