import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Aampanna</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-green-400">Home</a>
              <a href="#about" className="text-white hover:text-green-400">About</a>
              <a href="#services" className="text-white hover:text-green-400">Services</a>
              <a href="#portfolio" className="text-white hover:text-green-400">Portfolio</a>
              <a href="#contact" className="text-white hover:text-green-400">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="block px-3 py-2 text-white hover:text-green-400">Home</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-green-400">About</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-green-400">Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-white hover:text-green-400">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-green-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}