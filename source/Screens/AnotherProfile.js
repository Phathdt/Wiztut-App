import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image
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
import { connect } from 'react-redux';
import api from "../api/api.js";
import HeaderCustom from '../Components/HeaderCustom'
import ProfileInfo from '../Components/ProfileInfo'
import ProfileInfoRating from '../Components/ProfileInfoRating'

class AnotherProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: null,
      user_id: this.props.navigation.state.params.id,
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
          <Text>{this.state.data.profile.name}</Text>
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
        <ProfileInfoRating data={this.state.data} />
        <ProfileInfo data={this.state.data} />

      </Container>
    )
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

export default connect(mapStateToProps)(AnotherProfile);
