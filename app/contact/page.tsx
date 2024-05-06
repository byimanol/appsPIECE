"use client"

import React, { useRef, useEffect,useState} from 'react';

const ContactPage = () => {
    const [email, setEmail] = useState('appspice@gmail.com'); // Estado para el email
  
    // Función para copiar el email al portapapeles
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email)
        .then(() => alert("Email copiado al portapapeles!"))
        .catch(err => console.error("Error al copiar el email: ", err));
    };
  
    return (

      <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">

        <h1 className="m-10 text-3xl font-bold ">Some issues may be caused by internet connection problems. Try pressing Ctrl + F5 to refresh the page and check if the issue persists. If it continues, please send us an email to let us know, thank you.</h1>

        <div className="flex space-x-2">
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Copiar
          </button>
        </div>
      </div>

    );
  };
  
  export default ContactPage;