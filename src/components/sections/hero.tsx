import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="https://i.imgur.com/6a2jS6p.png"
        alt="Hero background image of a modern building"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
        data-ai-hint="architecture building"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
          Innovative urban architecture
        </h1>
        <p className="mt-4 font-headline text-xl md:text-2xl font-bold tracking-tight text-shadow">
            Architecture & Urban Interventions
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
          Eduardo Cortez: Innovating spaces and regenerating cities with a passion for environmentally conscious design and community-driven urban planning.
        </p>
        <a href="#portfolio">
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
            View Portfolio
            </Button>
        </a>
      </div>
    </section>
  );
}
