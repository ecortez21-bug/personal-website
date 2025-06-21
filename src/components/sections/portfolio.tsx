"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import { projects, type Project } from '@/lib/data';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All Projects');

  const filters = ['All Projects', 'Sustainable Architecture', 'Urban Interventions', 'Academic Projects'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All Projects') return true;
    return project.category === filter;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 font-headline text-primary">My Portfolio</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <Button 
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              onClick={() => setFilter(f)}
              className="transition-all"
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelectProject={setSelectedProject} />
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
