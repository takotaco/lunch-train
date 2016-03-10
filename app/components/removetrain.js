var React = require('react');
var AppActions = require('../actions/app_actions');

var RemoveTrain = React.createClass({
	handleRemoveTrain: function () {
		AppActions.removeTrain(this.props.index);
	},
	render: function () {
		return (
			<div>
				<button onClick={this.handleRemoveTrain}>Remove Train</button>
			</div>
		)
	}
});

module.exports = RemoveTrain;