import React, { Component } from 'react';

import { View, Button } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#d80073'
export default class SignIn extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Log In App"
          onPress={() => this.props.navigation.navigate("SignedIn")}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Dont have a Account ? Click me !"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
