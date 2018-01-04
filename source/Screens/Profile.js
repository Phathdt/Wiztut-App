import React, { Component } from 'react';

import { View, Button, Image, TouchableHighlight, Switch, Alert } from 'react-native';
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
import { connect } from 'react-redux';

import api from "../api/api.js";
import HeaderCustom from '../Components/HeaderCustom'
import ProfileImage from '../Components/ProfileImage'
import ProfileInfo from '../Components/ProfileInfo'
import ProfileCourses from '../Components/ProfileCourses'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: null,
      user_id: 1,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNzYyNDQ4M30.ubULSZLSEi5xHmy7ceEZu2KcbG6-DaQccQmzN0RLPKA'
    };
    this.getData();
  }

  getData() {
    api.getProfile( this.state.user_id, this.state.token).then( data => this.addData(data))
  }

  addData(data) {
    this.setState({
      data: data,
      is_teacher: data.is_teacher,
      loaded: true
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
          <Text>My Profile</Text>
        </Container>
        <Container style={{flex: 2}}>
          <Switch
            onValueChange = {() => this.toggleTeacher()}
            value = {this.state.is_teacher}/>
        </Container>
        <Container style={{flex: 1}}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("SignedOut")}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../src/images/signout.png')}
            />
          </TouchableHighlight>
        </Container>
        <Container style={{flex: 1}}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("ListConversation")}>
            <Image
              style={{width: 40, height: 30}}
              source={require('../src/images/plane.png')}
            />
          </TouchableHighlight>
        </Container>
      </Container>
      )
  }

  renderData() {
    return(
      <Container>
        <ProfileImage data={this.state.data} />
        <ProfileInfo data={this.state.data} />
      </Container>
    )
  }

  toggleTeacher() {
    api.toggleTeacher(this.state.token).then( data => this.processWithData(data))
  }

  processWithData(data) {
    let state = this.state.is_teacher
    this.setState({
      is_teacher: !state
    });
    Alert.alert(data.message);
  }

  render() {
    return (
      <Container>
        {this.state.loaded ? this.renderHeader() : null}
        {this.state.loaded ? this.renderData() : null}
      </Container>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Profile);
