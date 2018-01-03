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
import StarRating from 'react-native-star-rating';
class ProfileImage extends Component {

  renderStar(star) {
    return(
      <StarRating
        disabled={true}
        maxStars={5}
        rating={star}
      />
    )
  }

  render() {
    data = this.props.data
    return (
      <Container style={{borderBottomWidth: 1}}>
        <Body>
          <Image
            style={{width: 100, height: 100, borderRadius: 50, marginTop: 50}}
            source={{uri: data.avatar}}
          />
          <Text>
            {data.profile.name}
          </Text>
          {data.is_teacher ? <Text>Teacher</Text> : null}
        </Body>
        { this.renderStar(data.rate)}
      </Container>
    );
  }
}

export default ProfileImage;
