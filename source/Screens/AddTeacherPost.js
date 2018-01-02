import React, { Component } from 'react';

import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Alert
} from "react-native";

import {
  Header,
  Container,
  Body
} from 'native-base'
import I18n from "../config/i18n";
import styles from "../helper/styles";
import api from "../api/api.js";

import { teacher_posts } from "../helper/tcomb-form-model";
import { options } from "../helper/tcomb-form-option";
import { Form } from "../helper/tcomb-form";

import HeaderCustom from '../Components/HeaderCustom'

export default class AddTeacherPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.navigation.state.params.token
    };

  }

  async AddTeacherPost() {
    const teacher_post = this.refs.form.getValue();
    if (teacher_post) {
      const res = await api.AddTeacherPost(teacher_post, this.state.token);

      if (res.status == 200) {
        const resJson = await res.json();
        this.props.navigation.navigate("DetailTeacherPost", { id: resJson.teacher_post.id })
      } else {
        Alert.alert(I18n.t("error"), I18n.t("something_wrong"));
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
          <Text style={styles.heading}>Tạo lớp    </Text>
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
                type={teacher_posts}
                options={options}
                onChange={() => this.refs.form.validate()}
              />
              <TouchableHighlight
                style={[styles.button, { marginTop: 20 }]}
                onPress={this.AddTeacherPost.bind(this)}
                underlayColor="red"
              >
                <Text style={styles.buttonText}>{I18n.t('create_new_cp')}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
