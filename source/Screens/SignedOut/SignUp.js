import React, { Component } from 'react';

import { View, Button,Text,TextInput } from 'react-native';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {email: '',password: '',re_password:''};
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
          onPress={() => this.props.navigation.navigate("SignedIn")}
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
        <Text>
          Re-password:
        </Text>
        <TextInput
          value = {this.state.re_password}
          onChangeText={(re_password) => this.setState({re_password})}
        />
        <Button
          title="Sign up"
          onPress={this.ClickMe}
        />
      </View>
      
    );
  }
  async getAPI(){
    if(this.state.password==this.state.re_password && this.state.email!=''&& this.state.password!='')
    try {
      let response = await fetch('https://mysterious-shore-50693.herokuapp.com/api/v1/users/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registration:{
            email: this.state.email,
            password: this.state.password,
            password_confirmation:this.state.re_password
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


