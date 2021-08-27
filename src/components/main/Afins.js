import React from 'react';

export default class hobbies extends React.Component {

    render() {
        return (
            <div id='afins'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#690394" fill-opacity="0.6" d="M0,96L60,80C120,64,240,32,360,48C480,64,600,128,720,133.3C840,139,960,85,1080,58.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <h1 className='title-afins'>Afins</h1>

                <div className='eventos'>
                    <div className='title-eventos'>
                        <h1>Eventos</h1>
                        <p>que Organizei</p>
                    </div>
                    <div className='cards-eventos'>
                        <h1>CARDS EVENTOS</h1>
                    </div>
                </div>


                <div className='publicacoes'>
                    <div className='title-publi'>
                        <h1>Publicações</h1>
                        <p>artigos e afins</p>
                    </div>
                    <div className='cards-publi'>
                        <section className='card-p1'>
                            <span>O TEMA DA INTELIGÊNCIA ARTIFICIAL INSERIDO EM ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA (CONICT 2020)</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE O ESTUDO DA INTELIGÊNCIA ARTIFICIAL (SICLN 2020)</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ENFATIZANDO AS INTERRELAÇÕES ENTRE ASTROFÍSICA E COMPUTAÇÃO EM ATIVIDADES DE EDUCAÇÃO CIENTÍFICA (ITA 2020)</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE A PRIMEIRA IMAGEM REGISTRADA DE UM BURACO NEGRO (2020)</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>BURACOS NEGROS E COMPUTAÇÃO NA DIVULGAÇÃO CIENTÍFICA (CONICT 2019)</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE A PRIMEIRA IMAGEM REGISTRADA DE UM BURACO NEGRO</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                        </section>
                    </div>
                </div>

                
                <div className='divulgacao-cientifica'>
                    <div className='title-dc'>
                        <h1>Divulgação Científica</h1> 
                        <p>extensão e afins</p>
                    </div>    
                    <div className='cards-ciencia'>
                        <h1>CARD DC</h1>
                    </div>
                </div>
                
            </div>
                    
        );
    }
}