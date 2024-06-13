import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTerminal } from 'react-icons/fi';
import ProjectList from '../components/ProjectList';

const CPlusPlus = () => {
  const projects = [
    { id: 1, name: 'Ciclos del Reloj', url: 'https://github.com/veRtiz18', icon: <FiTerminal className="inline-block align-middle"/> },
    { id: 2, name: 'Presidencia', url: 'https://github.com/veRtiz18', icon: <FiTerminal className="inline-block align-middle"/> },
    { id: 3, name: 'Operador Lógico', url: 'https://github.com/veRtiz18', icon: <FiTerminal className="inline-block align-middle"/> },
    { id: 4, name: 'Operador Condicional', url: 'https://github.com/veRtiz18', icon: <FiTerminal className="inline-block align-middle"/> },
  ];

  return (
    <div className="py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto px-12 text-center">
        <h1 className="md:text-6xl font-extrabold text-black text-center">Scripts en C++</h1><br />
        <NavLink to="https://www2.eii.uva.es/fund_inf/cpp/temas/1_introduccion/introduccion.html#:~:text=C%2B%2B%20es%20un%20lenguaje%20compilado,a%20objetos%20del%20lenguaje%20C.&text=C%2B%2B%20significar%C3%ADa%20incremento%20de%20C,operador%20%2B%2B%20con%20ese%20nombre" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 mb-8 transform hover:scale-105">
          <img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="Python Logo" className="w-24 h-24 mx-auto mb-4" width="100"/>
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Acerca de C++</h5>
          <p className="text-gray-600 text-center">Explora scripts realizados en C++.</p>
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

export default CPlusPlus;
