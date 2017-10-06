import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View>
        <Button
          title="SignedIn"
          onPress={() => this.props.navigation.navigate("SignedIn")}
        />
      </View>
    );
  }
}
