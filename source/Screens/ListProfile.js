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

import I18n from "../config/i18n";
import api from "../api/api";
import { connect } from 'react-redux';

class ListProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListProfile: this.props.listPf,
      page: 1
    };
  }

  renderListItem() {
    return (
      <FlatList
        refreshing={false}
        onEndReachedThreshold={-0.2}
        extraData={this.state}
        data={this.state.ListProfile}
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
          this.props.navigation.navigate("AnotherProfile", { id: item.id })}
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

  render() {
    return (
      <Container>

        <Content>

          {this.state.ListProfile ? this.renderListItem() : null}
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

export default connect(mapStateToProps)(ListProfile);
