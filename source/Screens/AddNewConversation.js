import React, { Component } from "react";

import { FlatList, Alert, TouchableHighlight, Image } from "react-native";
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
import HeaderCustom from '../Components/HeaderCustom'

import I18n from "../config/i18n";
import api from "../api/api";
import { connect } from 'react-redux';

class AddNewConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.id,
      idConversation: 0,
      name: ``,
      listSearchProfile: null,
      page: 1,
      token: this.props.user.authentication_token,
      refreshing:false,
      loaded:false
    };
    this.getlistSearchProfile(this.state.token,this.state.name);
  }
  getlistSearchProfile(token,name) {
    api.getListSearchProfile(token,name).then(data => {
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
      this.getlistSearchProfile(this.state.token,this.state.name)
    })
  }

  async Search() {
    if (this.state.name.length==0) {
      return false;
    }
    this.getlistSearchProfile(this.state.token, this.state.name)
  }
  async Create(item) {
    if (this.state.listSearchProfile == null) {
      return false;
    }
    api.createConversation(this.state.token, item.id).then(data => {
      this.setState({
        idConversation: data.conversation.id
      });
      if(this.state.idConversation!=null){
        this.props.navigation.navigate("DetailConversation", {
          id: this.state.idConversation,
          user_name: item.name
        })
      }
    });

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
        <Right style={{ justifyContent: "center" }}>
          <Text note
          >{item.degree}</Text>
        </Right>
      </ListItem>
    );
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
        <Container style={{flex: 4}}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
        </Container>
        <Container style={{flex: 1}}>
          <TouchableHighlight
            onPress={() => this.Search()}
            underlayColor="white"
            >
            <Image
              style={{width: 40, height: 30}}
              source={require('../src/images/plane.png')}
            />
          </TouchableHighlight>
        </Container>
      </Container>
      )
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content style={{marginTop: 5, marginLeft: -10}}>
          {this.renderListItem()}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user,
  };
}

export default connect(mapStateToProps)(AddNewConversation);

