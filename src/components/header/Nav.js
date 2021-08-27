import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {

    render() {
        return ( 
            <div className='nav'>
                <h1 id='logo'>
                    Portfólio	
                </h1>    
                <ul className='nav-menu'>
                    <li><AnchorLink href='#sobre'>Sobre mim</AnchorLink></li>
                    <li><AnchorLink href='#projetos'>Projetos</AnchorLink></li>
                    <li><AnchorLink href='#conhecimentos'>Conhecimentos</AnchorLink></li>
                    <li><AnchorLink href='#hobbies'>Hobbies</AnchorLink></li>
                </ul>
            </div>
        );
    }
}