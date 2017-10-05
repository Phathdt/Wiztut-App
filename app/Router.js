import { Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'

import AddAvatar from './Screens/AddAvatar'
import CoursePost from './Screens/CoursePost'
import FilterCoursePost from './Screens/FilterCoursePost'
import FilterTeacherPost from './Screens/FilterTeacherPost'
import Home from './Screens/Home'
import Introduction from './Screens/Introduction'
import ListCoursePost from './Screens/ListCoursePost'
import ListProfile from './Screens/ListProfile'
import ListTeacherPost from './Screens/ListTeacherPost'
import Location from './Screens/Location'
import Profile from './Screens/Profile'
import Search from './Screens/Search'
import SearchProfile from './Screens/SearchProfile'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import TeacherPost from './Screens/TeacherPost'
import Notification from './Screens/Notification'

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

  // Course Post Stack
  ListCoursePost: {
    screen: ListCoursePost,
    navigationOptions: ({navigation}) => ({
      title: `ListCoursePost`,
    })
  },
  CoursePost: {
    screen: CoursePost,
    navigationOptions: ({navigation}) => ({
      title: `CoursePost`,
    })
  },

  // Teacher Post Stack
  ListTeacherPost: {
    screen: ListTeacherPost,
    navigationOptions: ({navigation}) => ({
      title: `ListTeacherPost`,
    })
  },
  TeacherPost: {
    screen: TeacherPost,
    navigationOptions: ({navigation}) => ({
      title: `TeacherPost`,
    })
  },

  //  Profile Stack
  ListProfile: {
    screen: ListProfile,
    navigationOptions: ({navigation}) => ({
      title: `ListProfile`,
    })
  }
})

export const SearchStack = StackNavigator({
  FilterCoursePost: {
    screen: FilterCoursePost,
    navigationOptions: ({navigation}) => ({
      title: `FilterCoursePost`,
    })
  },
  FilterTeacherPost: {
    screen: FilterTeacherPost,
    navigationOptions: ({navigation}) => ({
      title: `FilterTeacherPost`,
    })
  },
  SearchProfile: {
    screen: SearchProfile,
    navigationOptions: ({navigation}) => ({
      title: `SearchProfile`,
    })
  }
})

export const LocationStack = StackNavigator({
  Location: {
    screen: Location,
    navigationOptions: ({navigation}) => ({
      title: `Location`,
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

export const SignedIn = TabNavigator({
  HomeStack: {
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
  SearchStack: {
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
  LocationStack: {
    screen: LocationStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Location`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/location.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  NotificationStack: {
    screen: NotificationStack,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Notification`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/location.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  ProfileStack: {
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


