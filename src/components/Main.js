import React from 'react';
import Home from './main/Home';
import Sobre from './main/Sobre';
import Projetos from './main/Projetos';
import Conhecimentos from './main/Conhecimentos';
import Afins from './main/Afins';

export default class Main extends React.Component {

    render() {
        return ( 
            <div className="main">
                <Home/>
                <Sobre/>
                <Projetos/>
                <Conhecimentos/>
                <Afins/>
            </div>
        )
    }
    
}