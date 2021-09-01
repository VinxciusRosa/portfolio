import React from 'react';

export default class Contact extends React.Component {

    render() {
        return (
            <div id='contact'>
                <h1>Contato</h1>
                 
                <h3 className='email'><img src='./img/gmail.png' width='35'/>v.rosa@aluno.ifsp.edu.br</h3>   
                    <ul>
                        <a href="https://www.linkedin.com/in/vinicius-carvalho-rosa/" target="_blank" rel="noopener noreferrer"><li><p>Linkedin</p></li></a>
                    
                        <a href='https://github.com/VinxciusRosa' target="_blank" rel="noopener noreferrer"><li><p>GitHub</p></li></a>
                        
                        <a href='https://www.instagram.com/vinxcin/' target="_blank" rel="noopener noreferrer"><li><p>Instagram</p></li></a>
                    </ul>
                    
            </div>
        );
    }
}