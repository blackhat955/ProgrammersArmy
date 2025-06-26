'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Contributors() {
  const [searchTerm, setSearchTerm] = useState('');

  const contributors = [
    { rank: 1, name: 'Username', score: '1234' },
    { rank: 1, name: 'Username', score: '1234' },
    { rank: 1, name: 'Username', score: '1234' },
    { rank: 4, name: 'Username', score: '1234' },
    { rank: 4, name: 'Username', score: '1234' },
    { rank: 4, name: 'Username', score: '1234' },
  ];

  const searchSuggestions = [
    'AA', 'Ab', 'Abc def ghi', 'ABcd', 'ACdef', 'ADebf Pqrs tuv', 'APqrs tuv', 'AXyz'
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            
            {/* Search Suggestions Dropdown */}
            {searchTerm && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setSearchTerm(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contributors Leaderboard */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-slate-600 p-6">
            <h1 className="text-white text-xl font-bold">Your Contributor Rank: #1234</h1>
          </div>
          
          <div className="p-6">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 text-white font-semibold mb-6">
              <div>Rank</div>
              <div>Name</div>
              <div className="text-right">Score</div>
            </div>

            {/* Contributors List */}
            <div className="space-y-4">
              {contributors.map((contributor, index) => (
                <div
                  key={index}
                  className="bg-emerald-100 rounded-xl p-4 grid grid-cols-3 gap-4 items-center"
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800">#{contributor.rank}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{contributor.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center ml-auto">
                      <span className="font-bold text-gray-800 text-sm">{contributor.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current User Row */}
            <div className="mt-8 bg-white rounded-xl p-4 grid grid-cols-3 gap-4 items-center border-2 border-emerald-400">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">#1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium text-gray-800">Current User Name</span>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center ml-auto">
                  <span className="font-bold text-gray-800 text-sm">1234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}