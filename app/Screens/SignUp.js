import React, { Component } from 'react';

import { View, Button } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#f472d0'
export default class SignUp extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("AddAvatar")}
        />
      </View>
    );
  }
}
