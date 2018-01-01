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

const images = [
  { id: 0, uriPhoto: require("../../../src/images/one.png") },
  { id: 1, uriPhoto: require("../../../src/images/two.png") },
  { id: 2, uriPhoto: require("../../../src/images/three.png") },
  { id: 3, uriPhoto: require("../../../src/images/four.png") },
  { id: 4, uriPhoto: require("../../../src/images/five.png") },
  { id: 5, uriPhoto: require("../../../src/images/six.png") },
  { id: 6, uriPhoto: require("../../../src/images/seven.png") },
  { id: 7, uriPhoto: require("../../../src/images/eight.png") },
  { id: 8, uriPhoto: require("../../../src/images/nine.png") },
  { id: 9, uriPhoto: require("../../../src/images/ten.png") },
  { id: 10, uriPhoto: require("../../../src/images/eleven.png") },
  { id: 11, uriPhoto: require("../../../src/images/twelve.png") }
]

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
    image = images.find( x => x.id == item.grade)
    return (
      <ListItem
        avatar
        button={true}
        onPress={() =>
          this.props.navigation.navigate("DetailCoursePost", { id: item.id })}
      >
        <Left>
          <Thumbnail source={image.uriPhoto} />
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
