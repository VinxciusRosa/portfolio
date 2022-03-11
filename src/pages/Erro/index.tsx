import { Link } from 'react-router-dom';
import "./style.scss";

export function Erro(){
    return (
        <div id="page-erro">
            <div className="container">
                <span className="error-mensage">404</span>
                <span>Desculpe, mas parece que essa página não existe!</span>
                
                <div className="button-container">
                    <Link className='link' to="/">Home</Link>
                </div>
            </div>  
        </div>
    );
}