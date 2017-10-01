import React, { Component } from 'react';

import { View } from 'react-native';

import styles from '../src/stylesheet/style'

let color = '#f0a30a'

export default class Picture extends Component {
  render() {
    return (
      <View style={[styles.screen, {backgroundColor: color }]}>        
      </View>
    );
  }
}
