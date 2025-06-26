'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { Users, Target, Heart, Code, BookOpen, Award, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Vishal Mourya',
      role: 'Founder & CEO',
      image: '/vis.png',
      description: 'Full-stack developer with 10+ years of experience in building scalable applications.'
    },
    {
      name: 'Zoheb Siddiqui',
      role: 'CTO',
      image: '/zohe.png',
      description: 'Expert in system architecture and cloud technologies, passionate about mentoring.'
    },
    {
      name: 'Adarsh Singh',
      role: 'Head of Community',
      image: '/addy.png',
      description: 'Community builder focused on creating inclusive spaces for learning and growth.'
    },
    {
      name: 'Sanjay Shukla',
      role: 'Lead Developer',
      image: '/san.png',
      description: 'Frontend specialist with expertise in modern frameworks and user experience design.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Members' },
    { number: '1000+', label: 'Articles Published' },
    { number: '500+', label: 'Coding Challenges' },
    { number: '100+', label: 'Expert Mentors' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[70vh]">
        {/* Emerald Background Shape */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path
              d="M400,50 C600,20 800,40 1000,80 C1200,120 1400,100 1440,90 L1440,0 L1440,600 C1300,650 1100,680 900,640 C700,600 500,580 300,620 C200,640 100,660 0,680 L0,150 C100,100 250,80 400,50 Z"
              fill="#86efac"
              opacity="0.9"
            />
            <path
              d="M500,100 C700,70 900,90 1100,130 C1300,170 1440,150 1440,140 L1440,0 L1440,650 C1350,700 1150,730 950,690 C750,650 550,630 350,670 C250,690 150,710 50,730 L50,200 C150,150 300,130 500,100 Z"
              fill="#6ee7b7"
              opacity="0.7"
            />
            <path
              d="M600,150 C800,120 1000,140 1200,180 C1400,220 1440,200 1440,190 L1440,0 L1440,700 C1400,700 1200,700 1000,700 C800,700 600,700 400,700 C300,700 200,700 100,700 L100,250 C200,200 400,180 600,150 Z"
              fill="#a7f3d0"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About Programmers Army
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Empowering developers worldwide through knowledge sharing, community building, 
              and continuous learning opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full text-lg">
                Join Our Community
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To create an inclusive global community where programmers of all skill levels 
                can learn, share knowledge, and accelerate their careers through collaboration 
                and continuous learning.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the world&apos;s leading platform for programming education and community 
                building, where every developer can find the resources and support they need 
                to succeed.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Collaboration, continuous learning, innovation, inclusivity, and supporting 
                each other&apos;s growth. We believe in the power of community and shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources and tools to accelerate your programming journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Learning Resources"
              description="Comprehensive tutorials, articles, and guides covering all programming languages and technologies"
              iconColor="bg-blue-300"
            />
            <FeatureCard
              title="Coding Challenges"
              description="Practice your skills with our extensive collection of coding problems and algorithmic challenges"
              iconColor="bg-green-300"
            />
            <FeatureCard
              title="Community Support"
              description="Connect with fellow developers, get help, and share your knowledge in our vibrant community"
              iconColor="bg-purple-300"
            />
            <FeatureCard
              title="Career Growth"
              description="Access mentorship programs, career guidance, and opportunities to advance your professional journey"
              iconColor="bg-orange-300"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developers and educators dedicated to building the best learning platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-slate-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your journey with thousands of developers who are learning, 
            growing, and building amazing things together.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-700 px-8 py-3 rounded-full text-lg">
              Explore Resources
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}