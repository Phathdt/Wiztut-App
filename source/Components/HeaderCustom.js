import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HeaderCustom extends Component {
  render() {
    return (
        <Header style={{marginBottom: -10}}>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack(null)}
          >
            <Icon name='arrow-back' />
          </Button>
          <Body>
            {this.props.titleComponent}
          </Body>
        </Header>
    );
  }
}


export default HeaderCustom;
