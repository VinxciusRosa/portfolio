import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Projetos extends React.Component {


    render() {
        return (
            
            <div id='projetos'>
                <h1>Meus Projetos</h1>

                <div className='cards'>

                    <section className='card'>
                        <h2>Automatização de tarefas com Python</h2>
                        
                        <span>Devido à minha pesquisa de iniciação científica,
                            tenho realizado várias apresentações (palestras e webinars) sobre tópicos de minha pesquisa.
                            Assim, sempre que termino de elaborar meus slides para minhas futuras apresentações,
                            eu envio os respectivos arquivos por e-mail para meu orientador, de modo que ele possa corrigi-los e enviá-los novamente para mim.
                            Sendo assim, desenvolvi o presente algoritmo a fim de automatizar essas tarefas repetitivas.</span>
                            <a href="https://github.com/VinxciusRosa/automatizacao-de-tarefas-python" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                    </section>

                    <section className='card'>
                        <h2>Análise exploratória - Artigo</h2>
                        <span>Este projeto trata-se de uma análise exploratória a qual foi utilizado as bibliotecas (pandas e matplotLib) da linguagem python, a partir da importação de um questionário aplicado em
                            uma palestra de divulgação científica ministrada a alunos de uma escola municipal localizada na cidade de São Sebastião - SP
                            .Esta análise visa obter alguns insights e gerar gráficos para embasar um artigo acadêmico
                            que está sendo desenvolvido em coautoria com o meu orientador Dr. Prof. Ricardo Roberto Plaza.</span>
                            <a href="https://github.com/VinxciusRosa/analiseDadosArtigo" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                    </section>

                    <section className='card'>
                        <h2>Divulgação Científica</h2>
                        <span>Esta seção trata de projetos de extensão em atividades culturais e científicas desenvolvidas na academia, bem como de temas associados a Buracos Negros, Direitos Humanos, Inteligência Artificial, Meio Ambiente, "Negacionismo", Direitos da População LGBT e outros.<br/><br/> Todas as atividades podem ser acessadas através do link "saiba mais".</span>
                        <a href="https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho?ordering=newest&searchphrase=exact&limit=20" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                    </section>
              
                    <section className='card-breve'>
                        <h2>Em breve...</h2>
                        <span>Em breve será lançado um projeto desenvolvido na linguagem python, que desempenhará de forma autônoma as funções de geração de certificados + envio de emails.</span>
                        {/* <button>Saiba Mais</button> */}
                    </section>

                    <section className='card-breve'>
                        <h2>Em breve...</h2>
                        <span>Em breve teremos um site / blog, intitulado "Uma Dose de Ciência", que terá como objetivo principal divulgar a ciência sobre os estudos de tecnologia e astronomia.</span>
                        {/* <button>Saiba Mais</button> */}
                    </section>

                    <section className='card-breve'>
                        <h2>Em breve...</h2>
                        <span>Em breve será lançado um projeto que utilizará estudos acerca de manipulação, análise e visualização de dados.</span>
                        {/* <button>Saiba Mais</button> */}
                    </section> 
                    
                </div>  
                <h3 className="rep-git">
                    <a href="https://github.com/VinxciusRosa?tab=repositories" target="_blank" rel="noopener noreferrer">Repositórios no GitHub</a>
                </h3>   
            </div>
            
        ) 
    }

}        