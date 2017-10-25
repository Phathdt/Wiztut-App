import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Swiper from 'react-native-swiper'


// press Skip or Done => Home(or SignIn)
export default class extends Component {
  render () {
    return (
      <Swiper style={styles.wrapper} showsButtons>
      <StatusBar Hidden="true" />
        <View style={styles.slide1}>
          <Text style={styles.text}>Intro1</Text>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
          <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Intro2</Text>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
          <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Intro3</Text>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
          <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Done</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
  }
}

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}
