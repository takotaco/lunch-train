var React = require('react');
var TrainStore = require('../stores/train_store');
var Train = require('./train');
var AddTrain = require('./addtrain');

function getTrains() {
	return {trains: TrainStore.getTrains()};
}

var Main = React.createClass({
	getInitialState: function(){
		return getTrains();
	},
	componentWillMount:function(){
    	TrainStore.addChangeListener(this._onChange)
  	},
  	_onChange: function(){
    	this.setState(getTrains())
  	},
	render: function () {
		var trains = this.state.trains;

		var reactTrains
		if (trains) {
			reactTrains = Object.keys(trains).map(function(index) {
				train = trains[index];
				return <Train destination={train.destination} people={train.people} key={index} index={index} />
			});
		}

		return (
			<div className="main-container">
			   hello lunchers!
			   <AddTrain />
			   {reactTrains}
			</div>
		)
	}
});

module.exports = Main;