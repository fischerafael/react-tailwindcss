import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    isActive?: boolean
}

const NavLink = ({ children, isActive }: Props) => {
    return (
        <li
            className={`${
                isActive && 'font-bold'
            } text-gray-800 cursor-pointer px-2`}
        >
            <a href="#" className="flex gap-2 content-center items-center">
                {children}
            </a>
        </li>
    )
}

export default NavLink
