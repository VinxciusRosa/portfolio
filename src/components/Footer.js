import React from 'react';
import Contact from './footer/Contact'


export default class Footer extends React.Component {

    render() {
        return ( 
            <div id="footer">
                <hr />
                <Contact/>
                
                <h1> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 292"><path fill="#4e2361" fill-opacity="0.8" d="M0,32L34.3,48C68.6,64,137,96,206,133.3C274.3,171,343,213,411,229.3C480,245,549,235,617,245.3C685.7,256,754,288,823,282.7C891.4,277,960,235,1029,234.7C1097.1,235,1166,277,1234,277.3C1302.9,277,1371,235,1406,213.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>Made by - Vincius Carvalho Rosa 🪐</h1>
                
            </div>
        );
    }
}