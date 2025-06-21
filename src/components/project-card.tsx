import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
  onSelectProject: (project: Project) => void;
};

export default function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
      onClick={() => onSelectProject(project)}
    >
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={project.images[0]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            data-ai-hint="architecture design"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">{project.category}</Badge>
        <CardTitle className="text-xl font-bold font-headline mb-2 text-primary/90">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-foreground/70">{project.description}</CardDescription>
        <Button variant="link" className="p-0 mt-4 text-primary">Learn More</Button>
      </CardContent>
    </Card>
  );
}
