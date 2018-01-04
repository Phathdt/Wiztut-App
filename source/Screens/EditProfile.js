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

import { edit_profile } from "../helper/tcomb-form-model";
import { options } from "../helper/tcomb-form-option";
import { Form } from "../helper/tcomb-form";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.user.authentication_token
    };
  }
  async EditClick() {
    const edp = this.refs.form.getValue();
    if (edp) {
      const res = await api.editProfile(edp,this.state.token)

      if (res.status == 200) {
        const resJson = await res.json();
        this.props.navigation.navigate("Profile");
      } else {
        console.log(res)
        Alert.alert(I18n.t("error"));
      }
      
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
            type={edit_profile}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
            <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            underlayColor="red"
            onPress={() => this.EditClick()}
          >
          <Text style={styles.buttonText}>{I18n.t("edit_profile")}</Text>
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

export default connect(mapStateToProps)(EditProfile);
