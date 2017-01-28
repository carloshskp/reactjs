var React = require('react');
// Criação do componente
var Index = React.createClass({
	// Função render
	render: function(){
		// Como retorno podemos escrever JSX colocando tags html e componentes
		return (
				<h1>Show! :D</h1>
			);
	}
});
// Exportando o componente
module.exports = Index;