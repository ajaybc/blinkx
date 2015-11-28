/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//var Router = require('gb-native-router');
var SessionStore = require('./js/store/SessionStore.js');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


/*var firstRoute = {
  name: 'Welcome!',
  component: HelloPage
};*/

var Blinkx = React.createClass({
  componentDidMount : function () {
    console.log(SessionStore);
  },
  render: function() {
    return (
      <Text>Test</Text>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Blinkx', () => Blinkx);
