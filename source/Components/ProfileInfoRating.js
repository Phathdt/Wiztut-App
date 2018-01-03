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
import { connect } from 'react-redux';
import api from "../api/api.js";

import StarRating from 'react-native-star-rating';

class ProfileInfoRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNzYyNDQ4M30.ubULSZLSEi5xHmy7ceEZu2KcbG6-DaQccQmzN0RLPKA'
    };
  }

  onStarRatingPress(rating) {
    data = this.props.data
    api.createRating( data.user_id, rating, '' , this.state.token).then( )
  }

  renderStar(star) {
    return(
      <StarRating
        disabled={!this.props.data.can_rating}
        maxStars={5}
        rating={star}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
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
function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(ProfileInfoRating);
