'use client';

import { Star, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  rating: number;
  category: string;
}

export default function ArticleCard({ title, description, rating, category }: ArticleCardProps) {
  // Create URL with article data as search parameters
  const articleUrl = `/article?${new URLSearchParams({
    title,
    description,
    rating: rating.toString(),
    category
  }).toString()}`;

  return (
    <Link href={articleUrl} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform group-hover:scale-105">
        {/* Enhanced Header with Gradient */}
        <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20"></div>
          <div className="relative text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-lg font-bold">{title.charAt(0)}</span>
            </div>
            <span className="text-white text-xs opacity-80">Programming Topic</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{description}</p>
          
          {/* Enhanced Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-xs">5 min</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Eye className="w-3 h-3" />
                <span className="text-xs">1.2k</span>
              </div>
            </div>
            <span className="text-xs text-gray-500 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}