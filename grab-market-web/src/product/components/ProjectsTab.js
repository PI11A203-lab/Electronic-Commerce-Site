import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function ProjectsTab({ projects }) {
  return (
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-gray-700 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>{project.result}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

