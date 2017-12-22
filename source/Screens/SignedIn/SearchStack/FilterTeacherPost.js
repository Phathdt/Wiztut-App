import React, { Component } from 'react';

import { View, Button,TouchableHighlight,Text } from 'react-native';

import {
  Container,
  Content,
} from "native-base";

import I18n from "../../../config/i18n";
import styles from "../../../helper/styles";
import api from "../../../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../../../redux/actionCreators';

import { filter_teacher_posts } from "../../../helper/tcomb-form-model";
import { options } from "../../../helper/tcomb-form-option";
import { Form } from "../../../helper/tcomb-form";

export default class FilterTeacherPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    }
  }
  async FilterClick() {
    const tcp = this.refs.form.getValue();
    if (tcp) {
      const res = await api.getFilterTeacherPost(tcp).then(data => {
        this.setState({
          list: data
        })
      })
      this.props.navigation.navigate("FilterDetail",{list:this.state.list,case:`Teacher`});
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
            type={filter_teacher_posts}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
            <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            underlayColor="red"
            onPress={() => this.FilterClick()}
          >
          <Text style={styles.buttonText}>Filter</Text>
          </TouchableHighlight>
         </Content> 
      </Container>
    );
  }
}
