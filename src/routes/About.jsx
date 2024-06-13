import React from 'react';
import foto from '../assets/images/Mi_foto.jpg';

const About = () => {
  return (
    <div className="py-10 rounded-lg">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg p-6">
        <div className="mt-10">
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img 
                src={foto} 
                alt="Foto de Carlos Ricardo Vertiz" 
                className="w-full object-cover rounded-lg shadow-md"
                style={{ maxWidth: '400px', height: 'auto' }}
              />
            </div>
            <div className="md:w-2/3 md:ml-6 text-gray-800">
            <h1 className="text-2xl md:text-5xl font-extrabold text-dark text-left mb-8">Acerca de Mí</h1>
              <p className="text-lg text-justify font-semibold">
                <span className="font-bold text-3xl">Carlos Ricardo Vertiz</span> <br />
                De Timilpan, Estado de México, con 22 años. <br />
                Estudiante de Ingeniería de Sistemas Computacionales. <br /> <br />
                
                Soy una persona autodidacta y apasionada por el aprendizaje continuo. Me adapto
rápidamente a nuevas tecnologías y disfruto enfrentar desafíos. Busco desarrollarme en una
empresa que ofrezca oportunidades de crecimiento, donde pueda aportar mis habilidades y
avanzar en mi carrera profesional
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
