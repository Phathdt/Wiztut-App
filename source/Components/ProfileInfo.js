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

import {
  Address, Time, Degree, Sex, Grade, Subject, Frequency
} from '../helper/constain.js'

class ProfileInfo extends Component {
  renderTeacherProfile(data) {
    return(
      <View>
        <Text>Năm tốt nghiệp : {data.profile.graduation_year} </Text>
        <Text>Trình độ : {data.profile.degree} </Text>
        <Text>Trường : {data.profile.school} </Text>
        <Text>Lương mong muốn: {data.profile.salary} </Text>
      </View>
    )
  }
  render() {
    data = this.props.data
    return (
      <Container tyle={{borderBottomWidth: 1}}>
        <Text>Thông tin</Text>
        <Text>Tên : {data.profile.name}</Text>
        <Text>Ngày gia nhập : {data.profile.created_at}</Text>
        <Text>Email : {data.email}</Text>
        <Text>Giới thiệu bản thân : {data.profile.about_me} </Text>
        <Text>Số điện thoại : {data.profile.phone} </Text>
        { data.is_teacher ? this.renderTeacherProfile(data): null }
      </Container>
    );
  }
}

export default ProfileInfo;
