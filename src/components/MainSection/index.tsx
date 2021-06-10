import React from 'react'
import { ActionsSection } from './ActionsSection'
import { HeaderSection } from './HeaderSection'
import { LastRecipesSection } from './LastRecipes'
import { MoreRecipesSection } from './MoreRecipes'

export const MainSection = () => {
    return (
        <main className="px-16 py-6 bg-gray-50 md:col-span-3">
            <ActionsSection />
            <HeaderSection />
            <LastRecipesSection />
            <MoreRecipesSection />
        </main>
    )
}
