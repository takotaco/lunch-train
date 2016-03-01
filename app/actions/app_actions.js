var AppConstants = require('../constants/app_constants');
var AppDispatcher = require('../dispatchers/app_dispatcher');

var AppActions = {
  joinTrain: function(index, person) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.JOIN_TRAIN,
      index: index,
      person: person
    })
  },
  addTrain: function(destination) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_TRAIN,
      destination: destination
    })
  },
  removeTrain: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_TRAIN,
      index: index
    })
  }
}

module.exports = AppActions;