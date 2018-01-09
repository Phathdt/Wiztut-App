import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Button,
  Input,
  Item,
  Thumbnail,
  ListItem,
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
import { connect } from 'react-redux';
import api from "../api/api.js";
import HeaderCustom from '../Components/HeaderCustom'

import {
  course_status
} from '../helper/constain.js'

class DetailCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.user.authentication_token,
      user_id: this.props.user.id,
      id: this.props.navigation.state.params.id,
      loaded: false
    };
    this.getDetailCourse();
  }

  getDetailCourse() {
    api.getCourse(this.state.id, this.state.token).then(data => {
      this.setState({
        data: data,
        loaded: true
      });
    });
  }

  renderHeader(){
    return(
      <HeaderCustom
        titleComponent={this.CustomTitle()}
        navigation={this.props.navigation}
      />
    )
  }

  CustomTitle() {
    return(
      <Container style={{width: 320, flex: 1, flexDirection: 'row'}}>
        <Container style={{flex: 1}}></Container>
        <Container style={{flex: 3, marginTop: 10}}>
          <Text>Course number {this.state.data.id}</Text>
        </Container>
        <Container style={{flex: 1}}>
          <TouchableHighlight
            onPress={() => this.findConversationWithUser()}>
            <Image
              style={{width: 40, height: 30}}
              source={require('../src/images/plane.png')}
            />
          </TouchableHighlight>
        </Container>
      </Container>
      )
  }

  findConversationWithUser() {
    let data = this.state.data
    let user_id = this.state.user_id == data.teacher_id ? data.student_id : data.teacher_id

    api.findConversationWithUser( user_id, this.state.token)
      .then( data => this.processWithData(data))
  }

  async processWithData(data) {
    if (data.status == 404) {
      Alert.alert(I18n.t("error"), I18n.t("something_wrong"));
    } else {
      let dataJson = await data.json();
      this.props.navigation.navigate("DetailConversation", {
        id: dataJson.conversation.id,
        user_id: dataJson.user_id,
        user_name: dataJson.user_name
      })
    }
  }

  render2Button(item) {
    return(
      <View >
        <TouchableHighlight
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => this.changeStatusCourse(item.id, 'success')}
          underlayColor="red"
          >
          <Text style={styles.buttonText}>Đồng ý </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => this.changeStatusCourse(item.id, 'canceled')}
          underlayColor="red"
          >
          <Text style={styles.buttonText}>Huỷ course</Text>
        </TouchableHighlight>
      </View>
    )
  }

  async changeStatusCourse(id, status) {
    if (status =="success") {
      await api.changeStatusCourse(id, this.state.token, status)
      this.getDetailCourse();
    } else {
      await api.changeStatusCourse(id, this.state.token, status)
      this.getDetailCourse();
    }
  }

  renderItem() {
    item = this.state.data
    return(
      <Container style={{marginTop: 20}}>
        <Text>Tên giáo viên : {item.teacher_name}</Text>
        <Text>Tên học sinh : {item.student_name}</Text>
        <Text>Tình trạng : {course_status[item.status]}</Text>
        {item.status == 0 && item.teacher_id == this.state.user_id ? this.render2Button(item) : null}
      </Container>
    )

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {this.state.loaded ? this.renderHeader() : null}
        {this.state.loaded ? this.renderItem() : null}
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(DetailCourse);
