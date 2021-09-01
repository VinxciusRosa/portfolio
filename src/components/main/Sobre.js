import React from 'react';


export default class Sobre extends React.Component {

    render() {
        return (
          
            <div id='sobre'>
                
                <div className='gif-sobre'>
                    <img src="/img/imagem-sobre.png" width='50%' />    
                </div>
                <div className='description'>
                    <h1>Sobre mim</h1>
                    <p>Meu nome é Vinicius, tenho 20 anos, moro no Brasil,
                        especificamente no município de Caraguatatuba - SP.
                        Sou divulgador científico, pesquisador com bolsa PIBIFSP, e atualmente estou no último ano da graduação no curso de Tecnologia em Análise e Desenvolvimento de Sistemas
                        do Instituto Federal de Ciência e Tecnologia de São Paulo.
                    </p><br/>
                    
                    <p>
                    Nos últimos meses, venho estudando, de forma independente,
                    algumas das ferramentas tecnológicas que não foram repassadas ou aprofundadas na academia.
                    Desde 2020, venho me aprofundando no campo da ciência de dados,
                    especialmente em estudos sobre manipulação, análise e visualização de dados.
                    </p>
                    
                    <a href='./assets/CV_Vinicius-Carvalho-Rosa.pdf' target="_blank" rel="noopener noreferrer" className="myCV">
                        <img src='./img/cv.png' alt='my cv'/>
                       My CV
                    </a>
                    
                    {/* <a href='http://lattes.cnpq.br/9394309062581984' target="_blank" rel="noopener noreferrer" className="myCV">
                        <img src='./img/cv.png' alt='cv lattes'/>
                       CV Lattes
                    </a> */}

                </div>
            
            </div>
            
        );
    }
}