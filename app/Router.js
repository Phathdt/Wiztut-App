import { Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'

import Home from './Screens/Home'
import Search from './Screens/Search'
import Upload from './Screens/Upload'
import Notification from './Screens/Notification'
import Profile from './Screens/Profile'


import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import Introduction from "./Screens/Introduction";
import AddAvatar from "./Screens/AddAvatar";

import styles from './src/stylesheet/style'

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SignedOut = StackNavigator({
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      title: "Introduction"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  AddAvatar: {
    screen: AddAvatar,
    navigationOptions: {
      title: "Add Avatar"
    }
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: `Home`,
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: `Profile`,
    })
  }
})

export const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      title: `Search`,
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: `Profile`,
    })
  }
})

export const UploadStack = StackNavigator({
  Upload: {
    screen: Upload,
    navigationOptions: ({navigation}) => ({
      title: `Upload`,
    })
  }
})

export const NotificationStack = StackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: ({navigation}) => ({
      title: `Notification`,
    })
  }
})

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: `Profile`,
    })
  }
})

// export const Stack2 = StackNavigator({
//   Upload: {
//     screen: Upload,
//     navigationOptions: ({navigation}) => ({
//       title: `Upload`,
//     })
//   },
//   Notification: {
//     screen: Notification,
//     navigationOptions: ({navigation}) => ({
//       title: `Notification`,
//     })
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: ({navigation}) => ({
//       title: `Profile`,
//     })
//   }
// })



export const SignedIn = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Home`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Search: {
    screen: SearchStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Search`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/search.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Upload: {
    screen: UploadStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Upload`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/upload.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Notification`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/notification.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Profile`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/profile.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  }
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#e3c800',
    inactiveTintColor: '#a0522d',
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      flex: 1 ,
      // height: 60 ,
    },
    style: {
      // backgroundColor: 'blue',
    },
  },
});


