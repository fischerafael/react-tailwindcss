import React from 'react'
import { MainSection } from '../components/MainSection'
import { NavBar } from '../components/NavBar'

const HomePage = () => {
    return (
        <div className="text-gray-500 grid md:grid-cols-4">
            <NavBar />
            <MainSection />
        </div>
    )
}

export default HomePage
