import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class Filter extends Component {
  render() {
    return (
      <View>
        <Button
          title="Filter Course Post"
          onPress={() => this.props.navigation.navigate("FilterCoursePost")}
        />
        <Button
          title="Filter Teacher Post"
          onPress={() => this.props.navigation.navigate("FilterTeacherPost")}
        />
        <Button
          title="Filter Profile"
          onPress={() => this.props.navigation.navigate("SearchProfile")}
        />
      </View>
    );
  }
}
