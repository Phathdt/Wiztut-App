import React, { Component } from 'react';

import { View, Button, TouchableHighlight } from 'react-native';

import {
  CheckBox,
  Body,
  Text,
  ListItem,
  Container,
  Content,
} from 'native-base'

import I18n from "../../../config/i18n";
import styles from "../../../helper/styles";
import api from "../../../api/api.js";

import { connect } from 'react-redux';
import { setUser } from '../../../redux/actionCreators';

import { filter_profile } from "../../../helper/tcomb-form-model";
import { options } from "../../../helper/tcomb-form-option";
import { Form } from "../../../helper/tcomb-form";

class SearchProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: false,
      list: null,
      token:this.props.user.authentication_token
    };
  }
  async FilterClick() {
    const profile = this.refs.form.getValue();
    if (profile) {
      const res = await api.getFilterProfile(profile,this.state.token,this.state.teacher).then(data => {
        this.setState({
          list: data
        })
      })
      this.props.navigation.navigate("FilterDetail",{list:this.state.list,case:`Profile`});
    } else {
      return false;
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ListItem>
            <CheckBox checked={this.state.teacher} onPress={() => this.setState({ teacher: !this.state.teacher })} />
            <Body>
              <Text>{I18n.t("is_teacher")}</Text>
            </Body>
          </ListItem>
          <Form
            ref="form"
            type={filter_profile}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
          <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            underlayColor="red"
            onPress={() => this.FilterClick()}
          >
            <Text style={styles.buttonText}>{I18n.t("filter_button")}</Text>
          </TouchableHighlight>
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

export default connect(mapStateToProps)(SearchProfile);