import React, { Component } from 'react';

import { View, Button } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#647687'

class Introduction extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Get ready?"
          onPress={() => this.props.navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}

export default Introduction;
