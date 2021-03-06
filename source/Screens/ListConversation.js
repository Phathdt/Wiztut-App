
import React, { Component } from "react";

import { FlatList, Alert, TouchableHighlight, Image } from "react-native";
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
  Icon
} from "native-base";

import I18n from "../config/i18n";
import { connect } from 'react-redux';
import api from "../api/api";
import HeaderCustom from '../Components/HeaderCustom'

class ListConversation extends Component {
  static navigationOptions = ({ navigation }) => ({
    header:null
  });
  constructor(props) {
    super(props);
    this.state = {
      ListConversations: null,
      page: 1,
      token: this.props.user.authentication_token
    };
    this.getListConversation(this.state.page);
  }

  getListConversation(page) {
    api.getListConversation(page, this.state.token).then(data => this.addData(data));
  }

  addData(data) {
    if (this.state.page > 1) {
      this.setState({
        ListConversations: [...this.state.ListConversations, ...data]
      });
    } else {
      this.setState({
        ListConversations: data
      });
    }
  }

  onRefresh() {
    this.setState({
      page: 1
    });
    this.getListConversation(this.state.page);
  }

  async onEndReached() {
    await this.setState({
      page: this.state.page + 1
    });
    this.getListConversation(this.state.page);
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onRefresh={() => this.onRefresh()}
        onEndReachedThreshold={-0.2}
        onEndReached={() => this.onEndReached()}
        extraData={this.state}
        data={this.state.ListConversations}
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
          onPress={() =>
            this.props.navigation.navigate("DetailConversation", {
              id: item.id,
              user_name: item.user_name,
              user_id: item.user_id
            })}
        >
          <Left>
            <Thumbnail source={{ uri: item.avatar }} />
          </Left>
          <Body>
            <Text>{item.user_name}</Text>
            <Text note>
              {item.last_message ? item.last_message.body : null}
            </Text>
          </Body>
          <Right style={{ justifyContent: "center" }}>
            <Text note>{item.last_message ? item.last_message.updated_at
              .match(/\d{4}-\d{2}-\d{2}/i)[0]
              .replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3-$2-$1") : null}</Text>
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
        <Container style={{flex: 1}}></Container>
        <Container style={{flex: 3, marginTop: 10}}>
          <Text>List Conversation</Text>
        </Container>
        <Container style={{flex: 1}}>
          <TouchableHighlight
            underlayColor="white"
            onPress={() => this.props.navigation.navigate("AddNewConversation")}>
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
          {this.state.ListConversations ? this.renderListItem() : null}
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

export default connect(mapStateToProps)(ListConversation);
