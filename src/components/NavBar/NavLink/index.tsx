import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    isActive?: boolean
}

export const NavLink = ({ children, isActive }: Props) => {
    return (
        <li
            className={`${
                isActive && 'font-bold border-red-500 border-r-4'
            } text-gray-800 text-base cursor-pointer border-r-4 border-white`}
        >
            <a href="#" className="flex gap-2 content-center items-center px-5">
                {children}
            </a>
        </li>
    )
}
