import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-primary">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-primary neon-glow">&gt; PORTFOLIO.EXE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['ABOUT', 'EXPERIENCE', 'SKILLS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-primary hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5 mb-1'}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5 mt-1'}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-2 space-y-3">
            {['ABOUT', 'EXPERIENCE', 'SKILLS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block text-foreground hover:text-primary transition-colors uppercase tracking-wider py-2 px-2 border-l-2 border-transparent hover:border-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}