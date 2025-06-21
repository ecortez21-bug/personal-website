"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';
import { Separator } from './ui/separator';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
        <div className="relative h-1/2 w-full">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint="architecture interior"
          />
          {project.images.length > 1 && (
            <>
              <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" onClick={prevImage}>
                <ArrowLeft />
              </Button>
              <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" onClick={nextImage}>
                <ArrowRight />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-6 flex-grow overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <DialogTitle className="text-3xl font-bold font-headline text-primary">{project.title}</DialogTitle>
                <p className="text-muted-foreground">{project.location}</p>
              </div>
            </div>
          </DialogHeader>
          <Separator className="my-4" />
          <div className="space-y-6">
            <div>
                <h3 className="font-bold text-lg mb-2 font-headline text-primary/90">Description</h3>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                    {project.description}
                </DialogDescription>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg mb-2 font-headline text-primary/90">My Role</h3>
                    <p className="text-base text-foreground/80">{project.role}</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2 font-headline text-primary/90">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-base text-foreground/80">
                        {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                </div>
            </div>
            
            {project.links && project.links.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-2 font-headline text-primary/90">Links</h3>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
