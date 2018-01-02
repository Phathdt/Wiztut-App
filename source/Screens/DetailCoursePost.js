import React, { Component } from "react";

import { View, Button, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";

import api from "../api/api.js";
import {
  address,
  time,
  degree_require,
  sex_require,
  grades,
  subjects
} from "../helper/constain";

import HeaderCustom from '../Components/HeaderCustom'

export default class DetailCoursePost extends Component {
  static navigationOptions = {
    title: "Thông tin bài đăng"
  };
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.state.params.id,
      profile_id: null,
      profile_name: null,
      course_post: null,
      loaded: false
    };
    this.getCoursePost();
  }

  getCoursePost() {
    api.getCoursePost(this.state.id).then(data => {
      this.setState({
        course_post: data.course_post,
        profile_id: data.profile_id,
        profile_name: data.profile_name,
        loaded: true
      });
    });
  }

  renderItem() {
    let item = this.state.course_post;
    return (
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Text style={styles.title}>Tiêu đề</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{item.title}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Lớp</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{item.grade + 1}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Môn học</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{subjects[item.subject]}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Số buổi</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{item.frequency || 0}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Thời gian</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{time[item.time]}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Lương</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{item.salary} vnd</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Địa chỉ</Text>
            </Left>
            <Body>
              <Text style={styles.content}>
                {item.real_address} {address[item.address]}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Giới tính</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{sex_require[item.sex_require]}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Trình độ</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{degree_require[item.degree_require]}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={styles.title}>Ghi chú</Text>
            </Left>
            <Body>
              <Text style={styles.content}>{item.note}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Right>
              <Text style={styles.footer}>
                Đăng ngày{" "}
                {item.created_at
                  .match(/\d{4}-\d{2}-\d{2}/i)[0]
                  .replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3-$2-$1")}
              </Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <HeaderCustom
          title='hello world'
          navigation={this.props.navigation}
          />
        {this.state.loaded ? this.renderItem() : null}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#2BA686"
  },
  content: {
    color: "#F85457"
  },
  footer: {
    color: "#8B95A0",
  }
});
