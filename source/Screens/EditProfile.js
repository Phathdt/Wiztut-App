import React, { Component } from 'react';

import {
  View,
  Button,
  TouchableHighlight,
  Text,
  ScrollView,
  Alert
} from 'react-native';

import {
  Container,
  Content,
  Body,
} from "native-base";

import I18n from "../config/i18n";
import styles from "../helper/styles";
import api from "../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../redux/actionCreators';

import { edit_profile } from "../helper/tcomb-form-model";
import { options } from "../helper/tcomb-form-option";
import { Form } from "../helper/tcomb-form";

import HeaderCustom from '../Components/HeaderCustom'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: this.props.navigation.state.params.isEdit,
      token: this.props.user.authentication_token
    };
  }
  async EditClick() {
    const edp = this.refs.form.getValue();
    if (edp) {
      var res = null
      if(this.state.isEdit)
      {
         res = await api.editProfile(edp,this.state.token)
      }
      else
      {
        res = await api.createProfile(edp,this.state.token)
      }
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

  renderHeader(){
    return(
      <HeaderCustom
        titleComponent={this.CustomTitle()}
        navigation={this.props.navigation}
      />
    )
  }

  CustomTitle() {
    return(
      <Container style={{width: 300, flex: 1}}>
        <Body>
          <Text style={styles.heading}>Cập nhập thông tin    </Text>
        </Body>
      </Container>
      )
  }

  render() {
    return (
      <View>
        { this.renderHeader()}
        <ScrollView style={{marginTop:5}}>
          <View style={styles.container}>
            <View style={styles.container}>
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
          <Text style={styles.buttonText}>{this.state.isEdit?I18n.t("edit_profile"):I18n.t("create_profile")}</Text>
          </TouchableHighlight>
         </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user,
  };
}

export default connect(mapStateToProps)(EditProfile);
