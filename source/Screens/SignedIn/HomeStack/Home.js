import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
  Text
} from "native-base";
import { StackNavigator } from "react-navigation";

import ListCoursePost from "./ListCoursePost";
import AddCoursePost from "./AddCoursePost";
import DetailCoursePost from "./DetailCoursePost";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSegment: "Course"
    };
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
          <Container style={{ flex: 1, backgroundColor: 'white' }}>
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

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
          <Segment style={{ backgroundColor: "white" }}>
            <Button
              first
              style={{
                backgroundColor:
                  this.state.activeSegment === "Course" ? "#578F86" : "#FFFFFF",
                borderColor: "#578F86"
              }}
              active={this.state.activeSegment === "Course"}
              onPress={() => this.setState({ activeSegment: "Course" })}
            >
              <Text
                style={{
                  color:
                    this.state.activeSegment === "Course"
                      ? "#FFFFFF"
                      : "#000000"
                }}
              >
                Course
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor:
                  this.state.activeSegment === "Teacher"
                    ? "#578F86"
                    : "#FFFFFF",
                borderColor: "#578F86"
              }}
              active={this.state.activeSegment === "Teacher"}
              onPress={() => this.setState({ activeSegment: "Teacher" })}
            >
              <Text
                style={{
                  color:
                    this.state.activeSegment === "Teacher"
                      ? "#FFFFFF"
                      : "#000000"
                }}
              >
                Teacher
              </Text>
            </Button>

            <Button
              last
              style={{
                backgroundColor:
                  this.state.activeSegment === "Profile"
                    ? "#578F86"
                    : "#FFFFFF",
                borderColor: "#578F86"
              }}
              active={this.state.activeSegment === "Profile"}
              onPress={() => this.setState({ activeSegment: "Profile" })}
            >
              <Text
                style={{
                  color:
                    this.state.activeSegment === "Profile"
                      ? "#FFFFFF"
                      : "#000000"
                }}
              >
                Profile
              </Text>
            </Button>
          </Segment>
        </Header>
        <Content padder>{this.renderCom()}</Content>
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
