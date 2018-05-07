var React = require('react');
var TrainCars = require('./traincars');
var JoinTrain = require('./jointrain');
var RemoveTrain = require('./removetrain');

var Train = React.createClass({
	render: function () {
		console.log('this is a train', this.props);

		var cars;
		if (this.props.people) {
			cars = (
				<div className='people'>
					<h2>The people on this train are:</h2>
				   
					<TrainCars people={this.props.people} />
				</div>
			);
		}

		return (
			<div key={this.props.index} className="train">
			   <h1>This is the train for {this.props.destination}</h1>

			  	{cars}

			   <JoinTrain index={this.props.index} />
			   <RemoveTrain index={this.props.index} />
			</div>
		)
	}
});

module.exports = Train;