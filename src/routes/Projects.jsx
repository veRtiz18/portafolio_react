import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="text-2xl md:text-5xl font-extrabold text-black text-left mb-8">Proyectos</h1>
      <div className="grid grid-cols-2 gap-8">
        <NavLink 
          to="/projects/python" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://cdn.worldvectorlogo.com/logos/python-5.svg" 
            alt="Python Logo" 
            className="w-24 h-24 mx-auto mb-4 transition-transform duration-300"
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition-transform duration-300">Proyectos en Python</h5>
          <p className="text-gray-600 text-center transition-transform duration-300">Explora proyectos realizados en Python.</p>
        </NavLink>
        <NavLink 
          to="/projects/csharp" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://sitecloudy.com/wp-content/uploads/2023/07/Que-es-C-y-cuales-son-sus-ventajas-y-desventajas-2.png" 
            alt="C# Logo" 
            className="w-24 h-24 mx-auto mb-4 transition-transform duration-300"
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition-transform duration-300">Proyectos de C#</h5>
          <p className="text-gray-600 text-center transition-transform duration-300">Descubre proyectos de C#.</p>
        </NavLink>
        <NavLink 
          to="/projects/cplusplus" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://cdn.worldvectorlogo.com/logos/c.svg" 
            alt="C++ Logo" 
            className="w-24 h-24 mx-auto mb-4 transition-transform duration-300"
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition-transform duration-300">Scripts en C++</h5>
          <p className="text-gray-600 text-center transition-transform duration-300">Explora scripts desarrollados en C++.</p>
        </NavLink>
        <NavLink 
          to="/projects/java" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://education.oracle.com/file/general/p-80-java.png" 
            alt="Java Logo" 
            className="w-24 h-24 mx-auto mb-4 transition-transform duration-300"
            width="100" 
          />
          <h5 className="text-lg font-bold mb-2 text-center transition-transform duration-300">Proyectos en Java</h5>
          <p className="text-gray-600 text-center transition-transform duration-300">Descubre proyectos realizados en Java.</p>
        </NavLink>
        <NavLink 
          to="/projects/android-studio" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png" 
            alt="Android Studio Logo" 
            className="w-24 h-24 mx-auto mb-4 transition-transform duration-300"
            width="100" 
          />
          <h5 className="text-lg font-bold mb-2 text-center transition-transform duration-300">Proyectos en Android Studio</h5>
          <p className="text-gray-600 text-center transition-transform duration-300">Descubre proyectos realizados en Android Studio.</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
