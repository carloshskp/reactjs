var React = require('react');
var Card = require('./Card');
// Os dados que vamos utilizar nos cards (poderiam prover de um request em alguma api, por exemplo)
var data = [
	{
		title: "Componente 1",
		subtitle: "Aqui será o subtítulo",
		content: "Tudo escrito aqui fica no this.props.children"
	},
	{
		title: "Componente 2",
		subtitle: "subtítulo 2",
		content: "Conteúdo do card"
	},
];
var Index = React.createClass({
	// Definição de estado inicial
	getInitialState: function() {
		return {
			cards: []
		}
	},
	// Depois de montar o componente
	componentDidMount: function() {
		// Variável data recebe os cartões com dados
		// à partir da função map, que nos permite percorrer todo o array
		// e retornar os valores
		data = data.map(function(card) {
			return <Card title={card.title} subtitle={card.subtitle}>{card.content}</Card>;
		})
		// Alterando estado do componente
		this.setState({
			cards: data
		});
	},
	render: function(){
		// na linha 40 estamos exibindo cards guardados no state cards
		return (
				<section className="container">
					{this.state.cards}
				</section>
			);
	}
});
module.exports = Index;