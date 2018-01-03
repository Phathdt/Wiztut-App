import React, { Component } from 'react';

import {
  StyleSheet,
  View,
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

class ProfileInfo extends Component {
  render() {
    data = this.props.data
    return (
      <Container tyle={{borderBottomWidth: 1}}>
        <Text>Thông tin</Text>
        <Text>Tên : {data.profile.name}</Text>
        <Text>Ngày gia nhập : {data.profile.created_at}</Text>
        <Text>Email : {data.email}</Text>
        <Text>Giới thiệu bản thân : {data.profile.about_me} </Text>
      </Container>
    );
  }
}

export default ProfileInfo;
