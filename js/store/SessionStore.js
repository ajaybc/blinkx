'use strict';

var React = require('react-native');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
//var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} = React;

var _sessionData = {};

var SessionStore = assign({}, EventEmitter.prototype, {
  getInitialSession : function () {
    var p = new Promise(
      function (resolve, reject) {
        AsyncStorage.getItem('session').then(function (rawResult) {
          var result = JSON.parse(rawResult);
        });
      }
    )
    
  }, 
  saveSession: function (data) {
    _sessionData = {
        firstName : sessionData.firstName,
        lastName : sessionData.lastName,
        token : sessionData.token
    }
    AsyncStorage.setItem('session', JSON.stringify(_sessionData));
    this.emitChange();
  }, 

  emitChange: function() {
    this.emit('change');
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }



});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        SessionStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = SessionStore;