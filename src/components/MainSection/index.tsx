import React from 'react'
import { ActionsSection } from '../ActionsSection'
import { HeaderSection } from '../HeaderSection'
import { LastRecipesSection } from '../LastRecipes'
import { MoreRecipesSection } from '../MoreRecipes'

export const MainSection = () => {
    return (
        <main className="px-16 py-6">
            <ActionsSection />
            <HeaderSection />
            <LastRecipesSection />
            <MoreRecipesSection />
        </main>
    )
}
