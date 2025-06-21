import { professionalExperience, education, certifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimelineItem = ({ children }: { children: React.ReactNode }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-3 top-1 h-full w-px bg-border"></div>
    <div className="absolute left-1.5 top-1 h-3 w-3 rounded-full bg-primary"></div>
    {children}
  </div>
);

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 font-headline text-primary">Resume & Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold mb-6 font-headline text-primary/90">Professional Experience</h3>
            <div>
              {professionalExperience.map((exp, i) => (
                <TimelineItem key={i}>
                  <p className="font-bold text-lg text-foreground">{exp.role}</p>
                  <p className="text-md text-accent font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {exp.description.map((desc, j) => <li key={j}>{desc}</li>)}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-headline text-primary/90">Education</h3>
              <div>
                {education.map((edu, i) => (
                   <TimelineItem key={i}>
                    <p className="font-bold text-lg text-foreground">{edu.degree}</p>
                    <p className="text-md text-accent font-semibold">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-foreground/80">{edu.specialization}</p>
                  </TimelineItem>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-headline text-primary/90">Certifications & Awards</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <Badge key={i} variant="secondary" className="text-base px-3 py-1 bg-accent/20 text-accent-foreground/80 border-accent/30">{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
