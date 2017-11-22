import React, { Component } from "react";

import {
  View,
  Button,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import I18n from "../../i18n/i18n";
import { Form, Item, Input, Label, Body } from "native-base";

import { SignUpUrl } from "../../helper/LinkUrl";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    };
  }
  async SignIn() {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = this.state.email;
    let password = this.state.password;
    let password_confirmation = this.state.password_confirmation;

    if (
      email.length == 0 ||
      password.length == 0 ||
      password_confirmation.length == 0
    ) {
      Alert.alert("Error", "Email/ Password /Password Comfirmation not blank");
      return false;
    }

    if (password.length < 6 || password_confirmation.length < 6) {
      Alert.alert("Error", "Password/ Password Comfirmation length must >= 6");
      return false;
    }

    if (password !== password_confirmation) {
      Alert.alert("Error", "Password /Password Comfirmation not match");
      return false;
    }

    if (!email.match(regexEmail)) {
      Alert.alert("Error", "Email wrong format");
      return false;
    }

    try {
      let response = await fetch(SignUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          registration: {
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
          }
        })
      });
      if (response.status == 200) {
        let responseJson = await response.json();
        this.props.navigation.navigate("SignedIn");
      } else {
        Alert.alert("Error", "Something wrong");
        return false;
      }
    } catch (error) {}
  }
  render() {
    return (
      <View style={{backgroundColor: 'white' }}>
        <Body>
          <Image
            style={{ width: 350, height: 200, marginTop: 20 }}
            source={require('../../src/images/logo.png')}
          />
        </Body>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>{I18n.t("email")}</Label>
            <Input
              keyboardType={"email-address"}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>{I18n.t("password")}</Label>
            <Input
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Item floatingLabel>
            <Label>{I18n.t("re_password")}</Label>
            <Input
              value={this.state.password_confirmation}
              secureTextEntry={true}
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })}
            />
          </Item>
          <TouchableOpacity
            style={[styles.buttonStyle, { marginTop: 55, marginLeft: 10 }]}
            onPress={() => this.SignIn()}
          >
            <Text style={styles.buttonText}>{I18n.t("sign_in")}</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 37, marginLeft: 50, fontSize: 16 }}>
            <Text>{I18n.t("have_an_account")}</Text>
            <Text
              style={{ color: "#E96758" }}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              {I18n.t("sign_in")}
            </Text>
          </Text>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 250,
    marginHorizontal: 35
  },
  buttonStyle: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 52,
    borderColor: "#ffffff",
    backgroundColor: "#FF8548",
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontSize: 20
  }
});
