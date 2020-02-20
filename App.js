import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri:
        'https://i.pinimg.com/originals/b9/33/48/b93348cfbff525b6727370534a902d22.jpg',
    };

    return (
      <>
        <Text>Hello world!</Text>
        <Image source={pic} style={{width: 325, height: 550}} />
        <Greetings name="Shakthi" />
      </>
    );
  }
}

class Greetings extends Component {
  render() {
    return (
      <View>
        <Text> Hello {this.props.name}</Text>
      </View>
    );
  }
}
