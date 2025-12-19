import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Início', id: 'header' },
    { label: 'A Rádio', id: 'our-story' },
    { label: 'Anuncie', id: 'advertise' },
    { label: 'Seja um Afiliado', id: 'affiliates' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-b from-[#050b1a]/90 via-[#0a1428]/80 to-[#050b1a]/60 border-b border-[#e0e0e0]/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#header" className="flex-shrink-0">
            <img
              src="/logo_pura.png"
              alt="RC Sat"
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-[#e0e0e0] hover:text-red-500 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e0e0e0] hover:text-red-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-[#e0e0e0]/10 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#e0e0e0] hover:text-red-500 hover:bg-[#0a1428]/50 rounded-lg transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
