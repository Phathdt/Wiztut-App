import React, { Component } from "react";

import { View, Button, Text, TextInput } from "react-native";

import { SignInUrl } from "../../helper/LinkUrl";
import I18n from "../../i18n/i18n";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  async SignIn() {
    if (this.state.email != "" && this.state.password != "") {
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
        <Button title={I18n.t("sign_in")} onPress={() => this.SignIn()} />
        <Button
          title={I18n.t("sign_up")}
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
