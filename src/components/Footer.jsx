import React from 'react'
import { Link } from 'react-router'
import { Logo_responsive } from './Logo_responsive'

export default function Footer() {
    
    return (
        

    <footer className="bg-linear-to-r bg-gray-200  w-screen bottom-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
                            <span className="text-4xl font-bold whitespace-nowrap text-gray-900">CERRO METRO</span>
                        </div>
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
                </div>
            </footer>


    )
}
