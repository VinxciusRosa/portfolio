import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Afins extends React.Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll:1,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 2200,
            // cssEase: "linear",
            adaptiveHeight: true,
            fade: true,
            lazyLoad: true,
        };
    
        return (
            <div id='afins'>
               <h1 className='title-afins'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#690394" fill-opacity="0.5" d="M0,96L60,80C120,64,240,32,360,48C480,64,600,128,720,133.3C840,139,960,85,1080,58.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
               afins...</h1>
                
                <div className='publicacoes'>
                    <div className='title-publi'>
                        <h1>Publicações</h1>
                        <p>artigos e afins</p>
                    </div>
                    <div className='cards-publi'>

                        <section className='card-p1'>
                            <span>ENFATIZANDO AS INTERRELAÇÕES ENTRE ASTROFÍSICA E COMPUTAÇÃO EM ATIVIDADES DE EDUCAÇÃO CIENTÍFICA (ITA 2021)</span>
                            <a href="https://www.efita.ita.br/wp-content/uploads/2021/07/LivroResumosXIVEFITA5.pdf#page=68" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE A PRIMEIRA IMAGEM REGISTRADA DE UM BURACO NEGRO (1º SDC -IFSP 2021)</span>
                            <a href="https://www.ifsp.edu.br/images/2021/julho/Caderno_de_Resumos_-_1o_Seminrio_de_DC_do_IFSP.pdf#page=26" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>O TEMA DA INTELIGÊNCIA ARTIFICIAL INSERIDO EM ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA (CONICT 2020)</span>
                            <a href="http://ocs.ifsp.edu.br/index.php/conict/xiconict/paper/view/6852" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE O ESTUDO DA INTELIGÊNCIA ARTIFICIAL (SICLN 2020)</span>
                            <a href="https://ocs.ifspcaraguatatuba.edu.br/sicln/x-sicln/paper/viewFile/303/113" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>
                        

                        <section className='card-p1'>   
                            <span>BURACOS NEGROS E COMPUTAÇÃO NA DIVULGAÇÃO CIENTÍFICA (CONICT 2019)</span>
                            <a href="http://ocs.ifsp.edu.br/index.php/conict/xconict/paper/view/5922/1271" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>BURACOS NEGROS E DIVULGAÇÃO CIENTÍFICA (SICLN 2019)</span>
                            <a href=".\assets\SICLN_2019 - BURACOS NEGROS E DIVULGAÇÃO CIENTÍFICA.pdf" target="_blank" rel="noopener noreferrer"><button>Saiba Mais</button></a>
                        </section>
                    </div>
                </div>
                
                <div className='divulgacao-cientifica'>
                    <div className='title-dc'>
                        <h1>Divulgação Científica</h1> 
                        <p>extensão e afins</p>
                    </div>    
                    
                    <div className='cards-ciencia'>
                        <h1>Para saber mais, clique na imagem...</h1>
                        <Slider {...settings}>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/5-minicurso-de-astronomia-do-ifsp-caraguatatuba-contou-com-ampla-participacao' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-1.jpg' alt='foto da apresentação do vinicius rosa no mini curso de astronomia'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/5-minicurso-de-astronomia-do-ifsp-caraguatatuba-contou-com-ampla-participacao' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-2.jpg' alt='foto dos alunos que ajudaram a organizar o evento'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-do-ifsp-realizaram-palestras-sobre-astrofisica-na-escola-cynthia-cliquet' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-3.jpg' alt='Foto: Professor Ricardo e estudantes do IFSP em frente à Escola Cynthia Cliquet'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-do-ifsp-realizaram-palestras-sobre-astrofisica-na-escola-cynthia-cliquet' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-4.jpg' alt='Foto: Alunos da Escola Cynthia Cliquet presentes nas atividades'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-da-escola-avelar-visitaram-o-ifsp-e-assistiram-apresentacoes-cientificas' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-5.jpg' alt='Foto: Apresentação de Vinicius Carvalho sobre buracos negros'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-da-escola-avelar-visitaram-o-ifsp-e-assistiram-apresentacoes-cientificas' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-6.jpg' alt='Foto: Alunos da Escola Avelar juntamente com o professor Francisco'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/estudantes-do-ifsp-assistiram-qualificacao-de-doutorado-em-fisica-no-ita' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-7.jpg' alt='Foto: Vinicius, Ryan, Douglas, João e Rafael no ITA'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/apresentacoes-cientificas-foram-feitas-em-escola-de-massaguacu' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-8.jpg' alt='Yeté, Nicoli, Vinicius e professor Ricardo Plaza na entrada da Escola Bendito Carlota'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/apresentacoes-cientificas-foram-feitas-em-escola-de-massaguacu' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-9.jpg' alt='Alunos da Escola Benedito Carlota durante as apresentações'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/apresentacoes-cientificas-foram-feitas-em-escola-de-massaguacu' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-10.jpg' alt='Apresentação de Vinicius Carvalho Rosa na Escola Benedito Carlota'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/flashmob-com-videos-curtos-abordou-as-queimadas-na-amazonia' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-11.png' alt='Foto: Alunos que ajudaram na preparação do flashmob do período da tarde'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-do-ifsp-realizaram-apresentacoes-cientificas-na-escola-aurea' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-12.png' alt='Foto: Apresentação de Vinicius Carvalho na Escola Aurea'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/alunos-do-ifsp-realizaram-apresentacoes-cientificas-na-escola-aurea' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-13.png' alt='Foto: André, Nicoli, Vinicius Amaral e Vinicius Carvalho na praia de Maranduba'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/trabalhos-de-fisica-sao-apresentados-no-seminario-de-iniciacao-cientifica' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-14.png' alt='Foto: Apresentação do trabalho de Vinicius Carvalho'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/acao-de-extensao-debateu-as-queimadas-no-pantanal-e-na-amazonia' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-15.jpg' alt='Foto: Pesquisadores e estudantes debatem acerca das queimadas no Pantanal e na Amazônia'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/atividade-de-extensao-debateu-os-direitos-da-populacao-lgbt' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-16.png' alt='Foto: Ricardo, Danilo, Melissa e Vinicius'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/atividade-de-extensao-debateu-o-dia-mundial-do-meio-ambiente' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-17.jpeg'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/atividade-de-extensao-discutiu-a-inteligencia-artificial-e-a-filosofia-da-mente' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-18.png' alt='Apresentação Vinicius Carvalho'/></a>
                            </div>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/noticias/web-seminario-do-ifsp-caraguatatuba-tratou-do-tema-da-astroinformatica' target="_blank" rel="noopener noreferrer"><img src='./dc-depois/dc-19.jpg' alt='banner da atividade'/></a>
                            </div>
                        </Slider>

                    </div>
                    
                </div>
                
            </div>
                    
        );
        
    }
    
}