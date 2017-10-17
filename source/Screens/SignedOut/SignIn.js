import React, { Component } from 'react';

import { 
  View, 
  Button,
  Text,
  TextInput 
} from 'react-native';

import {SignInUrl} from '../../helper/LinkUrl';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email   : '',
      password: ''
    };
  }
  async SignIn(){
    if(this.state.email != '' && this.state.password != ''){
      try {
        let response = await fetch(SignInUrl, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session:{
              email   : this.state.email.toLowerCase(),
              password: this.state.password
            }
          })
        });
        if(response.status==200){
          this.props.navigation.navigate("SignedIn");
        }
      }
      catch(error) {
        
      }
    }
  }
  render() {
    return (
      <View>
        <Text>
          Email: 
        </Text>
        <TextInput
          value        = {this.state.email}
          onChangeText = {(email) => this.setState({email})}
        />
        <Text>
          password: 
        </Text>
        <TextInput
          value           = {this.state.password}
          secureTextEntry = {true}
          onChangeText    = {(password) => this.setState({password})}
        />
        <Button
          title   = "SignedIn"
          onPress = {() => this.SignIn()}
        />
        <Button
          title   = "Sign up"
          onPress = {() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    )
  }

}
