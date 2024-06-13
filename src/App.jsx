import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Contactos from './routes/Contactos';
import About from './routes/About';
import ContactoDinamico from './routes/ContactoDinamico';
import Projects from './routes/Projects';
import Python from './routes/Python';
import Csharp from './routes/Csharp';
import CPlusPlus from './routes/CPlusPlus';
import Java from './routes/Java';
import AndroidStudio from './routes/AndroidStudio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faAddressBook, faInfoCircle, faTasks } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink to="/" activeClassName="">
            <FontAwesomeIcon icon={faHouseUser} className="text-3xl text-white hover:text-gray-200 mr-6 transition duration-300 ease-in-out transform hover:scale-110" />
          </NavLink>
          <div className="flex space-x-6">
            <NavLink 
              to="/contactos"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
            <NavLink 
              to="/about"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
            <NavLink 
              to="/projects"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faTasks} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen">
        <br />
        <div className="container max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg mt-6">
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/contactos' element={<Contactos />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacto/:nombre/:apellido' element={<ContactoDinamico />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/python' element={<Python />} />
            <Route path='/projects/csharp' element={<Csharp />} />
            <Route path='/projects/cplusplus' element={<CPlusPlus />} />
            <Route path='/projects/java' element={<Java />} />
            <Route path='/projects/android-studio' element={<AndroidStudio />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
