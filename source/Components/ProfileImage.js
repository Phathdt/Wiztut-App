import React, { Component } from 'react';

import {
  StyleSheet,
  View,
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

class ProfileImage extends Component {
  renderStar()
  {
    return(
      <Container style={{flex: 1}}>
        <Image
          style={{width: 40, height: 30}}
          source={require('../src/images/plane.png')}
        />
      </Container>
    )
  }
  renderStarFill()
  {
    return(
      <Container style={{flex: 1}}>
        <Image
          style={{width: 40, height: 30}}
          source={require('../src/images/signout.png')}
        />
      </Container>
    )
  }
  renderTeacher()
  {
    data = this.props.data
    return(
        <Container style={{flexDirection: 'row'}}>
            {this.renderStar()}
            {this.renderStar()}
            {this.renderStar()}
            {this.renderStarFill()}
            {this.renderStarFill()}
        </Container>
    )
  }

  render() {
    data = this.props.data
    return (
      <Container>
        <Body>
          <Image
            style={{width: 100, height: 100, borderRadius: 50, marginTop: 50}}
            source={{uri: data.avatar}}
          />
          <Text>
            {data.profile.name}
          </Text>
          {true ? <Text>Teacher</Text> : null}
        </Body>
        { true ? this.renderTeacher() : null}
        { true ? this.renderTeacher() : null}
      </Container>
    );
  }
}

export default ProfileImage;
