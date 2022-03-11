import "./style.scss";
import { FaGithub} from "react-icons/fa" ;



export function Projetos(){
	return (
		<div id="projetos">
			<h1>Projetos</h1>
			<div className="card-projeto">
				<div className="cards">
					<h1 translate="no">CertiPy </h1>
					<p>Gerador de Certificado <span>&</span>Envio de e-mail Automático</p>	
					<a href="https://github.com/VinxciusRosa/CertiPy/blob/main/README.md" target="_blank" rel="noopener noreferrer">
						<button><FaGithub/>GitHub</button>
					</a>
				</div>



				<div className="cards">
					<h1 translate="no" >AutoPy</h1>
					<p>Automatização de tarefas com Python</p>	
					<a href="https://github.com/VinxciusRosa/automatizacao-de-tarefas-python" target="_blank" rel="noopener noreferrer">
						<button><FaGithub/>GitHub</button>
					</a>
				</div>


				<div className="cards">
					<h1>Em breve...</h1>
					<p>Olá! aguarde até  o  próximo projeto ...</p>
					
					<a href="" target="_blank" rel="noopener noreferrer">
						<button><FaGithub/>GitHub</button>
					</a>
				</div>

			</div>
		</div>
	);
}