import React from 'react';
import { Rocket, Search, Zap, Database } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Digital Rocket
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}