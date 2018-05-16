import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

class Home extends Component {
  render() {
    return (
        <ImageBackground
          source={require('../img/home.png')}
          style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
