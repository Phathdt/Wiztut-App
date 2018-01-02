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
  Icon,
  Item,
  Input
} from "native-base";

import { address } from '../helper/constain'

export default class ListTeacherPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListTeacherPost: this.props.listTp,
    };
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onEndReachedThreshold={-0.2}
        extraData={this.state}
        data={this.state.ListTeacherPost}
        keyExtractor={item => `${item.id}-${Math.random()}`}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }

  renderItem(item) {
    return (
      <ListItem
        style={{marginVertical: 5 }}
        avatar
        button={true}
        onPress={() =>
          this.props.navigation.navigate("DetailTeacherPost", { id: item.id })}
      >
        <Left>
          <Thumbnail source={{ uri: item.avatar }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
          <Text note>
            {address[item.address]}
          </Text>
        </Body>
        <Right style={{ justifyContent: "center" }}>
          <Text>></Text>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>

      <Content>

        {this.state.ListTeacherPost ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
