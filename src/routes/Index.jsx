import React from 'react';
import foto from '../assets/images/Mi_foto.jpg';

const Index = () => {
  return (
    <div className="text-center py-10 bg-gray-50 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-black">
        <span className="text-xl md:text-2xl font-medium text-gray-700">¡Bienvenido a mi portafolio digital!</span>
      </h1>
      <p className="mt-4 text-2xl text-gray-700">Conoce mis proyectos y descubre mi trayectoria profesional.</p>
      <h1 className="mt-8 text-4xl md:text-5xl font-bold text-black">Carlos Ricardo Vertiz</h1>
      <div className="mt-8 flex justify-center">
        <img 
          src={foto} 
          alt="Foto de Carlos Ricardo Vertiz" 
          style={{ width: '370px', height: 'auto' }} 
          className="rounded-lg border-4 border-gray-300 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Index;
