import React, { Component } from "react";

import { FlatList, Alert } from "react-native";
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
  Icon,
} from "native-base";

import api from "../../api/api";

export default class AddNewConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idConversation: 0,
      name: ``,
      listSearchProfile: null,
      page: 1,
      tokken: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJlbWFpbCI6InZpZXRhbmg0QGdtYWlsLmNvbSIsImV4cCI6MTUxNDUyMDIxOH0.FotijC_S9qypNt-TQTq2rtqE9UGVaSSQomNgvPG-Iy0`,
      refreshing:false,
      loaded:false
    };
    this.getlistSearchProfile(this.state.tokken,this.state.name);
  }
  getlistSearchProfile(tokken,name) {
    api.getListSearchProfile(tokken,name).then(data => {
      this.setState({
        listSearchProfile: data.users,
        refreshing: false,
        loaded: true
      });
    })
  }
  onRefresh() {
    this.setState({
      refreshing: true
    },
    ()=> {
      this.getlistSearchProfile(this.state.tokken,this.state.name)
    })
  }

  async Search() {
    if (this.state.name.length==0) {
      return false;
    }
    this.getlistSearchProfile(this.state.tokken, this.state.name)
  }
  async Create(item) {
    if (this.state.listSearchProfile == null) {
      return false;
    }
    api.postConversation(this.state.tokken, item.id).then(data => {
      this.setState({
        idConversation: data.conversation.id
      });
      Alert.alert(data.message)
    });
    if(this.state.idConversation!=null){
      this.props.navigation.navigate("DetailConversation", {id: this.state.idConversation,user_name: item.name })
    }
  }
  renderListItem() {
    return (
      <FlatList
        refreshing={this.state.refreshing}
        onRefresh={() => this.onRefresh()}
        extraData={this.state}
        data={this.state.listSearchProfile}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  renderItem(item) {
    return (
      <ListItem
        avatar
        button={true}
        onPress={() => this.Create(item)}
      >
        <Left>
          <Thumbnail source={{ uri: item.avatar }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>
            {item.about_me}
          </Text>
        </Body>
        <Right>
          <Text note>>{item.degree}</Text>
        </Right>
      </ListItem>
    );
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
              placeholder="Search"
              value={this.state.name}
              onChangeText={name => this.setState({ name })} 
            />
            <Icon name="ios-people" />
          </Item>
          <Button 
            transparent
            onPress={() => this.Search()}
          >
            <Text>Search</Text>
          </Button>
        </Header>
      <Content>
        {this.renderListItem()}
        </Content>
      </Container>
    );
  }
}

