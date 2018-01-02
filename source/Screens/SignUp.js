import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert
} from "react-native";
import I18n from "../config/i18n";
import styles from "../helper/styles";
import api from "../api/api.js";

import { connect } from 'react-redux';
import { setUser} from '../redux/actionCreators';

import { userSignUp } from "../helper/tcomb-form-model";
import { options } from "../helper/tcomb-form-option";
import { Form } from "../helper/tcomb-form";

class SignUp extends Component {
  async SignUp() {
    const user = this.refs.form.getValue();
    if (user) {
      const res = await api.signUp(user);

      if (res.status == 200) {
        const resJson = await res.json();
        this.props.setUser(resJson.data)
        this.props.navigation.navigate("SignedIn");
      } else {
        Alert.alert(I18n.t("error"), I18n.t("something_wrong"));
      }
    } else {
      return false;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoAuthentica}
          source={require("../src/images/logo.png")}
        />
        <View style={styles.container}>
          <Form
            ref="form"
            type={userSignUp}
            options={options}
            onChange={() => this.refs.form.validate()}
          />
          <TouchableHighlight
            style={[styles.button, { marginTop: 20 }]}
            onPress={this.SignUp.bind(this)}
            underlayColor="red"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
        <Text style={{ alignSelf: "center", fontSize: 16 }}>
          <Text>{I18n.t("have_an_account")}</Text>
          <Text
            style={{ color: "#E96758" }}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            {I18n.t("sign_in")}
          </Text>
        </Text>
      </View>
    );
  }
}

export default connect( null ,{ setUser })(SignUp);
