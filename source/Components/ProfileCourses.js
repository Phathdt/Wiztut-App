import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
} from "native-base";

class ProfileCourses extends Component {
  renderItem(item){
    return(
      <Container>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.role}</Text>
      </Container>
    )
  }
  render() {
    return (
      <Container>
        <Text>Danh sach lop tham gia</Text>
        <FlatList
          data={this.props.data.courses}
          keyExtractor={item => `${item.id}-${Math.random()}`}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </Container>
    );
  }
}
export default ProfileCourses;
