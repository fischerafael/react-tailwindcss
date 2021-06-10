import React from 'react'
import { AboutIcon } from '../Icons/About'
import { HomeIcon } from '../Icons/Home'
import { MessageIcon } from '../Icons/MessageIcon'
import NavLink from './NavLink'

export const NavBar = () => {
    return (
        <div className="md:col-span-1 shadow-xl z-10">
            <nav>
                <div className="flex justify-end mb-10">
                    <h1 className="font-bold tracking-widest uppercase py-4 px-5 text-sm sm:text-xl text-green-400 bg-white">
                        AirFood
                    </h1>
                </div>
                <ul className="flex flex-col items-end gap-2 py-2">
                    <NavLink isActive>
                        <span>Sobre</span>
                        <HomeIcon />
                    </NavLink>

                    <NavLink>
                        <span>Sobre</span>
                        <AboutIcon />
                    </NavLink>

                    <NavLink>
                        <span>Contato</span>
                        <MessageIcon />
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}
