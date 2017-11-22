import React, { Component } from "react";

import {
  View,
  Image,
  AsyncStorage,
  StyleSheet
} from "react-native";

import {
  Body,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';

import { SignInUrl } from "../../helper/LinkUrl";
import I18n from "../../i18n/i18n";
import { SignedIn } from "../../Router";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validasteEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  async SignIn() {
    if (
      this.state.email == "" ||
      this.state.password == ""
    ) {
      Alert.alert("Error", "Email/ Password not blank");
      return false;
    }
    if (!this.validasteEmail(this.state.email)) {
      alert("Error", "Email wrong format");
      return false;
    }
    if (this.state.password.length < 6) {
      Alert.alert("Error", "Password length must >= 6");
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
        this.state.response = "";
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
          <Item floatingLabel last>
            <Label>{I18n.t("password")}</Label>
            <Input
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Body>
            <Button
              style={styles.button}
              block warning
              onPress={() => this.SignIn()}>
              <Text>{I18n.t("sign_in")}</Text>
            </Button>
          </Body>
        </Form>
        <View style={styles.logoContain}>
          <Text
            style={styles.text}
            onPress={() => this.props.navigation.navigate("SignUp")}>
            {I18n.t("dont_have_a_account")}
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
