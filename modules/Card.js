var React = require('react');
var Card = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Título',
			subtitle: 'Subtítulo'
		};
	},
	render: function(){
		return (
			<article>
				<header>
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
				</header>
				<p>
					{this.props.children}
				</p>
			</article>
		);
	}
});
module.exports = Card;