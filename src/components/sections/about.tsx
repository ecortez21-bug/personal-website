import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 font-headline text-primary">About Me</h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="md:col-span-1 flex items-center justify-center p-8 bg-muted/50">
              <Image
                src="https://placehold.co/400x400"
                alt="Eduardo Cortez Headshot"
                width={250}
                height={250}
                className="rounded-full object-cover aspect-square shadow-lg"
                data-ai-hint="professional headshot"
              />
            </div>
            <div className="md:col-span-2">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I am a passionate architect and urbanist dedicated to creating sustainable and regenerative environments. My work focuses on the intersection of ecological design, community engagement, and technological innovation. As a student ambassador for Architects for a Sustainable Future, I am committed to advocating for a paradigm shift in how we design and inhabit our cities.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  My design philosophy is rooted in the belief that architecture should not only be beautiful and functional but also restorative for both people and the planet. From large-scale urban interventions that heal city fabrics to individual buildings that operate as living systems, my goal is to deliver solutions that are resilient, equitable, and inspiring.
                </p>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-headline text-primary/90">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-base px-3 py-1 bg-accent/20 text-accent-foreground/80 border-accent/30">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
