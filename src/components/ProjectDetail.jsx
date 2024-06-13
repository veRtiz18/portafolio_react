import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold">{project.name}</h1>
      <p>
        URL: 
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {project.url}
        </a>
      </p>
    </div>
  );
}

export default ProjectDetail;
