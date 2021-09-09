import React from 'react';

export default class Conhecimentos extends React.Component {

    render() {
        return (
            
            <div id='conhecimentos'>
                
                <div className='title'>
                    <h1>Conhecimentos</h1>
                    <p>Linguagens e Ferramentas</p>
                </div>

                <div className='cards-conhecimentos' > 
                    <div className='card-c1'>
                        <img src='./img/python.svg'/>
                        <img src='./img/jupyter.svg'/>
                        <img src='./img/numpy.svg'/>
                        <img src='./img/mysql.svg'/>
                    </div>
                    
                    <div className="card-c2">
                        <img src='./img/html5.svg'/>
                        <img src='./img/css3.svg'/>
                        <img src='./img/javascript.svg'/>
                        <img src='./img/linux.svg'/>
                    </div>
                    <div id='certificados'>
                        <a href='https://github.com/VinxciusRosa/certificados' target="_blank" rel="noopener noreferrer"><button>Certificados</button></a>
                    </div> 
                </div> 
                  
            </div>
            
        )
    }
}