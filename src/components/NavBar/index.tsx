import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <nav>
                <div>
                    <h1 className="font-bold uppercase p-1 border-b border-gray-100">
                        <a href="/">AirFood</a>
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
