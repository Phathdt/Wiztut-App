import React, { Component } from 'react';

import { View, Button } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#f0a30a'

class Profile extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Sign Out"
          onPress={() => this.props.navigation.navigate("SignedOut")}
        />
      </View>
    );
  }
}

export default Profile;
