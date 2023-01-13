import React from 'react';

export default function Contacto(){
  return (
    <section className="bg-black dark:bg-gray-900 text-poppins">
    <div className="py-8 lg:py-16 mx-auto max-w-screen text-poppins">
        <h2 className="mb-4 text-[24px] font-bold text-white dark:text-white">Contactanos</h2>
        <p className="mb-8 lg:mb-16  text-white text-[16px] sm:text-xl">¿Tenes alguna pregunta? No dudes mas y consultanos. </p>
        <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">E-mail</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Titulo</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dinos en que podemos ayudarte" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Mensaje</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja aqui una descripción"></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium  text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
        </form>
    </div>
  </section>
  )
}
