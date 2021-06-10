import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div>
                <nav>
                    <div>
                        <h1>
                            <a href="/">RecFryer</a>
                        </h1>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Sobre</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Contato</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main>
                <div>
                    <a href="#">Entrar</a>
                    <a href="#">Cadastrar</a>
                </div>

                <header>
                    <h2>Receitas</h2>
                    <h3>Para AirFryer</h3>
                </header>

                <div>
                    <h4>Últimas Receitas</h4>

                    <div>
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

                    <h4>Mais populares</h4>

                    <div></div>
                </div>

                <div>
                    <div>Carregar mais...</div>
                </div>
            </main>
        </div>
    )
}

export default HomePage
