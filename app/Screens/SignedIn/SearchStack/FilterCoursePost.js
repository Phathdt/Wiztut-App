import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class FilterCoursePost extends Component {
  render() {
    return (
      <View>
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
