'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Mail, MapPin, Calendar, Github, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Profile() {
  const [expandedSections, setExpandedSections] = useState({
    bookmarks: true,
    todoList: true,
    articles: true,
    videos: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const bookmarkedArticles = [
    {
      title: 'Advanced React Patterns and Best Practices',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '12 min read',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'Building Scalable Node.js Applications',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['Node.js', 'Backend', 'Architecture']
    },
    {
      title: 'TypeScript: From Beginner to Expert',
      author: 'Emily Johnson',
      date: '2024-01-08',
      readTime: '15 min read',
      tags: ['TypeScript', 'JavaScript', 'Programming']
    },
    {
      title: 'Modern CSS Grid and Flexbox Techniques',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['CSS', 'Frontend', 'Layout']
    },
    {
      title: 'Database Design Fundamentals',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '14 min read',
      tags: ['Database', 'SQL', 'Design']
    },
    {
      title: 'API Security and Authentication',
      author: 'James Thompson',
      date: '2023-12-28',
      readTime: '11 min read',
      tags: ['Security', 'API', 'Authentication']
    }
  ];

  const todoArticles = [
    {
      title: 'Understanding Microservices Architecture',
      author: 'Robert Martinez',
      date: '2024-01-20',
      readTime: '18 min read',
      tags: ['Microservices', 'Architecture', 'Backend']
    },
    {
      title: 'Vue.js 3 Composition API Deep Dive',
      author: 'Anna Kowalski',
      date: '2024-01-18',
      readTime: '13 min read',
      tags: ['Vue.js', 'JavaScript', 'Frontend']
    },
    {
      title: 'AWS Cloud Computing Essentials',
      author: 'Mark Stevens',
      date: '2024-01-16',
      readTime: '16 min read',
      tags: ['AWS', 'Cloud', 'DevOps']
    },
    {
      title: 'Testing Strategies for Frontend Apps',
      author: 'Jennifer Lee',
      date: '2024-01-14',
      readTime: '11 min read',
      tags: ['Testing', 'Frontend', 'Quality']
    },
    {
      title: 'Performance Optimization Techniques',
      author: 'Carlos Mendez',
      date: '2024-01-12',
      readTime: '14 min read',
      tags: ['Performance', 'Optimization', 'Web']
    },
    {
      title: 'Blockchain Development Basics',
      author: 'Priya Sharma',
      date: '2024-01-09',
      readTime: '20 min read',
      tags: ['Blockchain', 'Cryptocurrency', 'Development']
    },
    {
      title: 'DevOps Pipeline Implementation',
      author: 'Thomas Anderson',
      date: '2024-01-07',
      readTime: '17 min read',
      tags: ['DevOps', 'CI/CD', 'Automation']
    },
    {
      title: 'Mobile App Development with React Native',
      author: 'Sophie Turner',
      date: '2024-01-04',
      readTime: '19 min read',
      tags: ['React Native', 'Mobile', 'Cross-platform']
    },
    {
      title: 'Data Structures and Algorithms',
      author: 'Kevin Zhang',
      date: '2024-01-02',
      readTime: '22 min read',
      tags: ['Algorithms', 'Data Structures', 'Computer Science']
    }
  ];

  const contributedArticles = [
    {
      title: 'Getting Started with Next.js 14',
      author: 'Alex Johnson',
      date: '2024-01-22',
      readTime: '9 min read',
      tags: ['Next.js', 'React', 'SSR'],
      views: '2.1K',
      likes: 156
    },
    {
      title: 'Building RESTful APIs with Express',
      author: 'Alex Johnson',
      date: '2024-01-19',
      readTime: '12 min read',
      tags: ['Express', 'Node.js', 'API'],
      views: '1.8K',
      likes: 142
    },
    {
      title: 'CSS-in-JS: Styled Components Guide',
      author: 'Alex Johnson',
      date: '2024-01-17',
      readTime: '10 min read',
      tags: ['CSS', 'Styled Components', 'React'],
      views: '1.5K',
      likes: 98
    },
    {
      title: 'State Management with Redux Toolkit',
      author: 'Alex Johnson',
      date: '2024-01-13',
      readTime: '15 min read',
      tags: ['Redux', 'State Management', 'React'],
      views: '2.7K',
      likes: 203
    },
    {
      title: 'Authentication in Modern Web Apps',
      author: 'Alex Johnson',
      date: '2024-01-11',
      readTime: '13 min read',
      tags: ['Authentication', 'Security', 'JWT'],
      views: '3.2K',
      likes: 267
    },
    {
      title: 'Optimizing React Performance',
      author: 'Alex Johnson',
      date: '2024-01-06',
      readTime: '11 min read',
      tags: ['React', 'Performance', 'Optimization'],
      views: '2.9K',
      likes: 234
    },
    {
      title: 'Introduction to Web Accessibility',
      author: 'Alex Johnson',
      date: '2024-01-01',
      readTime: '8 min read',
      tags: ['Accessibility', 'A11y', 'Web Standards'],
      views: '1.3K',
      likes: 89
    },
    {
      title: 'Git Workflow Best Practices',
      author: 'Alex Johnson',
      date: '2023-12-30',
      readTime: '7 min read',
      tags: ['Git', 'Version Control', 'Workflow'],
      views: '1.9K',
      likes: 167
    },
    {
      title: 'Responsive Design Principles',
      author: 'Alex Johnson',
      date: '2023-12-25',
      readTime: '9 min read',
      tags: ['CSS', 'Responsive Design', 'Mobile'],
      views: '2.4K',
      likes: 178
    }
  ];

  const videos = [
    {
      title: 'React Hooks Tutorial Series',
      thumbnail: '/video-thumbnail-1.svg',
      duration: '45:30',
      views: '12K'
    },
    {
      title: 'Full-Stack Development Bootcamp',
      thumbnail: '/video-thumbnail-2.svg',
      duration: '2:15:45',
      views: '25K'
    },
    {
      title: 'JavaScript ES6+ Features Explained',
      thumbnail: '/video-thumbnail-3.svg',
      duration: '1:28:15',
      views: '18K'
    }
  ];

  const badges = [
    { color: 'bg-emerald-500', earned: true, name: 'First Article', description: 'Published your first article' },
    { color: 'bg-blue-500', earned: true, name: 'Code Contributor', description: 'Contributed to 5+ projects' },
    { color: 'bg-purple-500', earned: true, name: 'Community Helper', description: 'Helped 50+ developers' },
    { color: 'bg-yellow-500', earned: false, name: 'Expert Writer', description: 'Published 25+ articles' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Profile Picture and Basic Info */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">AJ</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Alex Johnson</h2>
                <p className="text-gray-600 text-sm">@alexjohnson_dev</p>
              </div>

              {/* PA Badge and Social Links */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                  PA Badge
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Senior Full-Stack Developer with 6+ years of experience in React, Node.js, and cloud technologies. 
                  Passionate about clean code, mentoring junior developers, and building products that make a difference. 
                  Currently working at TechCorp as Lead Frontend Engineer.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Seattle, WA</span>
                  </div>
                  <div>University of Washington</div>
                  <div>Class of 2018</div>
                </div>
              </div>

              {/* Contributions */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Contributions</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Articles</span>
                    <span className="font-semibold text-emerald-600">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Videos</span>
                    <span className="font-semibold text-emerald-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Bookmarks</span>
                    <span className="font-semibold text-emerald-600">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Followers</span>
                    <span className="font-semibold text-emerald-600">1.2k</span>
                  </div>
                </div>
              </div>

              {/* Badges Earned */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Badges Earned</h3>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                        badge.earned 
                          ? `${badge.color} border-transparent text-white shadow-md` 
                          : 'bg-gray-100 border-gray-200 text-gray-400'
                      }`}
                      title={badge.description}
                    >
                      <div className="text-center">
                        <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                          badge.earned ? 'bg-white bg-opacity-20' : 'bg-gray-300'
                        }`}>
                          {badge.earned ? <span className="text-white text-sm">✓</span> : <span className="text-gray-500 text-sm">?</span>}
                        </div>
                        <div className="text-xs font-semibold">{badge.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bookmarked Articles */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Bookmarked Articles</h2>
                    <p className="text-gray-600 text-sm">Following are the articles bookmarked by <span className="font-semibold">Actual Name</span></p>
                  </div>
                  <button
                    onClick={() => toggleSection('bookmarks')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {expandedSections.bookmarks ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                  </button>
                </div>
              </div>
              {expandedSections.bookmarks && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bookmarkedArticles.map((article, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">by {article.author}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{article.readTime}</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Your To-Do List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Your To-Do list</h2>
                    <p className="text-gray-600 text-sm">Following are the articles in the to-do list of <span className="font-semibold">Actual Name</span></p>
                  </div>
                  <button
                    onClick={() => toggleSection('todoList')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {expandedSections.todoList ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                  </button>
                </div>
              </div>
              {expandedSections.todoList && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {todoArticles.map((article, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">by {article.author}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{article.readTime}</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Articles */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Articles</h2>
                    <p className="text-gray-600 text-sm">Following are the articles contributed by <span className="font-semibold">Actual Name</span></p>
                  </div>
                  <button
                    onClick={() => toggleSection('articles')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {expandedSections.articles ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                  </button>
                </div>
              </div>
              {expandedSections.articles && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contributedArticles.map((article, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">by {article.author}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                          <span>{article.readTime}</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                          <span>{article.views} views</span>
                          <span>❤️ {article.likes}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Videos */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Videos</h2>
                    <p className="text-gray-600 text-sm">Following are the videos contributed by <span className="font-semibold">Actual Name</span></p>
                  </div>
                  <button
                    onClick={() => toggleSection('videos')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {expandedSections.videos ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                  </button>
                </div>
              </div>
              {expandedSections.videos && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {videos.map((video, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-emerald-200 rounded-lg overflow-hidden hover:border-emerald-300 transition-all cursor-pointer shadow-sm group"
                      >
                        <div className="relative">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{video.title}</h3>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{video.duration}</span>
                            <span>{video.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}