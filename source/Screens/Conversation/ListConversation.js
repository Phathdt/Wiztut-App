
import React, { Component } from "react";

import { FlatList } from "react-native";
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

import api from "../../api/api";

export default class ListConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListConversations: null,
      page: 1,
      tokken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJlbWFpbCI6InZpZXRhbmg0QGdtYWlsLmNvbSIsImV4cCI6MTUxNDUyMDIxOH0.FotijC_S9qypNt-TQTq2rtqE9UGVaSSQomNgvPG-Iy0"
      
    };
    this.getListConversation(this.state.page);
  }

  getListConversation(page) {
    api.getListConversation(page,this.state.tokken).then(data => this.addData(data));
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
          this.props.navigation.navigate("DetailConversation", {id: item.id,user_name:item.user_name })}
      >
        <Left>
          <Thumbnail source={{ uri: item.avatar }} />
        </Left>
        <Body>
          <Text>{item.user_name}</Text>
          <Text note>
            {item.last_message.body}
          </Text>
        </Body>
        <Right>
          <Text note>>{item.last_message.updated_at
                  .match(/\d{4}-\d{2}-\d{2}/i)[0]
                  .replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3-$2-$1")}</Text>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
      <Content>
        <Button 
          iconLeft success
          onPress={() => this.props.navigation.navigate("AddNewConversation")}          
          >
          <Icon name='home' />
          <Text>Them Hoi Thoai</Text>
        </Button>
        {this.state.ListConversations ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
