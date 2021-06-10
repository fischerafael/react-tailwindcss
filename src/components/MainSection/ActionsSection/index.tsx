import React from 'react'
import { Button } from '../../Button'

export const ActionsSection = () => {
    return (
        <div className="flex justify-center md:justify-end gap-4 pt-16 md:pt-0 pb-16">
            <Button>Entrar</Button>
            <Button variant="outline">Cadastrar</Button>
        </div>
    )
}
