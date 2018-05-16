import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const background = require('../img/court.png');

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',

  },
});

export default Home;
