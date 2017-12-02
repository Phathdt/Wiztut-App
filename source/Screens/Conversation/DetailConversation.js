import React, { Component } from "react";

import { View, StyleSheet, FlatList,ScrollView } from "react-native";
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


import { CreateMessageUrl } from "../../helper/LinkUrl";
import api from "../../api/api";

export default class DetailConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.state.params.id,
      user_name: this.props.navigation.state.params.user_name,
      listmessages: null,
      conversation: null,
      loaded: false,
      message: "",
      tokken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJlbWFpbCI6InZpZXRhbmg0QGdtYWlsLmNvbSIsImV4cCI6MTUxNDUyMDIxOH0.FotijC_S9qypNt-TQTq2rtqE9UGVaSSQomNgvPG-Iy0"
        };
    this.getConversation(this.state.tokken);
  }

  getConversation(tokken) {
    api.getConversation(this.state.id, tokken).then(data => {
      this.setState({
        conversation: data.conversation,
        listmessages: data.messages,
        loaded: true
      });
    });
  }
  renderScrollComponent = ({ style, refreshing, ...props }) => (
    <ScrollView style={[style, styles.flip]} {...props} />
  );
  onRefresh() {
    this.getConversation(this.state.tokken);
  }
  renderListItem() {
    return (
      <FlatList
        extraData={this.state}
        data={this.state.listmessages}
        onRefresh={() => this.onRefresh()}
        keyExtractor={item => item.id}
        renderScrollComponent={this.renderScrollComponent}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  renderItem(item) {
    if (this.state.conversation.sender_id == item.user_id) {
      return (
        <Button 
          rounded
          style={{marginLeft:"auto",marginBottom:10,}}
          >
            <Text style={styles.flip}>{item.body}</Text>
        </Button>
      );
    }
    else {
      return (
        <Button 
          rounded danger
          style={{marginBottom:10}}
        >
            <Text style={styles.flip}>{item.body}</Text>
        </Button>
      );
    }
  }
  async Send(){
    if(this.state.message == ""){
      return false;
    }
    api.postMessage(this.state.tokken,this.state.message,this.state.conversation.id)
  }
  renderSender() {
    let item = this.state.conversation;
    return (
      <Content>
        <Left>
          <Text style={styles.title}>người gửi</Text>
        </Left>
        <Body>
          <Text style={styles.content}>{this.state.user_name}</Text>
        </Body>
      </Content>
    );
  }
  render() {
    return (
      <Container>
        <Header>
          {this.state.loaded ? this.renderSender() : null}
        </Header>
        <Content>
        {this.state.loaded ? this.renderListItem() : null}
        <Item rounded>
          <Input 
            placeholder='Write message'
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
          />
           <Button 
          rounded info
          onPress={() => this.Send()}>
          <Text>Send</Text>
        </Button>
        </Item>
        </Content>
      </Container>
    );
  }
}
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
