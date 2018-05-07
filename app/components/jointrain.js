var React = require('react');
var AppActions = require('../actions/app_actions');

var JoinTrain = React.createClass({
	getInitialState: function(){
		return {
			name: '',
		};
	},
	joinHandler: function () {
		var $input = $('#' + this.props.index + '.name');
		AppActions.joinTrain(this.props.index, this.state.name);
		$input.val('');
	},
	inputChange: function (e) {
		this.setState({
			name: e.currentTarget.value
		});
	},
	render: function () {
		return (
			<div>
				<input id={this.props.index} className='name' onChange={this.inputChange} type='text' placeholder='your name'></input>
				<button onClick={this.joinHandler}>Join</button>
			</div>
		)
	}
});

module.exports = JoinTrain;