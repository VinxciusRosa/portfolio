import "./style.scss";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Avatar from "./../../assets/img/avatar.png";
// import CV from "./../../assets/img/CV.pdf";


export function Sobre(){
	return (
		<div id="sobre-mim">
			<img src={Avatar} alt="avatar" />

			<div className="sobre-descricao">
				<h1>Sobre mim</h1>
				<p>Meu nome é Vinicius, tenho 21 anos, moro no Brasil, especificamente no município de São Carlos - SP. Atualmente trabalho na BlueShift Brasil como Engenheiro de Dados Jr.
					<br/><br/>
					Sou graduado no curso de Análise e Desenvolvimento de Sistemas. Durante a graduação, fui bolsista de iniciação científica e bolsista de extensão.
				</p>
				{/* <a href={CV} >
					<button><AiOutlineCloudDownload/> Currículo</button>
				</a> */}
			</div>
		</div>
	);
}