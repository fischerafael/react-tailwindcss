import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    variant?: 'main' | 'ghost' | 'outline' | 'secondary'
}

export const Button = ({ children, variant }: Props) => {
    if (variant === 'outline')
        return (
            <button
                className="
                    border-2 
                    border-red-600 
                    rounded-full 
                    uppercase 
                    text-xs 
                    py-2 
                    px-4 
                    text-red-600 
                    font-bold 
                    tracking-widest 
                    cursor-pointer"
            >
                <a href="#">{children}</a>
            </button>
        )

    if (variant === 'ghost')
        return (
            <button className=" rounded-full uppercase text-xs py-2 px-4 text-red-600 font-bold tracking-widest cursor-pointer">
                <a href="#">{children}</a>
            </button>
        )

    if (variant === 'secondary')
        return (
            <button className="hover:bg-white hover:text-gray-300 duration-500 bg-gray-300 rounded-full uppercase text-xs py-2 px-4 text-white font-bold tracking-widest cursor-pointer">
                <a href="#">{children}</a>
            </button>
        )

    return (
        <button className="hover:bg-white hover:text-red-600 duration-500 bg-red-600 rounded-full uppercase text-xs py-2 px-4 text-white font-bold tracking-widest cursor-pointer">
            <a href="#">{children}</a>
        </button>
    )
}
