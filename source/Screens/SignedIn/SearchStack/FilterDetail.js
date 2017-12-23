import React, { Component } from 'react';

import { View, FlatList, Alert } from 'react-native';

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

export default class FilterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: this.props.navigation.state.params.case,
      list: this.props.navigation.state.params.list
    }
  }
  renderItem(item) {
    switch (this.state.case) {
      case "Course":
        return (
          <ListItem
            avatar
            button={true}
            onPress={() =>
              this.props.navigation.navigate("DetailCoursePost", {
                id: item.id,
              })}
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
        break;
      case "Teacher":
        return (
          <ListItem
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
        break;
        case "Profile":
          return (
            <ListItem
            avatar
            button={true}
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
              <Text>{item.degree}</Text>
            </Right>
          </ListItem>
          )
        break;
        default:
          break;
    }

  }
  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        extraData={this.state}
        data={this.state.list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <Container>
        <Content style={{marginRight:15}}>
          {this.state.list ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
