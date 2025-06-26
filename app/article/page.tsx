'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Plus, Bookmark, Star, ThumbsUp, ThumbsDown, Share2, ChevronLeft, Clock, User, Calendar, Eye, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Article() {
  const [activeTab, setActiveTab] = useState<'Article' | 'Related Videos' | 'Discuss'>('Article');
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get article data from URL params or use defaults
  const articleData = {
    title: searchParams.get('title') || 'Advanced Data Structures and Algorithms',
    description: searchParams.get('description') || 'A comprehensive guide to understanding complex data structures and algorithmic patterns',
    category: searchParams.get('category') || 'Programming',
    rating: parseFloat(searchParams.get('rating') || '4.3'),
    author: 'Dr. Sarah Johnson',
    publishDate: '15th December 2024',
    readTime: '12 min read',
    views: '2.4k views'
  };

  const topics = [
    'Introduction to Trees',
    'Binary Search Trees',
    'Tree Traversal Methods', 
    'Insertion & Deletion',
    'Time Complexity Analysis',
    'Real-world Applications'
  ];

  const comments = [
    {
      username: 'CodeMaster_2024',
      timestamp: '15/12/2024 14:32:15',
      content: 'Excellent explanation of binary search trees! The visual diagram really helped me understand the parent-child relationships. I\'ve been struggling with tree traversal algorithms, but this article made it click. The code examples are clean and well-commented. Would love to see a follow-up on balancing algorithms like AVL trees.',
      upvotes: 23,
      downvotes: 1
    },
    {
      username: 'DataStructureNinja',
      timestamp: '15/12/2024 11:45:22',
      content: 'Great article! One small suggestion - it would be helpful to include time complexity analysis for each operation. Also, the recursive implementation is elegant, but showing an iterative version might be beneficial for beginners who are still getting comfortable with recursion.',
      upvotes: 18,
      downvotes: 0
    },
    {
      username: 'AlgorithmEnthusiast',
      timestamp: '14/12/2024 16:20:08',
      content: 'This is exactly what I needed for my upcoming technical interview! The step-by-step breakdown of the insertion process is fantastic. @Dr. Sarah Johnson, could you create a similar guide for deletion operations? That\'s where I always get confused with the three different cases.',
      upvotes: 31,
      downvotes: 2
    },
    {
      username: 'StudentDeveloper',
      timestamp: '14/12/2024 09:15:44',
      content: 'As a computer science student, I really appreciate how you explained the concepts from basics to advanced. The best practices section is gold! I\'ve bookmarked this for my data structures exam. The visual tree diagram makes so much more sense than the textbook explanations.',
      upvotes: 15,
      downvotes: 0
    },
    {
      username: 'SeniorDev_JS',
      timestamp: '13/12/2024 20:42:33',
      content: 'Solid article with practical examples. In production, I\'ve found that understanding when NOT to use certain data structures is just as important. Maybe a section on trade-offs and alternative approaches would be valuable. Overall, great work on making complex topics accessible!',
      upvotes: 27,
      downvotes: 1
    }
  ];

  const videos = [
    {
      title: 'Binary Search Trees: Complete Implementation Guide',
      description: 'Learn how to implement BST from scratch with insertion, deletion, and traversal methods. Perfect for coding interviews!',
      creator: 'Alex Chen',
      channel: 'By ProgrammersArmy'
    },
    {
      title: 'Advanced Tree Algorithms: AVL and Red-Black Trees',
      description: 'Deep dive into self-balancing trees and understand when to use each type in real-world applications.',
      creator: 'Maria Rodriguez',
      channel: 'By ProgrammersArmy'
    },
    {
      title: 'Graph Algorithms Masterclass: BFS, DFS & Dijkstra',
      description: 'Master the most important graph algorithms with visual explanations and practical coding examples.',
      creator: 'David Kim',
      channel: 'By ProgrammersArmy'
    }
  ];

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Back Arrow */}
              <div className="p-4 border-b">
                <button 
                  onClick={handleBackClick}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Back</span>
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-emerald-50"
                  />
                </div>
              </div>

              {/* Topics */}
              <div className="p-4">
                <div className="space-y-2">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-colors text-sm font-medium ${
                        index === 1 ? 'bg-emerald-100 text-emerald-800' : 'text-slate-700 hover:bg-gray-100'
                      }`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add this to your to-do list
                </Button>
                <Button 
                  variant="outline" 
                  className={`w-full justify-start text-sm transition-colors ${
                    isBookmarked 
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-300' 
                      : 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'
                  }`}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark this article'}
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Rate this article</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-6 h-6 cursor-pointer transition-colors ${
                          star <= rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 hover:text-yellow-400'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-xs text-emerald-600 mt-1 font-medium">
                      You rated this {rating} star{rating !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-t-2xl shadow-lg">
              <div className="flex border-b">
                {(['Article', 'Related Videos', 'Discuss'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-semibold transition-colors relative ${
                      activeTab === tab
                        ? 'bg-slate-700 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              {activeTab === 'Article' && (
                <div>
                  {/* Article Header */}
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        <Tag className="w-3 h-3 mr-1" />
                        {articleData.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-emerald-100 text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{articleData.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{articleData.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{articleData.title}</h1>
                    <p className="text-emerald-100 text-lg mb-6">{articleData.description}</p>
                    
                    {/* Author and Date Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{articleData.author.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{articleData.author}</p>
                            <p className="text-emerald-200 text-sm">Technical Writer</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-emerald-200">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{articleData.publishDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="font-semibold">{articleData.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-8">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Welcome to this comprehensive guide on {articleData.title.toLowerCase()}. In this article, we&apos;ll explore the fundamental concepts, 
                        practical applications, and advanced techniques that will help you master this important topic in computer science.
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Concepts</h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Understanding the core principles is essential for building a solid foundation. We&apos;ll break down complex ideas into 
                        digestible concepts that you can apply immediately in your programming projects. Each concept is accompanied by 
                        practical examples and real-world use cases.
                      </p>
                      
                      {/* Concept Diagram */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-6 border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4 text-center">Data Structure Hierarchy</h3>
                        <div className="flex justify-center">
                          <svg className="w-full max-w-md h-48" viewBox="0 0 400 200">
                            {/* Tree structure diagram */}
                            <circle cx="200" cy="30" r="20" fill="#3B82F6" />
                            <text x="200" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Root</text>
                            
                            <line x1="200" y1="50" x2="120" y2="90" stroke="#6B7280" strokeWidth="2" />
                            <line x1="200" y1="50" x2="280" y2="90" stroke="#6B7280" strokeWidth="2" />
                            
                            <circle cx="120" cy="100" r="18" fill="#10B981" />
                            <text x="120" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Left</text>
                            
                            <circle cx="280" cy="100" r="18" fill="#10B981" />
                            <text x="280" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Right</text>
                            
                            <line x1="120" y1="118" x2="80" y2="150" stroke="#6B7280" strokeWidth="2" />
                            <line x1="120" y1="118" x2="160" y2="150" stroke="#6B7280" strokeWidth="2" />
                            <line x1="280" y1="118" x2="240" y2="150" stroke="#6B7280" strokeWidth="2" />
                            <line x1="280" y1="118" x2="320" y2="150" stroke="#6B7280" strokeWidth="2" />
                            
                            <circle cx="80" cy="160" r="15" fill="#F59E0B" />
                            <circle cx="160" cy="160" r="15" fill="#F59E0B" />
                            <circle cx="240" cy="160" r="15" fill="#F59E0B" />
                            <circle cx="320" cy="160" r="15" fill="#F59E0B" />
                          </svg>
                        </div>
                        <p className="text-blue-700 text-center mt-4 text-sm">
                          Visual representation of a binary tree structure showing parent-child relationships
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                        <h3 className="text-lg font-semibold text-emerald-800 mb-2">💡 Pro Tip</h3>
                        <p className="text-emerald-700">
                          Practice implementing these concepts in multiple programming languages to gain a deeper understanding 
                          of how they work across different paradigms and environments.
                        </p>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Examples</h2>
                       <p className="text-gray-700 leading-relaxed text-lg mb-6">
                         Let&apos;s dive into practical implementations. The following examples demonstrate how to apply these concepts 
                         in real-world scenarios. Each example includes detailed explanations and optimization techniques.
                       </p>
                       
                       {/* Complexity Analysis Table */}
                       <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border border-gray-200">
                         <h3 className="text-lg font-semibold text-gray-800 mb-4">Time Complexity Analysis</h3>
                         <div className="overflow-x-auto">
                           <table className="w-full text-sm">
                             <thead>
                               <tr className="border-b border-gray-300">
                                 <th className="text-left py-2 px-3 font-semibold text-gray-700">Operation</th>
                                 <th className="text-center py-2 px-3 font-semibold text-green-700">Best Case</th>
                                 <th className="text-center py-2 px-3 font-semibold text-yellow-700">Average Case</th>
                                 <th className="text-center py-2 px-3 font-semibold text-red-700">Worst Case</th>
                               </tr>
                             </thead>
                             <tbody>
                               <tr className="border-b border-gray-200">
                                 <td className="py-2 px-3 font-medium">Search</td>
                                 <td className="text-center py-2 px-3 text-green-600 font-mono">O(1)</td>
                                 <td className="text-center py-2 px-3 text-yellow-600 font-mono">O(log n)</td>
                                 <td className="text-center py-2 px-3 text-red-600 font-mono">O(n)</td>
                               </tr>
                               <tr className="border-b border-gray-200">
                                 <td className="py-2 px-3 font-medium">Insert</td>
                                 <td className="text-center py-2 px-3 text-green-600 font-mono">O(1)</td>
                                 <td className="text-center py-2 px-3 text-yellow-600 font-mono">O(log n)</td>
                                 <td className="text-center py-2 px-3 text-red-600 font-mono">O(n)</td>
                               </tr>
                               <tr className="border-b border-gray-200">
                                 <td className="py-2 px-3 font-medium">Delete</td>
                                 <td className="text-center py-2 px-3 text-green-600 font-mono">O(1)</td>
                                 <td className="text-center py-2 px-3 text-yellow-600 font-mono">O(log n)</td>
                                 <td className="text-center py-2 px-3 text-red-600 font-mono">O(n)</td>
                               </tr>
                               <tr>
                                 <td className="py-2 px-3 font-medium">Traversal</td>
                                 <td className="text-center py-2 px-3 text-green-600 font-mono">O(n)</td>
                                 <td className="text-center py-2 px-3 text-yellow-600 font-mono">O(n)</td>
                                 <td className="text-center py-2 px-3 text-red-600 font-mono">O(n)</td>
                               </tr>
                             </tbody>
                           </table>
                         </div>
                         <p className="text-gray-600 text-xs mt-3">
                           * Worst case occurs when the tree becomes skewed (essentially a linked list)
                         </p>
                       </div>
                      
                      <div className="bg-gray-100 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-800 mb-2">Code Example: Binary Search Tree Implementation</h4>
                        <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    
    this._insertHelper(this.root, val);
  }
  
  _insertHelper(node, val) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val);
      } else {
        this._insertHelper(node.left, val);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(val);
      } else {
        this._insertHelper(node.right, val);
      }
    }
  }
}`}
                        </pre>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Following industry best practices ensures your code is maintainable, efficient, and scalable. 
                        Here are the key principles to keep in mind when working with these concepts.
                      </p>
                      
                      {/* Best Practices Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">⏱</span>
                            </div>
                            <h4 className="font-semibold text-red-800">Time Complexity</h4>
                          </div>
                          <p className="text-red-700 text-sm">Always analyze and optimize for the best possible time complexity</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">📝</span>
                            </div>
                            <h4 className="font-semibold text-green-800">Clean Code</h4>
                          </div>
                          <p className="text-green-700 text-sm">Write readable code with proper documentation and naming</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">🧪</span>
                            </div>
                            <h4 className="font-semibold text-blue-800">Testing</h4>
                          </div>
                          <p className="text-blue-700 text-sm">Implement comprehensive unit and integration tests</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">⚠️</span>
                            </div>
                            <h4 className="font-semibold text-purple-800">Edge Cases</h4>
                          </div>
                          <p className="text-purple-700 text-sm">Handle edge cases and implement proper error handling</p>
                        </div>
                      </div>
                      
                      {/* Performance Comparison Chart */}
                       <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 mb-8 border border-emerald-200">
                         <h3 className="text-lg font-semibold text-emerald-800 mb-4">Data Structure Comparison</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           <div className="bg-white rounded-lg p-4 border border-emerald-200">
                             <h4 className="font-semibold text-emerald-700 mb-2">Binary Search Tree</h4>
                             <ul className="text-sm text-emerald-600 space-y-1">
                               <li>• Average O(log n) operations</li>
                               <li>• In-order traversal gives sorted data</li>
                               <li>• Can degrade to O(n) if unbalanced</li>
                             </ul>
                           </div>
                           <div className="bg-white rounded-lg p-4 border border-emerald-200">
                             <h4 className="font-semibold text-emerald-700 mb-2">Hash Table</h4>
                             <ul className="text-sm text-emerald-600 space-y-1">
                               <li>• Average O(1) operations</li>
                               <li>• No ordering of elements</li>
                               <li>• Requires good hash function</li>
                             </ul>
                           </div>
                           <div className="bg-white rounded-lg p-4 border border-emerald-200">
                             <h4 className="font-semibold text-emerald-700 mb-2">Array (Sorted)</h4>
                             <ul className="text-sm text-emerald-600 space-y-1">
                               <li>• O(log n) search with binary search</li>
                               <li>• O(n) insertion and deletion</li>
                               <li>• Memory efficient</li>
                             </ul>
                           </div>
                         </div>
                       </div>
                       
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-8">
                          Mastering these concepts takes time and practice, but the investment is worthwhile. Continue exploring, 
                          experimenting, and building projects that challenge your understanding. Remember that learning is a 
                          continuous journey in the ever-evolving field of technology.
                        </p>
                       
                       {/* Related Articles Section */}
                       <div className="border-t pt-8">
                         <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {[
                             {
                               title: 'Binary Search Trees and AVL Trees',
                               description: 'Deep dive into self-balancing binary search trees and their applications',
                               category: 'Data Structures',
                               rating: 4.5
                             },
                             {
                               title: 'Graph Algorithms and Traversal',
                               description: 'Master BFS, DFS, and shortest path algorithms',
                               category: 'Algorithms',
                               rating: 4.2
                             },
                             {
                               title: 'Dynamic Programming Patterns',
                               description: 'Learn common DP patterns and optimization techniques',
                               category: 'Programming',
                               rating: 4.7
                             },
                             {
                               title: 'Hash Tables and Hash Functions',
                               description: 'Understanding collision resolution and hash function design',
                               category: 'Data Structures',
                               rating: 4.1
                             }
                           ].map((article, index) => {
                             const relatedUrl = `/article?${new URLSearchParams({
                               title: article.title,
                               description: article.description,
                               rating: article.rating.toString(),
                               category: article.category
                             }).toString()}`;
                             
                             return (
                               <Link key={index} href={relatedUrl} className="group">
                                 <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors border border-gray-200 hover:border-emerald-200">
                                   <div className="flex items-start justify-between mb-3">
                                     <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                       {article.category}
                                     </span>
                                     <div className="flex items-center space-x-1">
                                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                       <span className="text-sm font-medium">{article.rating}</span>
                                     </div>
                                   </div>
                                   <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                                     {article.title}
                                   </h3>
                                   <p className="text-gray-600 text-sm leading-relaxed">
                                     {article.description}
                                   </p>
                                 </div>
                               </Link>
                             );
                           })}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              )}

              {activeTab === 'Related Videos' && (
                <div className="p-8">
                  <h2 className="text-4xl font-bold mb-8 text-gray-900">{articleData.title}</h2>
                  <div className="space-y-6">
                    {videos.map((video, index) => (
                      <div key={index} className="bg-gray-100 rounded-2xl p-6 flex items-center space-x-6 hover:bg-gray-200 transition-colors cursor-pointer">
                        {/* Video Thumbnail */}
                        <div className="w-48 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                          <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                            {index === 0 ? '12:45' : '8:32'}
                          </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">{video.title}</h3>
                          <p className="text-gray-600 mb-3">{video.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              <p className="font-medium">{video.creator}</p>
                              <p>{video.channel}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{index === 0 ? '45.2k' : '23.8k'} views</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span>{index === 0 ? '4.8' : '4.6'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Share Button */}
                        <div className="flex-shrink-0">
                          <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-300">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Discuss' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Discussion</h2>
                  
                  {/* Comments */}
                  <div className="space-y-6 mb-8">
                    {comments.map((comment, index) => (
                      <div key={index} className="border rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">
                              {comment.username.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-emerald-600">{comment.username}</h4>
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {comment.content}
                            </p>
                            <div className="flex items-center space-x-6">
                              <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600 transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                <span className="text-sm">{comment.upvotes}</span>
                              </button>
                              <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                                <ThumbsDown className="w-4 h-4" />
                                <span className="text-sm">{comment.downvotes}</span>
                              </button>
                              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                                <Share2 className="w-4 h-4" />
                                <span className="text-sm">Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Input */}
                  <div className="border rounded-xl p-6 bg-white shadow-sm">
                    <Textarea
                      placeholder="Write something here..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="mb-4 min-h-[120px] resize-none border-0 p-0 focus:ring-0 text-base placeholder:text-gray-400"
                    />
                    <div className="flex justify-end space-x-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setNewComment('')}
                        className="px-6 py-2 hover:bg-gray-100"
                      >
                        Clear
                      </Button>
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2">
                        Post
                      </Button>
                    </div>
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