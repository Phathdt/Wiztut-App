import React, { Component } from "react";

import { View, Image, AsyncStorage, StyleSheet } from "react-native";

import { Body, Form, Item, Input, Label, Button, Text } from 'native-base';

import I18n from "../../i18n/i18n";

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
  validasteEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  async Signup() {
    if (
      this.state.email == "" ||
      this.state.password == ""
    ){ 
      Alert.alert("Error", "Email/ Password not blank");
      return false;
    }
    if(this.state.password == this.state.password_confirmation){
      Alert.alert("Error", "Password confirmation is incorrect");
      return false;
    }
    if(this.state.password.length<6){
      Alert.alert("Error", "Password length must >= 6");
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
        await AsyncStorage.setItem(
          "Token",
          responseJson.data.authentication_token
        );
        this.props.navigation.navigate("SignedIn");
      }
      else alert("Error", "Email or password is incorrect");
    } catch (error) { }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContain}>
          <Image
            style={styles.logo}
            source={require('../../src/images/logo.png')}
          />
        </View>
        <Form>
          <Item floatingLabel>
            <Label>{I18n.t("email")}</Label>
            <Input
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
              value={this.state.re_password}
              secureTextEntry={true}
              onChangeText={re_password => this.setState({ re_password })}
            />
          </Item>
          <Body>
            <Button
              style={styles.button}
              block warning
              onPress={() => this.Signup()}>
              <Text>{I18n.t("sign_up")}</Text>
            </Button>
          </Body>
        </Form>
        <View style={styles.logoContain}>
          <Text
            style={styles.text}
            onPress={() => this.props.navigation.navigate("SignIn")}>
            {I18n.t("have_an_account")}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContain: {
    marginTop: 30,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 230,
  },
  text: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 30,
    width: 250,
  }
});