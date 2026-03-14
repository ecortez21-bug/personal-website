"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMusicPage = pathname === '/music';

  const sectionIds = isMusicPage ? [] : ['home', 'about', 'portfolio', 'resume', 'contact'];
  const activeSection = useScrollSpy(sectionIds, { offset: 150 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled || isMusicPage ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
  );

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={cn("flex items-center", isMobile ? "flex-col space-y-4" : "hidden md:flex md:space-x-8")}>
      {navLinks.map((link) => {
        const isActive = isMusicPage ? link.href === '/music' : activeSection === link.href.substring(1);
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
            className={cn(
              "text-lg transition-colors hover:text-primary",
              isActive ? "text-primary font-bold" : "text-foreground/80",
              isMobile && "text-2xl"
            )}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={isMusicPage ? "/" : "#home"} className="text-2xl font-bold tracking-tight text-primary transition-transform hover:scale-105">
          Eduardo Cortez
        </a>
        
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                 <NavLinks isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
