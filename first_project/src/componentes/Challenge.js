

const Challenge = () => {
	const num1 = (Math.random() * 10).toFixed();
	const num2 = (Math.random() * 10).toFixed();
	const handleExpression = () => {
		console.log(parseInt(num1) + parseInt(num2));
	};


	return (
		<div>
			<h1>Numero1 ={'>'} {num1} + Numero2 ={'>'} {num2}</h1>
			<button onClick={handleExpression}>Clique para calcular</button>
		</div>
);
};

export default Challenge;