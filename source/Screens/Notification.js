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

import {
  course_status
} from '../helper/constain.js'

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListCourse: null,
      page: 1,
      token: this.props.user.authentication_token,
      user_id: this.props.user.id,
      refreshing: false
    };
    this.getListCourse(this.state.page);
  }

  getListCourse(page) {
    api.getListCourse(this.state.token).then(data => this.addData(data));
  }

  addData(data) {
    if (this.state.page > 1) {
      this.setState({
        ListCourse: [...this.state.ListConversations, ...data],
        refreshing:  false
      });
    } else {
      this.setState({
        ListCourse: data,
        refreshing:  false
      });
    }
  }

  async changeStatusCourse(id, status) {
    if (status =="success") {
      await api.changeStatusCourse(id, this.state.token, status)
      this.getListCourse(1)
    } else {
      await api.changeStatusCourse(id, this.state.token, status)
      this.getListCourse(this.state.page)
    }
  }



  renderListItem() {
    return (
      <FlatList
        onRefresh={() => this.handleRefresh()}
        refreshing={this.state.refreshing}
        onEndReachedThreshold={-0.2}
        extraData={this.state}
        data={this.state.ListCourse}
        keyExtractor={item => `${item.id}-${Math.random()}`}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }

  handleRefresh() {
    this.setState(
      {
      refreshing: true,
      },
      () => {this.getListCourse(this.state.page)}
    );
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={() => this.props.navigation.navigate("DetailCourse", {
          id: item.id
        })}
      >
      <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#34C9B0', borderBottomWidth: 3, paddingBottom: 10,}}>
        <View style={{flex: 1}}>
          <Text>Mã lớp {item.id}</Text>
          <Text >
            {item.teacher}
          </Text>
          <Text >
            {item.student}
          </Text>
        </View>
        <View style={{flex: 1}}>
          {item.status == 0 && item.teacher_id == this.state.user_id ? this.render2Button(item) : this.renderStatus(item)}
        </View>
      </View>
      </TouchableHighlight>
    );
  }

  render2Button(item) {
    return(
      <View >
          <Button
            title="Dong y Course"
            onPress={() => this.changeStatusCourse(item.id, 'success')}
          />
          <Button
            title="Huy Course"
            onPress={() => this.changeStatusCourse(item.id, 'canceled')}
          />
      </View>
    )
  }

  renderStatus(item) {
    return(
      <View>
        <Text>{course_status[item.status]}</Text>
      </View>
    )
  }

  render() {
    return (
      <Container>
          {this.state.ListCourse ? this.renderListItem() : null}
      </Container>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Notification);
