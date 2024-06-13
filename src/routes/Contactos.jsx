import React from 'react';

const Contactos = () => {
  const contacts = [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/CarlosRicardV',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/veRtiz18',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
    },
    {
      id: 3,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/carlos-ricardo-vertiz-4151602b7/',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg'
    },
    {
      id: 4,
      name: 'WhatsApp',
      url: 'https://wa.me/7121719454',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-2xl md:text-5xl font-extrabold text-black text-left mb-8">Contactos</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map(contact => (
          <a 
            key={contact.id}
            href={contact.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105"
          >
            <img src={contact.imgSrc} alt={contact.name} className="w-20 h-20 object-contain transition-transform duration-300 mb-2 hover:scale-110" />
            <span className="text-lg font-semibold text-gray-800">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contactos;
