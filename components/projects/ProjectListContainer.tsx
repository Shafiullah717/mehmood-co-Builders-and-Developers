// components/projects/ProjectListContainer.tsx
'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/data/data';
import ProjectCard from '@/components/shared/ProjectCard'; // Your existing ProjectCard

interface ProjectListContainerProps {
  allProjects: Project[];
  uniqueStatuses: string[];
}

const ProjectListContainer: React.FC<ProjectListContainerProps> = ({ allProjects, uniqueStatuses }) => {
  const [activeStatusFilter, setActiveStatusFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProjects = useMemo(() => {
    let currentProjects = allProjects;

    // Filter by status
    if (activeStatusFilter !== 'All') {
      currentProjects = currentProjects.filter(
        (project) => project.status === activeStatusFilter
      );
    }

    // Filter by search term (case-insensitive)
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentProjects = currentProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          project.location.toLowerCase().includes(lowerCaseSearchTerm) ||
          project.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return currentProjects;
  }, [allProjects, activeStatusFilter, searchTerm]);

  return (
    <div className="mt-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveStatusFilter('All')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200
            ${activeStatusFilter === 'All' ? 'bg-primary text-white' : 'bg-medium text-dark hover:bg-medium/70'}`}
        >
          All Projects
        </button>
        {uniqueStatuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatusFilter(status)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200
              ${activeStatusFilter === status ? 'bg-primary text-white' : 'bg-medium text-dark hover:bg-medium/70'}`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Search projects by name, location, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 border border-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-dark"
        />
      </div>


      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-dark text-lg py-8">
            No projects found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectListContainer;