import React, { Component } from "react";

import { View, Button, Text, TextInput } from "react-native";
import I18n from "../../i18n/i18n";

import { SignUpUrl } from "../../helper/LinkUrl";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email                : "",
      password             : "",
      password_confirmation: ""
    };
  }
  async SignIn() {
    if (
      this.state.password == this.state.password_confirmation &&
      this.state.email != "" &&
      this.state.password != ""
    ) {
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
          this.props.navigation.navigate("SignedIn");
        }
      } catch (error) {}
    }
  }
  render() {
    return (
      <View>
        <Text>{I18n.t("email")}</Text>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <Text>{I18n.t("password")}</Text>
        <TextInput
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Text>{I18n.t("re_password")}</Text>
        <TextInput
          value={this.state.password_confirmation}
          secureTextEntry={true}
          onChangeText={password_confirmation =>
            this.setState({ password_confirmation })}
        />
        <Button title={I18n.t("sign_up")} onPress={() => this.SignIn()} />
        <Button
          title={I18n.t("have_an_account")}
          onPress={() => this.props.navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}
