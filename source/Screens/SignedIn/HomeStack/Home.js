import React, { Component } from "react";

import { View, Button, AsyncStorage, Text } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };
    this.takeToken();
  }

  async takeToken() {
    try {
      let value = await AsyncStorage.getItem("Token");
      if (value !== null) {
        this.setState({
          token: value
        });
      }
    } catch (error) {}
  }

  render() {
    return (
      <View>
        <Button
          title="Conversation"
          onPress={() => this.props.navigation.navigate("Conversation")}
        />
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Button
          title="ListProfile"
          onPress={() => this.props.navigation.navigate("ListProfile")}
        />
        <Button
          title="ListCoursePost"
          onPress={() => this.props.navigation.navigate("ListCoursePost")}
        />
        <Button
          title="DetailCoursePost"
          onPress={() => this.props.navigation.navigate("DetailCoursePost")}
        />
        <Button
          title="AddCoursePost"
          onPress={() => this.props.navigation.navigate("AddCoursePost")}
        />
        <Button
          title="ListTeacherPost"
          onPress={() => this.props.navigation.navigate("ListTeacherPost")}
        />
        <Button
          title="DetailTeacherPost"
          onPress={() => this.props.navigation.navigate("DetailTeacherPost")}
        />
        <Button
          title="AddTeacherPost"
          onPress={() => this.props.navigation.navigate("AddTeacherPost")}
        />
      </View>
    );
  }
}
