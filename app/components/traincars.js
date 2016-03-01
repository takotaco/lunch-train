var React = require('react');

var TrainCars = React.createClass({
	render: function () {
		var people = this.props.people;

		var cars = Object.keys(people).map(function(key) {
			person = people[key];
			return <div key={key}> {person} </div>
		});

		return (
		<div className="Train Car">
			{cars}
		</div>
		)
	}
});

module.exports = TrainCars;