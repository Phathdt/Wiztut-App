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

import ListCoursePost from "./ListCoursePost";
import AddCoursePost from "./AddCoursePost";
import DetailCoursePost from "./DetailCoursePost";

import styles from "../../../helper/styles";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSegment: "Course",
      is_teacher: true,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTUxNDk0MjU4Nn0.P8aQy8KWz_j4MERsaOVXP7S0XDMaGVJC0pqvYn5yD9A'
    };
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

  renderCom() {
    switch (this.state.activeSegment) {
      case "Teacher":
        return (
          <Container>
            <Text>Teacher</Text>
          </Container>
        );
      case "Course":
        return (
          <Container style={{ flex: 1, backgroundColor: "white" }}>
            <ListCoursePost navigation={this.props.navigation} />
          </Container>
        );
      case "Profile":
        return (
          <Container>
            <Text>Profile</Text>
          </Container>
        );
    }
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
            onPress={() => this.setState({ activeSegment: "Course" })}
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
            onPress={() => this.setState({ activeSegment: "Teacher" })}
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
            onPress={() => this.setState({ activeSegment: "Profile" })}
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
          <Input placeholder="Search" />
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
