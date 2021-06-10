import React from 'react'
import { AboutIcon } from '../Icons/About'
import { HomeIcon } from '../Icons/Home'
import { MenuIcon } from '../Icons/Menu'
import { MessageIcon } from '../Icons/MessageIcon'
import { NavLink } from './NavLink'

export const NavBar = () => {
    const [isNavOpen, setNavOpen] = React.useState(false)

    return (
        <div className="md:col-span-1 shadow-sm z-10 fixed md:relative bg-white w-full">
            <nav>
                <div className="flex justify-between md:justify-end items-center gap-5 md:mb-10 py-4 px-5">
                    <h1 className="font-bold tracking-widest uppercase text-sm md:text-xl text-green-800 bg-white">
                        AirFood
                    </h1>
                    <MenuIcon
                        onClick={() => setNavOpen((prevState) => !prevState)}
                        className="md:hidden flex h-4 w-4 cursor-pointer"
                    />
                </div>
                <ul
                    className={`${
                        !isNavOpen && 'hidden'
                    } md:flex flex-col items-end gap-2 py-2 transition duration-500`}
                >
                    <NavLink isActive>
                        <span>Início</span>
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
