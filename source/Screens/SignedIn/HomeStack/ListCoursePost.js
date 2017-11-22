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

import api from "../../../api/api.js";

export default class ListCoursePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListCoursePost: null,
      page: 1
    };
    this.getListCoursePost(this.state.page);
  }

  getListCoursePost(page) {
    api.getListCoursePost(page).then(data => this.addData(data));
  }

  addData(data) {
    if (this.state.page > 1) {
      this.setState({
        ListCoursePost: [...this.state.ListCoursePost, ...data]
      });
    } else {
      this.setState({
        ListCoursePost: data
      });
    }
  }

  onRefresh() {
    this.setState({
      page: 1
    });
    this.getListCoursePost(this.state.page);
  }

  async onEndReached() {
    await this.setState({
      page: this.state.page + 1
    });
    this.getListCoursePost(this.state.page);
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onRefresh={() => this.onRefresh()}
        onEndReachedThreshold={-0.2}
        onEndReached={() => this.onEndReached()}
        extraData={this.state}
        data={this.state.ListCoursePost}
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
          this.props.navigation.navigate("DetailCoursePost", { id: item.id })}
      >
        <Left>
          <Thumbnail source={{ uri: "https://reactjs.org/logo-og.png" }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
          <Text note>
            {item.real_address}, {item.address}
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
        <Button iconLeft success onPress={() => this.props.navigation.navigate("AddCoursePost")}>
          <Icon name='home' />
          <Text>Them bai dang</Text>
        </Button>
        {this.state.ListCoursePost ? this.renderListItem() : null}
        </Content>
      </Container>
    );
  }
}
