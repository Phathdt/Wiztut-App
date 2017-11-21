import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import  { SignedIn, SignedOut, createRootNavigator } from './source/Router'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
       StatusBar.setHidden(true);
    }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

AppRegistry.registerComponent('Wiztut', () => App);
