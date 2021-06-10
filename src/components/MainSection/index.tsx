import React from 'react'

export const MainSection = () => {
    return (
        <main className="px-16 py-6">
            <div>
                <a href="#">Entrar</a>
                <a href="#">Cadastrar</a>
            </div>

            <header>
                <h2 className="text-gray-800 text-6xl font-semibold">
                    Receitas
                </h2>
                <h3 className="text-2xl font-semibold">Para AirFryer</h3>
            </header>

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                    Últimas Receitas
                </h4>

                <div className="mt-8">
                    <div>
                        <img
                            src="https://s2.glbimg.com/PiQjmv_CNRurQMf8stNnxem3tyw=/0x0:600x387/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/P/D/hgO8L8SAKl5Ty9IQs9nA/bolinho-de-arroz-crocante.jpg"
                            alt="airfryer"
                        />
                        <div>
                            <span>Bolinho de arroz</span>
                            <span>Receita por @fischerafael</span>
                        </div>
                    </div>
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                    Mais populares
                </h4>

                <div className="mt-8"></div>
            </div>

            <div>
                <div>Carregar mais...</div>
            </div>
        </main>
    )
}
