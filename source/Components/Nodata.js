import React, { Component } from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

import {
  Container
} from "native-base";
import styles from "../helper/styles";


class Nodata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      type:'FadingCircleAlt',
      size: 100,
      color: "#FFFFFF",
      isVisible: true
    };
  }

  render() {
    return (
      <Container style={styles1.container}>
        <Text style={styles.title}>Không tìm thấy data</Text>
      </Container>
    );
  }

};

var styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34C9B0',
  }
});


export default Nodata;
