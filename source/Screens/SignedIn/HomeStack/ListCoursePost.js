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

import { address } from '../../../helper/constain'

export default class ListCoursePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListCoursePost: this.props.listCp,
      page: 1
    };
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onEndReachedThreshold={-0.2}
        extraData={this.state}
        data={this.state.ListCoursePost}
        keyExtractor={item => `${item.id}-${Math.random()}`}
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
          this.props.navigation.navigate("DetailCoursePost", { id: item.id })}
      >
        <Left>
          <Thumbnail source={{ uri: "https://reactjs.org/logo-og.png" }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
          <Text note>
            {item.real_address}, {address[item.address]}
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

        {this.state.ListCoursePost ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
