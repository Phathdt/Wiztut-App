import React, { Component } from "react";

import {
  View,
  Button,
  Text,
  TextInput,
  AsyncStorage,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import { SignInUrl } from "../../helper/LinkUrl";
import I18n from "../../i18n/i18n";
import { Form, Item, Input, Label, Body } from "native-base";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async SignIn() {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = this.state.email;
    let password = this.state.password;
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Error", "Email/ Password not blank");
      return false;
    }

    if ( password.length < 6) {
      Alert.alert("Error", "Password length must >= 6");
      return false;
    }

    if (!email.match(regexEmail)) {
      Alert.alert("Error", "Email wrong format");
      return false;
    }

    try {
      let response = await fetch(SignInUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          session: {
            email: this.state.email.toLowerCase(),
            password: this.state.password
          }
        })
      });
      if (response.status == 200) {
        let responseJson = await response.json();
        await AsyncStorage.setItem(
          "Token",
          responseJson.data.authentication_token
        );
        this.props.navigation.navigate("SignedIn");
      } else {
        Alert.alert("Error", "Email/Password wrong");
        return false;
      }
    } catch (error) {}
  }
  render() {
    return (
      <View style={{backgroundColor: 'white' }}>
        <Body>
          <Image
            style={{ width: 400, height: 200, marginTop: 20 }}
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
          <TouchableOpacity
            style={[styles.buttonStyle, { marginTop: 55, marginLeft: 10 }]}
            onPress={() => this.SignIn()}
          >
            <Text style={styles.buttonText}>{I18n.t("sign_in")}</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 37, marginLeft: 20, fontSize: 16 }}>
            <Text>{I18n.t("dont_have_a_account")}</Text>
            <Text
              style={{ color: "#E96758" }}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              {I18n.t("sign_up")}
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
