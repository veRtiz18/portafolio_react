import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiCode } from 'react-icons/fi';

const Python = () => {
  const projects = [
    { id: 1, name: 'Factores', url: 'https://github.com/veRtiz18/Practicas-Python/blob/master/factores.py', icon: <FiCode className="inline-block align-middle"/>},
    { id: 2, name: 'Piedra Papel o Tijera', url: 'https://github.com/veRtiz18/Practicas-Python/blob/master/piedra_papel_tijera.py', icon: <FiCode className="inline-block align-middle"/> },
  ];

  return (
    <div className="py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto px-12 text-center">
        <h1 className="md:text-6xl font-extrabold text-black text-center">Proyectos en Python</h1>
        <NavLink to="https://www.python.org/" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 mb-8 transform hover:scale-105">
          <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python Logo" className="w-24 h-24 mx-auto mb-4" width="100"/>
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Acerca de Python</h5>
          <p className="text-gray-600 text-center">Explora proyectos realizados en Python.</p>
        </NavLink>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map(project => (
            <div key={project.id} className="transform hover:scale-105 transition duration-300">
              <NavLink to={project.url} className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                <div className="text-6xl mb-4 text-blue-500 text-center">{project.icon}</div>
                <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">{project.name}</h5>
              </NavLink>
              <div className="flex justify-center">
                <a href={project.url} target="_blank" rel="noopener noreferrer">

                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Python;
