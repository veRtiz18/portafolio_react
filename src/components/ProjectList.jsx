import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map(project => (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" key={project.id}>
          <h5 className="text-2xl font-bold mb-4">{project.name}</h5>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver Proyecto</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
