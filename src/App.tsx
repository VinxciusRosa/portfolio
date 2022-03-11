import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sobre } from "./components/Sobre-mim";
import { Projetos } from "./components/Projetos";
import { Conhecimentos } from "./components/Conhecimentos";
import { Ciencia } from "./components/Ciencia";
import {Home} from "./components/Home"

export default function App() {
	return (
		<main>
			<Header />
			<Home/>
			<Sobre/>
			<Projetos/>
			<Conhecimentos/>
			<Ciencia/>
			<Footer />
		</main>
	);
}
