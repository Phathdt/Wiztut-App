import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Button
          title="List Conversation"
          onPress={() => this.props.navigation.navigate("ListConversation")}
        />
        <Button
          title="SignedOut"
          onPress={() => this.props.navigation.navigate("SignedOut")}
        />
        
      </View>
    );
  }
}
