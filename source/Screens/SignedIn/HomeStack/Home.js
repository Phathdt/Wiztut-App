import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Segment,
  Content,
  Text,
  Input,
  Item
} from "native-base";
import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux';

import ListCoursePost from "./ListCoursePost";
import AddCoursePost from "./AddCoursePost";
import DetailCoursePost from "./DetailCoursePost";


import ListTeacherPost from "./ListTeacherPost";
import AddTeacherPost from "./AddTeacherPost";
import DetailTeacherPost from "./DetailTeacherPost";

import ListProfile from "./ListProfile"

import styles from "../../../helper/styles";
import api from "../../../api/api.js";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSegment: "Course",
      is_teacher: true,
      listCp: null,
      listTp: null,
      listPf: null,
      search: "",
      page: 1,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNzQ0ODU1MH0.4eFSQdfLhXKu2GPP4S61X08lmRhwze9MKk7TEZTFYL4'
    };
    console.log(this.props.user)
    this.getData();
  }

  addNew() {
    const { navigate } = this.props.navigation;
    switch (this.state.activeSegment) {
      case "Teacher":
        navigate('AddTeacherPost', {token: this.state.token})
        break;
      case "Course":
        navigate('AddCoursePost', {token: this.state.token})
        break;
      default:
        break;
    }
  }

  getListCoursePost(page) {
    api.getListCoursePost(page, this.state.search).then(data => this.addData(data));
  }

  getListTeacherPost(page) {
    api.getListTeacherPost(page, this.state.search).then(data => this.addData(data));
  }

  getListProfile(page) {
    api.getListProfile(page, this.state.search, this.state.token).then(data => this.addData(data.users));
  }

  getData() {
    console.log(this.state.activeSegment)
    switch (this.state.activeSegment) {
      case "Teacher":
        this.getListTeacherPost(this.state.page)
        break
      case "Course":
        this.getListCoursePost(this.state.page)
        break;
      case "Profile":
        this.getListProfile(this.state.page)
        break;
    }
  }

  addData(data) {
    if (this.state.search !== "") {
      switch (this.state.activeSegment) {
        case "Teacher":
          this.setState({
            listTp: data
          });
          return null;
        case "Course":
          this.setState({
            listCp: data
          });

          return null;
        case "Profile":
          this.setState({
            listPf: data
          });

          return null;
      }
    } else {
      switch (this.state.activeSegment) {
        case "Teacher":
          this.setState({
            listTp: data
          });
          return null;
        case "Course":
          this.setState({
            listCp: data
          });

          return null;
        case "Profile":
          this.setState({
            listPf: data
          });

          return null;
      }
    }
  }


  renderCom() {
    switch (this.state.activeSegment) {
      case "Teacher":
          if (this.state.listTp == null || this.state.listTp.length == 0) {
            return(<Text>No data</Text>)
          } else {
            return (
              <Container style={{ flex: 1, backgroundColor: "white" }}>
                <ListTeacherPost
                  navigation={this.props.navigation}
                  listTp={this.state.listTp}
                  />
              </Container>
            );
          }
        break;
      case "Course":
          if (this.state.listCp == null || this.state.listCp.length == 0) {
            return(<Text>No data</Text>)
          } else {
            return (
              <Container style={{ flex: 1, backgroundColor: "white" }}>
                <ListCoursePost
                  navigation={this.props.navigation}
                  listCp={this.state.listCp}
                />
              </Container>
            );
          }
        break;
      case "Profile":
        if (this.state.listPf == null || this.state.listPf.length == 0) {
            return(<Text>No data</Text>)
          } else {
            return (
              <Container style={{ flex: 1, backgroundColor: "white" }}>
                <ListProfile
                  navigation={this.props.navigation}
                  listPf={this.state.listPf}
                />
              </Container>
            );
          }
        break;
    }
  }

  changeSegment(segment){
    Promise.resolve(
      this.setState({
        activeSegment: segment,
        search: ''
      }))
    .then(function() {
      this.getData()
    }.bind(this));
  }

  changeTextSearch(text){
    Promise.resolve(
      this.setState({
        search: text
      }))
    .then(function() {
      this.getData()
    }.bind(this));
  }

  renderSegment() {
    const activeSegment = this.state.activeSegment
    return (
      <Header style={styles.segment}>
        <Segment style={{ backgroundColor: "white", paddingLeft: 10 }}>
          <Button
            first
            style={{
              backgroundColor:
                activeSegment === "Course" ? "#578F86" : "#FFFFFF",
              borderColor: "#578F86"
            }}
            active={activeSegment === "Course"}
            onPress={() => this.changeSegment("Course")}
          >
            <Text
              style={{
                color:
                  activeSegment === "Course" ? "#FFFFFF" : "#000000"
              }}
            >
              Course
            </Text>
          </Button>
          <Button
            style={{
              backgroundColor:
                activeSegment === "Teacher" ? "#578F86" : "#FFFFFF",
              borderColor: "#578F86"
            }}
            active={activeSegment === "Teacher"}
            onPress={() => this.changeSegment("Teacher")}
          >
            <Text
              style={{
                color:
                  activeSegment === "Teacher" ? "#FFFFFF" : "#000000"
              }}
            >
              Teacher
            </Text>
          </Button>

          <Button
            last
            style={{
              backgroundColor:
                activeSegment === "Profile" ? "#578F86" : "#FFFFFF",
              borderColor: "#578F86"
            }}
            active={activeSegment === "Profile"}
            onPress={() => this.changeSegment("Profile")}
          >
            <Text
              style={{
                color:
                  activeSegment === "Profile" ? "#FFFFFF" : "#000000"
              }}
            >
              Profile
            </Text>
          </Button>
        </Segment>
        <Item>
          <Input placeholder="Underline Textbox" />
        </Item>
      </Header>
    );
  }

  renderSearch() {
    const { activeSegment, is_teacher} = this.state
    return (
      <Header searchBar rounded style={styles.searchBar}>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={(text) => this.changeTextSearch(text)}
            />
        </Item>
        <Button transparent
          onPress={() => this.addNew()}
        >
          { ( activeSegment == "Course") || ( activeSegment == "Teacher" && is_teacher ) ? <Text>Add</Text> : null}
        </Button>
      </Header>
    );
  }

  render() {
    return (
      <Container>
        {this.renderSearch()}
        {this.renderSegment()}

        <Content style={styles.contentHome} padder>
          {this.renderCom()}
        </Content>
      </Container>
    );
  }
}

class Course extends Component {
  render() {
    <Container>
      <Text>Course</Text>
    </Container>;
  }
}

class Profile extends Component {
  render() {
    <Container>
      <Text>Profile</Text>
    </Container>;
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Home);

