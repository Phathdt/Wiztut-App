import React, { Component } from 'react';

import { View } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#6a00ff'

class Upload extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
      </View>
    );
  }
}


export default Upload;
