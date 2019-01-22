/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://uzete38.app.superagendador.com/#/principal'}}
        style={{marginTop: 20}}
      />
    );
  }
}

