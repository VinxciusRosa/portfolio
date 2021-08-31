import React from 'react';
import Nav from './header/Nav'
import ButtonMob from './header/ButtonMob'

export default class Header extends React.Component {

    render() {
        return ( 
            <div id="header">
                <Nav/>
                <ButtonMob />
            </div>
        )
    }
}