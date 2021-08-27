import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Projetos extends React.Component {


        

    render() {
        return (
            
            <div id='projetos'>
                <h1>Meus Projetos</h1>

                <div className='cards'>

                    <section className='card' onMouseOver={this.onMouseOver}>
                        <h2>Automatização de tarefas</h2>
                        
                        <span>Devido à minha pesquisa de iniciação científica,
                            tenho feito várias apresentações (palestras e webinars) sobre tópicos de minha pesquisa.
                            Assim, sempre que termino de elaborar meus slides para minhas futuras apresentações.
                            Eu envio os respectivos arquivos por e-mail para meu orientador de modo que ele possa corrigi-los e enviá-los de volta para mim.
                            Sendo assim, eu desenvolvi o presente algoritmo a fim de automatizar essas tarefas repetitivas </span>
                            <a href="https://github.com/VinxciusRosa/automatizacao-de-tarefas-python"><button>Saiba Mais</button></a>
                    </section>

                    <section className='card'>
                        <h2>Análise exploratória - Artigo</h2>
                        <span>Este repositório trata-se de uma análise exploratória realizada a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            (litoral norte de São Paulo). Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo"><button>Saiba Mais</button></a>
                    </section>

                    <section className='card'>
                        <h2>CONICT</h2>
                        <span>Este repositório trata-se de uma análise exploratória realizada a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            (litoral norte de São Paulo). Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                        <button>Saiba Mais</button>
                    </section>
              
                    <section className='card'>
                        <h2>EFITA</h2>
                        <span>Este repositório trata-se de uma análise exploratória realizada a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            (litoral norte de São Paulo). Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                        <button>Saiba Mais</button>
                    </section>

                    <section className='card'>
                        <h2>Card 5</h2>
                        <span>Este repositório trata-se de uma análise exploratória realizada a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            (litoral norte de São Paulo). Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                        <button>Saiba Mais</button>
                    </section>

                    <section className='card'>
                        <h2>Card 6</h2>
                        <span>Este repositório trata-se de uma análise exploratória realizada a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            (litoral norte de São Paulo). Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                        <button>Saiba Mais</button>
                    </section> 
                    
                </div>  
                <h3 className="rep-git">
                    <a href="https://github.com/VinxciusRosa?tab=repositories">Repositórios no GitHub</a>
                </h3>   
            </div>
            
        ) 
    }

}        