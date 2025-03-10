import React from 'react'
import { Link } from 'react-router'
import { Logo_responsive } from './Logo_responsive'

export default function Frame1_Home() {
    const style = {
        width: '100%',
        top: '100px',
        position: 'absolute',
    
    }
  return (
    <div className="bg-white relative w-screen" style={style}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-orange-600">CERRO METRO</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">El sitio perfecto para excursionar con tus amigos</p>
                <p className="mt-6 text-lg/8 text-gray-600">Descubre las maravillas del Parque Nacional El Ávila con nuestra aplicación. Encuentra rutas personalizadas, mapas detallados, información sobre la flora y fauna, y consejos de seguridad para que tu aventura sea inolvidable. ¡Prepárate para vivir una experiencia inolvidable!</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                            </div>
                            Guarda tus rutas favoritas
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">Descubre senderos que se adaptan a tu nivel y preferencias. Desde caminatas suaves hasta rutas desafiantes, encuentra la aventura perfecta para ti y guardala para próximas ocasiones.</dd>
                    </div>
                    <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                            </div>
                            Mantente al tanto de las novedades
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">Programa tus excursiones y recibe recordatorios y notificaciones importantes antes de tu viaje, incluyendo alertas sobre el clima, cambios en las rutas o cualquier otra información relevante.</dd>
                    </div>
                    <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </div>
                            Información de Flora y Fauna
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">Aprende sobre la rica biodiversidad de El Ávila. Identifica plantas y animales, y descubre los secretos de este hermoso parque nacional.</dd>
                    </div>
                    <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            Consejos de Seguridad y Emergencias
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">Priorizamos tu seguridad. Accede a consejos útiles, números de emergencia y protocolos de seguridad para disfrutar de una experiencia segura y responsable.</dd>
                    </div>
                </dl>
            </div>
        </div>
        <footer className="bg-gray-300  w-screen bottom-0 mt-20">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
                        <span className="self-center text-4xl font-bold whitespace-nowrap text-gray-900">CERRO METRO</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link className="hover:underline me-4 md:me-6 text-gray-900">About</Link>
                        </li>
                        <li>
                            <Link className="hover:underline me-4 md:me-6 text-gray-900">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:underline me-4 md:me-6 text-gray-900">Licensing</Link>
                        </li>
                        <li>
                            <Link className="hover:underline text-gray-900">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:my-8" />
                <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">CERRO METRO™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
    
  )
}
