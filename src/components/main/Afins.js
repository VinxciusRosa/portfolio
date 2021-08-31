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
            autoplaySpeed: 3025,
            cssEase: "linear",
            adaptiveHeight: true,
            fade: true,

        };
    
        return (
            <div id='afins'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#690394" fill-opacity="0.6" d="M0,96L60,80C120,64,240,32,360,48C480,64,600,128,720,133.3C840,139,960,85,1080,58.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <h1 className='title-afins'>Afins...</h1>

                <div className='publicacoes'>
                    <div className='title-publi'>
                        <h1>Publicações</h1>
                        <p>artigos e afins</p>
                    </div>
                    <div className='cards-publi'>

                        <section className='card-p1'>
                            <span>ENFATIZANDO AS INTERRELAÇÕES ENTRE ASTROFÍSICA E COMPUTAÇÃO EM ATIVIDADES DE EDUCAÇÃO CIENTÍFICA (ITA 2021)</span>
                            <a href="https://www.efita.ita.br/wp-content/uploads/2021/07/LivroResumosXIVEFITA5.pdf#page=68"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE A PRIMEIRA IMAGEM REGISTRADA DE UM BURACO NEGRO (1º SDC -IFSP 2021)</span>
                            <a href="https://www.ifsp.edu.br/images/2021/julho/Caderno_de_Resumos_-_1o_Seminrio_de_DC_do_IFSP.pdf#page=26"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>O TEMA DA INTELIGÊNCIA ARTIFICIAL INSERIDO EM ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA (CONICT 2020)</span>
                            <a href="http://ocs.ifsp.edu.br/index.php/conict/xiconict/paper/view/6852"><button>Saiba Mais</button></a>
                        </section>

                        <section className='card-p1'>
                            <span>ATIVIDADES DE DIVULGAÇÃO CIENTÍFICA SOBRE O ESTUDO DA INTELIGÊNCIA ARTIFICIAL (SICLN 2020)</span>
                            <a href="https://ocs.ifspcaraguatatuba.edu.br/sicln/x-sicln/paper/viewFile/303/113"><button>Saiba Mais</button></a>
                        </section>
                        

                        <section className='card-p1'>   
                            <span>BURACOS NEGROS E COMPUTAÇÃO NA DIVULGAÇÃO CIENTÍFICA (CONICT 2019)</span>
                            <a href="http://ocs.ifsp.edu.br/index.php/conict/xconict/paper/view/5922/1271"><button>Saiba Mais</button></a>
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
                        
                        <Slider {...settings}>
                            <div>
                                <a href='https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho'><img src='./img-dc/um.jpg'/></a>
                            </div>
                            <div>
                                <img src='./img-dc/dois.jpg'/>
                            </div>
                            <div>
                                <img src='./img-dc/tres.jpg'/>
                            </div>
                            <div>
                                <img src='./img-dc/um.jpg'/>
                            </div>
                            <div>
                                <img src='./img-dc/tres.jpg'/>
                            </div>
                            <div>
                                <img src='./img-dc/um.jpg'/>
                            </div>
                        </Slider>

                    </div>
                    
                </div>
                
            </div>
                    
        );
        
    }
    
}