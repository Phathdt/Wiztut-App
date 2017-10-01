import React, { Component } from 'react';

import { View, Button } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#25D366'

export default class AddAvatar extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Done"
          onPress={() => this.props.navigation.navigate("SignedIn")}
        />
      </View>
    );
  }
}
