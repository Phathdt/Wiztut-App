import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Button
          title="SignedIn"
          onPress={() => this.props.navigation.navigate("SignedIn")}
        />
        <Button
          title="SignUp"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
