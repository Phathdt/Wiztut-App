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
      <View>
        <Body>
          <Image
            style={{ width: 200, height: 200, marginTop: 20 }}
            source={{
              uri:
                "data:image/png;base64,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"
            }}
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1
  },
  icon: {
    width: 28,
    height: 28
  },
  logo: {
    marginLeft: 143,
    marginTop: 52,
    width: 132,
    height: 103
  },
  wallpaper: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
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
  },
  item: {
    padding: 10,
    flexDirection: "column"
  },
  itemTop: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10
  },
  itemTopLeft: {
    flex: 1
  },
  itemTopRight: {
    flex: 7,
    justifyContent: "center"
  },
  itemImage: {
    height: 257
  },
  itemBot: {
    height: 100,
    flexDirection: "column",
    marginBottom: 20
  },
  itemBotEmotion: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row"
  },
  itemBotLike: {
    flex: 1
  },
  itemBotComment: {
    flex: 1
  },
  comment: {
    marginTop: -22,
    flexDirection: "column"
  },
  commentItem: {
    height: 37,
    marginLeft: 10,
    flexDirection: "row"
  },
  commentItemAvatar: {
    width: 30,
    height: 30,
    flex: 1
  },
  commentItemContent: {
    flex: 6,
    flexDirection: "column"
  },
  commentContent: {
    flex: 1
  },
  commentTime: {
    flex: 1
  },
  commentItemEmotion: {
    flex: 1
  },
  input: {
    height: 30,
    width: "94%",
    backgroundColor: "white",
    marginBottom: 20,
    color: "#4E173C",
    paddingHorizontal: "3%",
    borderWidth: 2,
    borderRadius: 5,
    textAlign: "center"
  },
  avatars: {
    marginHorizontal: "3%",
    height: 100,
    width: "94%",
    marginTop: -5
  },
  listFlexBox: {
    width: "100%",
    height: 520,
    flexDirection: "column"
  },
  flexImage: {
    width: "100%",
    height: "100%"
  },
  profile: {
    marginHorizontal: "3%",
    height: 175,
    width: "94%",
    marginTop: -5
  },
  profileTop: {
    height: 100,
    flexDirection: "row"
  },
  profileItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  editProfile: {
    height: "80%",
    width: "90%",
    marginHorizontal: "5%",

    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5
  },
  profileMid: {
    height: 43,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#4E173C"
  },
  profileBot: {
    height: 1656,
    width: "100%"
  },
  buttonDash: {
    width: 110,
    height: 35,
    borderRadius: 17,
    borderWidth: 1,
    borderStyle: "dashed",
    marginHorizontal: 10
  },
  buttonChosen: {
    width: 110,
    height: 35,
    marginLeft: 10,
    textAlign: "center",
    paddingTop: 5,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    fontSize: 15,
    color: "white"
  },
  buttonMix: {
    backgroundColor: "#2D8EFF",
    borderRadius: 5,
    width: 130,
    marginLeft: 0
  }
});
