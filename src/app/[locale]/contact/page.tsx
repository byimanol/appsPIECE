"use client"

import React, {useState} from 'react';
import {useTranslations} from 'next-intl';


export const runtime ="edge";


const ContactPage = () => {

    const [email, setEmail] = useState('contact@appspiece.com'); // Estado para el email
  
    // Función para copiar el email al portapapeles
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email)
        .then(() => alert(t('success')))
        .catch(err => console.error(t('error'), err));
    };

    const t = useTranslations('contact');

    return (

      <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">

        <h1 className="m-10 text-3xl font-bold ">{t('text')}</h1>

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
            {t('button')}
          </button>
        </div>
      </div>

    );
  };
  
  export default ContactPage;