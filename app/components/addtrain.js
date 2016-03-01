var React = require('react');
var AppActions = require('../actions/app_actions');

var AddTrain = React.createClass({
	getInitialState: function(){
		return {
			destination: '',
		};
	},
	inputChange: function (e) {
		this.setState({
			destination: e.currentTarget.value
		});
	},
	handleAddTrain: function () {
		var $input = $('input.add-train');
		AppActions.addTrain(this.state.destination);
		$input.val('');
	},
	render: function () {
		return (
			<div>
				<input className='add-train' onChange={this.inputChange} type='text' placeholder='lunch train destination'></input>
				<button onClick={this.handleAddTrain}>Add Train</button>
			</div>
		)
	}
});

module.exports = AddTrain;