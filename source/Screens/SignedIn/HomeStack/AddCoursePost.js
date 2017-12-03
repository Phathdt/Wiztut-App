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
  Container
} from 'native-base'
import I18n from "../../../config/i18n";
import styles from "../../../helper/styles";
import api from "../../../api/api.js";

import { course_posts } from "../../../helper/tcomb-form-model";
// option
import { options } from "../../../helper/tcomb-form-option";
import { Form } from "../../../helper/tcomb-form";

export default class AddCoursePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.navigation.state.params.token
    };

  }

  async AddCoursePost() {
    const course_posts = this.refs.form.getValue();
    if (course_posts) {
      const res = await api.AddCoursePost(course_posts, this.state.token);

      if (res.status == 200) {
        const resJson = await res.json();
        this.props.navigation.navigate("DetailCoursePost", { id: resJson.course_post.id })
      } else {
        Alert.alert(I18n.t("error"), I18n.t("something_wrong"));
      }
    } else {
      return false;
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container}>
            <Form
              ref="form"
              type={course_posts}
              options={options}
              onChange={() => this.refs.form.validate()}
            />
            <TouchableHighlight
              style={[styles.button, { marginTop: 20 }]}
              onPress={this.AddCoursePost.bind(this)}
              underlayColor="red"
            >
              <Text style={styles.buttonText}>{I18n.t('create_new_cp')}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
