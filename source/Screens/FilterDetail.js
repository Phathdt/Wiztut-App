import React, { Component } from 'react';

import { View, FlatList, Alert } from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  Icon,
  Item,
  Input
} from "native-base";

import ListCoursePost from './ListCoursePost'
import ListTeacherPost from './ListTeacherPost'
import ListProfile from './ListProfile'

import { address } from '../helper/constain'
import Nodata from '../Components/Nodata'

export default class FilterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: this.props.navigation.state.params.case,
      list: this.props.navigation.state.params.list
    }
  }
  renderItem(item) {
    switch (this.state.case) {
      case "Course":
        return (
          <Container style={{ flex: 1, backgroundColor: "white" }}>
            <ListCoursePost
              navigation={this.props.navigation}
              listCp={this.state.list}
              />
          </Container>
        );
        break;
      case "Teacher":
        return (
          <Container style={{ flex: 1, backgroundColor: "white" }}>
            <ListTeacherPost
              navigation={this.props.navigation}
              listTp={this.state.list}
              />
          </Container>
        );
        break;
        case "Profile":
          return (
            <Container style={{ flex: 1, backgroundColor: "white" }}>
              <ListProfile
                navigation={this.props.navigation}
                listPf={this.state.list}
              />
            </Container>
          )
        break;
        default:
          break;
    }

  }
  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        extraData={this.state}
        data={this.state.list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <Container>
          {this.state.list.length ? this.renderListItem() : <Nodata />}
      </Container>
    );
  }
}
