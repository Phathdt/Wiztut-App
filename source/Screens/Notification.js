import React, { Component } from 'react';

import { FlatList, Alert, TouchableHighlight, Image, View, Button } from "react-native";
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
  Icon
} from "native-base";

import I18n from "../config/i18n";
import { connect } from 'react-redux';
import api from "../api/api";
import HeaderCustom from '../Components/HeaderCustom'

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListCourse: null,
      page: 1,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNzUzMDI0NX0.FeaxlzxoQFsfWd5MPf6vdljsheA-QNemF0gr3asc_mU'

    };
    this.getListCourse(this.state.page);
  }

  getListCourse(page) {
    api.getListCourse(this.state.token).then(data => this.addData(data));
  }

  addData(data) {
    if (this.state.page > 1) {
      this.setState({
        ListCourse: [...this.state.ListConversations, ...data]
      });
    } else {
      this.setState({
        ListCourse: data
      });
    }
  }

  changeStatusCourse(id, status) {
    console.log(1)
    if (status =="success") {
      api.changeStatusCourse(id, this.state.token, status)
        .then(data => this.getListCourse(this.state.page));
    } else {
      api.changeStatusCourse(id, this.state.token, status)
        .then(data => this.getListCourse(this.state.page));
    }
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onEndReachedThreshold={-0.2}
        extraData={this.state}
        data={this.state.ListCourse}
        keyExtractor={item => `${item.id}-${Math.random()}`}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }

  renderItem(item) {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text>{item.id}</Text>
          <Text >
            {item.teacher_id}, {item.student_id}
          </Text>
        </View>
        <View style={{flex: 1}}>
          {item.status == "waiting_teacher_approval" ? this.render2Button(item) : this.renderStatus(item)}
        </View>
      </View>
    );
  }

  render2Button(item) {
    return(
      <View >
          <Button
            title="Dong y Course"
            onPress={() => this.changeStatusCourse(item.id, "success")}
          />
          <Button
            title="Huy Course"
            onPress={() => this.changeStatusCourse(item.id, "canceled")}
          />
      </View>
    )
  }

  renderStatus(item) {
    return(
      <Container>
        <Text>{item.status}</Text>
      </Container>
    )
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.ListCourse ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
