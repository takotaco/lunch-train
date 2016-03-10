var AppDispatcher = require('../dispatchers/app_dispatcher');
var AppConstants = require('../constants/app_constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var CHANGE_EVENT = 'change';

var _trains = [];

var ref = new Firebase('https://clypd-lunchtrain.firebaseio.com/');

ref.on('value', function(snapshot) {
	_trains = snapshot.val();
	TrainStore.emitChange();
});

function _addTrain(destination) {
	ref.push({
		destination: destination,
		people: {}
	});
};

function _removeTrain(index) {
	var trainRef = ref.child(index);
	trainRef.remove();
};

function _joinTrain(index, person) {
	var trainRef = ref.child(index).child('people');
	trainRef.push(person);
};

var TrainStore = assign(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
    	this.on(CHANGE_EVENT, callback)
  	},

  	removeChangeListener: function(callback){
    	this.removeListener(CHANGE_EVENT, callback)
  	},

  	getTrains: function() {
  		return _trains;
  	},

  	dispatcherIndex: AppDispatcher.register(function(payload){
    	var action = payload.action; // this is our action from handleViewAction
    	switch(action.actionType){
      		case AppConstants.JOIN_TRAIN:
        		_joinTrain(payload.action.index, payload.action.person);
        		break;

     		case AppConstants.ADD_TRAIN:
		        _addTrain(payload.action.destination);
		        break;

		    case AppConstants.REMOVE_TRAIN:
		    	_removeTrain(payload.action.index);
		    	break;
    	}

    	TrainStore.emitChange();

    	return true;
  	})
});

module.exports = TrainStore;