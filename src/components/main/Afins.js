import React from 'react';

export default class hobbies extends React.Component {

    render() {
        return (
            <div id='afins'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4e2361" fill-opacity="0.8" d="M0,160L21.8,149.3C43.6,139,87,117,131,96C174.5,75,218,53,262,58.7C305.5,64,349,96,393,112C436.4,128,480,128,524,154.7C567.3,181,611,235,655,229.3C698.2,224,742,160,785,138.7C829.1,117,873,139,916,165.3C960,192,1004,224,1047,224C1090.9,224,1135,192,1178,165.3C1221.8,139,1265,117,1309,117.3C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                 <h1 className='title-afins'>Afins</h1>

                <div className='eventos'>
                    <div className='cards-eventos'>
                        <h1>CARDS EVENTOS</h1>
                        
                    </div>
                    <h1>Eventos que Organizei</h1>
                </div>


                <div className='publicacoes'>
                    <h1>Publicações</h1>
                    <div className='cards-publi'>
                        <h1>CARD PUBLICAÇÕES</h1>
                    </div>
                    
                </div>
                
            </div>
                    
        );
    }
}