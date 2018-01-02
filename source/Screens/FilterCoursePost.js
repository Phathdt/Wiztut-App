import React, { Component } from 'react';

import { View, Button,TouchableHighlight,Text,Alert } from 'react-native';

import {
  Container,
  Content,
} from "native-base";

import I18n from "../config/i18n";
import styles from "../helper/styles";
import api from "../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../redux/actionCreators';

import { filter_course_posts } from "../helper/tcomb-form-model";
import { options } from "../helper/tcomb-form-option";
import { Form } from "../helper/tcomb-form";

class FilterCoursePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      token:this.props.user.authentication_token
    }
  }
  async FilterClick() {
    const fcp = this.refs.form.getValue();
    if (fcp) {
      const res = await api.getFilterCoursePost(fcp,this.state.token).then(data => {
        this.setState({
          list: data
        })
      })
      this.props.navigation.navigate("FilterDetail",{ list:this.state.list, case:`Course`});
    } else {
      return false;
    }
  }
  render() {
    return (
      <Container style={styles.container}>
      <Content>
          <Form
            ref="form"
            type={filter_course_posts}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
          <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            underlayColor="red"
            onPress={() => this.FilterClick()}
          >
          <Text
            style={styles.buttonText}>{I18n.t("filter_button")}</Text>
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

export default connect(mapStateToProps)(FilterCoursePost);

