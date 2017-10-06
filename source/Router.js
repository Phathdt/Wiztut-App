import { Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'

// Signed Out
import SignIn from './Screens/SignedOut/SignIn'
import SignUp from './Screens/SignedOut/SignUp'

// Signed In
import Home from './Screens/SignedIn/HomeStack/Home'
import ListCoursePost from './Screens/SignedIn/HomeStack/ListCoursePost'
import ListTeacherPost from './Screens/SignedIn/HomeStack/ListTeacherPost'
import ListProfile from './Screens/SignedIn/HomeStack/ListProfile'
import AddCoursePost from './Screens/SignedIn/HomeStack/AddCoursePost'
import DetailCoursePost from './Screens/SignedIn/HomeStack/DetailCoursePost'
import AddTeacherPost from './Screens/SignedIn/HomeStack/AddTeacherPost'
import DetailTeacherPost from './Screens/SignedIn/HomeStack/DetailCoursePost'

import FilterCoursePost from './Screens/SignedIn/SearchStack/FilterCoursePost'
import FilterTeacherPost from './Screens/SignedIn/SearchStack/FilterTeacherPost'
import SearchProfile from './Screens/SignedIn/SearchStack/SearchProfile'

import Location from './Screens/SignedIn/LocationStack/Location'

import Profile from './Screens/SignedIn/ProfileStack/Profile'

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
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
});

export const SignedIn = TabNavigator({
  HomeStack: {
    screen: StackNavigator({
      Home: { 
        screen: Home,
        navigationOptions: ({navigation}) => ({
          title: `Home`,
        })
      },
      ListCoursePost: { 
        screen: ListCoursePost,
        navigationOptions: ({navigation}) => ({
          title: `ListCoursePost`,
        })
      },
      DetailCoursePost: { 
        screen: DetailCoursePost,
        navigationOptions: ({navigation}) => ({
          title: `DetailCoursePost`,
        })
      },
      AddCoursePost: { 
        screen: AddCoursePost,
        navigationOptions: ({navigation}) => ({
          title: `AddCoursePost`,
        })
      },
      ListTeacherPost: { 
        screen: ListTeacherPost,
        navigationOptions: ({navigation}) => ({
          title: `ListTeacherPost`,
        })
      },
      DetailTeacherPost: { 
        screen: DetailTeacherPost,
        navigationOptions: ({navigation}) => ({
          title: `DetailTeacherPost`,
        })
      },
      AddTeacherPost: { 
        screen: AddTeacherPost,
        navigationOptions: ({navigation}) => ({
          title: `AddTeacherPost`,
        })
      },
      ListProfile: { 
        screen: ListProfile,
        navigationOptions: ({navigation}) => ({
          title: `ListProfile`,
        })
      }
    }),
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
    screen: StackNavigator({
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
      },
    }),
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Home`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/search.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  LocationStack: {
    screen: StackNavigator({
      Location: { 
        screen: Location,
        navigationOptions: ({navigation}) => ({
          title: `Location`,
        })
      }
    }),
    navigationOptions: ({navigation}) => ({
      tabBarLabel: `Home`,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/location.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    })
  },
  Profile: {
    screen: Profile,
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
    showLabel: false,
    activeTintColor: '#e3c800',
    inactiveTintColor: '#a0522d'
  },
});


