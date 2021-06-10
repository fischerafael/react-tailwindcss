import React from 'react'

export const NavBar = () => {
    return (
        <div className="md:col-span-1">
            <nav>
                <div>
                    <h1 className="font-medium uppercase p-4 border-b border-gray-100">
                        <a
                            href="/"
                            className="text-sm sm:text-xl text-green-500"
                        >
                            AirFood
                        </a>
                    </h1>
                </div>
                <ul>
                    <li className="text-gray-800 font-bold">
                        <a href="#">
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contato</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
