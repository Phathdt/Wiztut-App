import { Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

// Signed Out
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";

// Conversation
import AddNewConversation from "./Screens/AddNewConversation";
import DetailConversation from "./Screens/DetailConversation";
import InformationConversation from "./Screens/InformationConversation";
import ListConversation from "./Screens/ListConversation";
import UpdateConversation from "./Screens/UpdateConversation";

// Signed In
import Home from "./Screens/Home";
import ListCoursePost from "./Screens/ListCoursePost";
import ListTeacherPost from "./Screens/ListTeacherPost";
import ListProfile from "./Screens/ListProfile";
import AddCoursePost from "./Screens/AddCoursePost";
import DetailCoursePost from "./Screens/DetailCoursePost";
import AddTeacherPost from "./Screens/AddTeacherPost";
import DetailTeacherPost from "./Screens/DetailTeacherPost";

import Filter from "./Screens/Filter";
import FilterCoursePost from "./Screens/FilterCoursePost";
import FilterTeacherPost from "./Screens/FilterTeacherPost";
import SearchProfile from "./Screens/SearchProfile";
import FilterDetail from "./Screens/FilterDetail";

import Location from "./Screens/Location";

import Profile from "./Screens/Profile";
import AnotherProfile from "./Screens/AnotherProfile"
import styles from "./src/stylesheet/style";

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
      },
      Conversation: {
        screen: Conversation,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      // Common Screen
      DetailCoursePost: {
        screen: DetailCoursePost
      },
      AddCoursePost: {
        screen: AddCoursePost,
      },
      DetailTeacherPost: {
        screen: DetailTeacherPost
      },
      AddTeacherPost: {
        screen: AddTeacherPost,
      },
      AnotherProfile: {
        screen: AnotherProfile,
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const Conversation = StackNavigator({
  ListConversation: {
    screen: ListConversation,
    navigationOptions: ({ navigation }) => ({
      title: `ListConversation`
    })
  },
  DetailConversation: {
    screen: DetailConversation,
    navigationOptions: {
      header: null
    }
  },
  InformationConversation: {
    screen: InformationConversation,
    navigationOptions: ({ navigation }) => ({
      title: `InformationConversation`
    })
  },
  AddNewConversation: {
    screen: AddNewConversation,
    navigationOptions: {
      header: null
    }
  },
  UpdateConversation: {
    screen: UpdateConversation,
    navigationOptions: ({ navigation }) => ({
      title: `UpdateConversation`
    })
  }
});

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

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    headerMode: "none",
    header: null,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
},{
  navigationOptions: {
    headerStyle: {
        backgroundColor: 'white',
        height: 55,
        borderBottomWidth: 3,
        borderBottomColor: '#578F86',
        marginTop: -15
    },
    headerTitleStyle: {
        color: 'black',
    },
    headerBackTitleStyle: {
        color: '#578F86',
    },
    headerTintColor: '#578F86',
  }
})
export const SignedIn = TabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: `Home`,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./src/images/home.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      })
    },
    SearchStack: {
      screen: StackNavigator({
        Filter: {
          screen: Filter,
          navigationOptions: ({ navigation }) => ({
            title: `Filter tất cả`
          })
        },
        FilterCoursePost: {
          screen: FilterCoursePost,
          navigationOptions: ({ navigation }) => ({
            title: `Filter CoursePost`
          })
        },
        FilterTeacherPost: {
          screen: FilterTeacherPost,
          navigationOptions: ({ navigation }) => ({
            title: `Filter TeacherPost`
          })
        },
        SearchProfile: {
          screen: SearchProfile,
          navigationOptions: ({ navigation }) => ({
            title: `Filter Profile`
          })
        },
        FilterDetail: {
          screen: FilterDetail,
          navigationOptions: ({ navigation }) => ({
            title: `FilterDetail`
          })
        },
      }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: `Home`,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./src/images/search.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      })
    },
    LocationStack: {
      screen: StackNavigator({
        Location: {
          screen: Location,
          navigationOptions: ({ navigation }) => ({
            title: `Notification`
          })
        }
      }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: `Home`,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./src/images/notification.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: `Profile`,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./src/images/profile.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      })
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#13877A",
      inactiveTintColor: "#696969"
    }
  }
);
