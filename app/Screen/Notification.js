import React, { Component } from 'react';

import { View } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#f472d0'

class Notification extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>
      </View>
    );
  }
}

export default Notification;
