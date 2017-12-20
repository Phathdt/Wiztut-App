import React, { Component } from 'react';

import { View, Button,TouchableHighlight } from 'react-native';

import {
  CheckBox,
  Body,
  Text,
  ListItem
} from 'native-base'

import I18n from "../../../config/i18n";
import styles from "../../../helper/styles";
import api from "../../../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../../../redux/actionCreators';

import { filter_profile } from "../../../helper/tcomb-form-model";
import { options } from "../../../helper/tcomb-form-option";
import { Form } from "../../../helper/tcomb-form";

export default class SearchProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
          <Form
            ref="form"
            type={filter_profile}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
          <ListItem>
          <CheckBox checked={this.state.checked} onPress={()=>this.setState({checked:!this.state.checked})} />
          <Body>
              <Text>Is Teacher?</Text>
              </Body>
              </ListItem>
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