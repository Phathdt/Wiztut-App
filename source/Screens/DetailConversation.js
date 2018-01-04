import React, { Component } from "react";

import { View, StyleSheet, FlatList, ScrollView, Alert,RefreshControl, Animated, TouchableHighlight, Image } from "react-native";
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

import I18n from "../config/i18n";
import { CreateMessageUrl } from "../helper/LinkUrl";
import api from "../api/api";
import { connect } from 'react-redux';
import HeaderCustom from '../Components/HeaderCustom'

class DetailConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.navigation.state.params.user_id,
      id: this.props.navigation.state.params.id,
      refreshing: false,
      listmessages: null,
      conversation: null,
      loaded: false,
      loading: false,
      message: "",
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNzYyNDQ4M30.ubULSZLSEi5xHmy7ceEZu2KcbG6-DaQccQmzN0RLPKA'
      // token: this.props.user.authentication_token
    };
    this.getConversation(this.state.token);
  }

  getConversation(token) {
    api.getConversation(this.state.id, token).then(data => {
      this.setState({
        conversation: data.conversation,
        listmessages: data.messages,
        is_teacher: data.is_teacher,
        refreshing: false,
        loaded: true
      });
    });
  }

  renderScrollComponent = ({ style, refreshing, ...props }) => (
    <ScrollView

      style={[style, styles.flip]}
      {...props}
    />
  );

_onRefresh() {
  this.setState({refreshing: true});
  if(this.state.loading==true){
  fetchData().then(() => {
    this.setState({refreshing: false})
  });
  }

}
  renderListItem() {
    return (
      <FlatList
        extraData={this.state}
        data={this.state.listmessages}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        keyExtractor={item => item.id}
        renderScrollComponent={this.renderScrollComponent}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  renderItem(item) {
    if (this.state.user_id== item.user_id) {
      return (
        <Button
          rounded
          style={{ marginLeft: "auto", marginBottom: 10, }}
        >
          <Text style={styles.flip}>{item.body}</Text>
        </Button>
      );
    }
    else {
      return (
        <Button
          rounded danger
          style={{ marginBottom: 10 }}
        >
          <Text style={styles.flip}>{item.body}</Text>
        </Button>
      );
    }
  }
  async Send() {
    if (this.state.message == "") {
      return false;
    }
    await api.createMessage(this.state.token, this.state.message, this.state.conversation.id)
    await this.getConversation(this.state.token)
    this.setState({
      refreshing:true,
      loading: true,
      message: ''
    })
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
          <Text>{this.props.navigation.state.params.user_name}</Text>
        </Container>
        <Container style={{flex: 1}}>
          { this.state.is_teacher ? this.renderButtonAddCourse() : null}

        </Container>
      </Container>
      )
  }

  renderButtonAddCourse() {
    return(
      <TouchableHighlight
        onPress={() => this.createCourse()}>
        <Image
          style={{width: 40, height: 30}}
          source={require('../src/images/plane.png')}
        />
      </TouchableHighlight>
    )
  }

  createCourse() {
    api.createCourse(this.state.user_id, this.state.token)
      .then( data => Alert.alert(data.message))
  }


  render() {
    return (
      <Container >
          {this.renderHeader()}
        <Content>
          {this.state.loaded ? this.renderListItem() : null}
        </Content>
        <Item rounded>
          <Input
            placeholder='Write message'
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
          />
          <Button
            rounded info
            onPress={() => this.Send()}>
            <Text>{I18n.t("send_message")}</Text>
          </Button>
        </Item>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user,
  };
}

export default connect(mapStateToProps)(DetailConversation);

const styles = StyleSheet.create({
  flip: {
    transform: [{ scaleY: -1 }]
  },
  title: {
    textAlign: "right",
    color: "#2BA686"
  },
  content: {
    textAlign: "left",
    color: "#F85457"
  },
  footer: {
    color: "#8B95A0",
  }
});
