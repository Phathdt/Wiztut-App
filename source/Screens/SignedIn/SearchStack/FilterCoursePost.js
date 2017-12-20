import React, { Component } from 'react';

import { View, Button,TouchableHighlight,Text } from 'react-native';

import I18n from "../../../config/i18n";
import styles from "../../../helper/styles";
import api from "../../../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../../../redux/actionCreators';

import { filter_course_posts } from "../../../helper/tcomb-form-model";
import { options } from "../../../helper/tcomb-form-option";
import { Form } from "../../../helper/tcomb-form";

export default class FilterCoursePost extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Form
            ref="form"
            type={filter_course_posts}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
          <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            underlayColor="red"
          >
          <Text style={styles.buttonText}>Filter</Text>
          </TouchableHighlight>
          
      </View>
    );
  }
}
