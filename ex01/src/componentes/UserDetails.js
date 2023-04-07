import Conditional from "./Conditional"

const UserDetails = ({ pessoas }) => {

	return (
		<div>
			<h1>Aula</h1>
			<ul>
				{pessoas.map((obj) => (
					<li key={obj.id}>{obj.nome} - {obj.idade} - {obj.profissão}
					<Conditional idade={obj.idade} /></li>
				))}
			</ul>
		</div>
	)
}

export default UserDetails