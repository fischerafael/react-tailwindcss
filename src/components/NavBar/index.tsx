import React from 'react'
import { AboutIcon } from '../Icons/About'
import HomeIcon from '../Icons/Home'
import { MessageIcon } from '../Icons/MessageIcon'
import NavLink from './NavLink'

export const NavBar = () => {
    return (
        <div className="md:col-span-1 ">
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
                <ul className="flex flex-col gap-2 py-2">
                    <NavLink isActive>
                        <HomeIcon />
                        <span>Sobre</span>
                    </NavLink>

                    <NavLink>
                        <AboutIcon />
                        <span>Sobre</span>
                    </NavLink>

                    <NavLink>
                        <MessageIcon />
                        <span>Contato</span>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}
