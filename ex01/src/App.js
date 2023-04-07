import './App.css';
import UserDetails from './componentes/UserDetails';
import { useState } from "react";

function App() {
	const [pessoas] = useState(
		[{ id: 1, nome: "lucas", idade: 23, profissão: "estudante" },
		{ id: 2, nome: "Daniela", idade: 39, profissão: "atendente" },
		{ id: 3, nome: "Silvia", idade: 49, profissão: "jardineira" }]);

	return (
		<div className="App">
			<UserDetails pessoas={pessoas} />
		</div>
	);
}

export default App;
