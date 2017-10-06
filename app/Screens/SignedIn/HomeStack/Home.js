import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
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
