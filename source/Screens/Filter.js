import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class Filter extends Component {
  render() {
    return (
      <View>
        <Button
          title="FilterCoursePost"
          onPress={() => this.props.navigation.navigate("FilterCoursePost")}
        />
        <Button
          title="FilterTeacherPost"
          onPress={() => this.props.navigation.navigate("FilterTeacherPost")}
        />
        <Button
          title="SearchProfile"
          onPress={() => this.props.navigation.navigate("SearchProfile")}
        />
      </View>
    );
  }
}
