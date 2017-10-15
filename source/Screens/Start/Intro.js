import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    this.setState({
      items: [
        { title: 'Thang Nhat', css: styles.slide1 },
        { title: 'Thang Phat', css: styles.slide2 },
        { title: 'Thang Viet Anh', css: styles.slide3 }
      ]
    })
  }
  render () {
    return (
      <Swiper showsButtons>
        {this.state.items.map((item, key) => {
          return (
            <View key={key} style={item.css}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )
        })}
      </Swiper>
    )
  }
}

//custom css cho 3 slide swiper
const styles = {
  //css cho slide swiper thang Nhat
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e01010'// set color cho slide swiper
  },

  //css cho slide swiper thang Phat
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E08C0D'
  },

  //css cho slide swiper thang Viet Anh
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbd528'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}
