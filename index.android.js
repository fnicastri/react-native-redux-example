import React from 'react';
import { AppRegistry } from 'react-native';
import createApp from './src';

const App = createApp(React);

AppRegistry.registerComponent('MyApp', () => App ) ;

//react-native-redux-template
//MyApp