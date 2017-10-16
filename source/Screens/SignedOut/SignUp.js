import React, { Component } from 'react';

import { 
  View, 
  Button,
  Text,
  TextInput 
} from 'react-native';

import {SignUpUrl} from '../../helper/LinkUrl';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email                : '',
      password             : '',
      password_confirmation: ''
    };
  }
  async SignIn(){
    if(
      this.state.password == this.state.password_confirmation
      && this.state.email != ''
      && this.state.password != ''
    )
    {
      try {
        let response = await fetch(SignUpUrl, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            registration:{
              email                : this.state.email,
              password             : this.state.password,
              password_confirmation: this.state.password_confirmation
            }
          })
        });
        if(response.status==200){
          this.props.navigation.navigate("SignedOut");
        }
      }
      catch(error) {
        
      }
    }
  }
  render() {
    return (
      <View>
        <Button
          title   = "SignedIn"
          onPress = {() => this.props.navigation.navigate("SignedIn")}
        />
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
        <Text>
          Re-password: 
        </Text>
        <TextInput
          value           = {this.state.password_confirmation}
          secureTextEntry = {true}
          onChangeText    = {(password_confirmation) => this.setState({password_confirmation})}
        />
        <Button
          title   = "Sign up"
          onPress = {() => this.SignIn()}
        />
      </View>
      
    );
  }
}


