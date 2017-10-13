import React, { Component } from 'react';

import { View, Button,Text,TextInput } from 'react-native';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {email: '',password: ''};
    this.ClickMe = this.ClickMe.bind(this)
    this.getAPI=this.getAPI.bind(this)
  }
  ClickMe() {
    this.getAPI();
  }
  render() {
    return (
      <View>
        <Button
          title="SignedIn"
          onPress={this.ClickMe}
        />
        <Text>
          Email:
        </Text>
        <TextInput
          value = {this.state.email}
          onChangeText={(email) => this.setState({email})}
        />
        <Text>
          password:
        </Text>
        <TextInput
          value = {this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          title="Sign up"
          onPress={()=> this.props.navigation.navigate("SignUp")}
        />
      </View>
    )
  }
  async getAPI(){
    if(this.state.email!=''&& this.state.password!=''){
    try {
      let response = await fetch('https://mysterious-shore-50693.herokuapp.com/api/v1/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session:{
            email: this.state.email,
            password: this.state.password
          }
        })
      });
      if(response.status==200){
        this.props.navigation.navigate("SignedIn");
      }
    } catch(error) {
      
      }
    }
  }
}
