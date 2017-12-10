import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import  { SignedIn, SignedOut, createRootNavigator } from './Router'
import { Provider } from 'react-redux';
import store from './redux/store';

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
    return(
          <Provider store={store}>
            <Layout />
          </Provider>
    )
  }
}

AppRegistry.registerComponent('Wiztut', () => App);
