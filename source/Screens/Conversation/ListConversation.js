import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class ListConversation extends Component {
  render() {
    return (
      <View>
        <Button
          title="DetailConversation"
          onPress={() => this.props.navigation.navigate("DetailConversation")}
        />
        <Button
          title="AddNewConversation"
          onPress={() => this.props.navigation.navigate("AddNewConversation")}
        />
        <Button
          title="InformationConversation"
          onPress={() => this.props.navigation.navigate("InformationConversation")}
        />
        <Button
          title="UpdateConversation"
          onPress={() => this.props.navigation.navigate("UpdateConversation")}
        />

      </View>
    );
  }
}
