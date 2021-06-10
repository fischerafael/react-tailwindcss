import React from 'react'
import { RecipeCard } from './RecipeCard'

export const LastRecipesSection = () => {
    return (
        <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Últimas Receitas
            </h4>

            <div className="mt-8">
                <RecipeCard />
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Mais populares
            </h4>

            <div className="mt-8"></div>
        </div>
    )
}
