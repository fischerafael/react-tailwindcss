import React from 'react'
import { Button } from '../../Button'

export const ActionsSection = () => {
    return (
        <div className="flex justify-center md:justify-end gap-4 pb-10">
            <Button>Entrar</Button>
            <Button variant="outline">Cadastrar</Button>
        </div>
    )
}
