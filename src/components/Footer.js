import React from 'react';
import Contact from './footer/Contact'


export default class Footer extends React.Component {

    render() {
        return ( 
            <div id="footer">
                <Contact/>
                <h1> Made by - Vincius Carvalho Rosa 🪐</h1>
            </div>
        );
    }
}