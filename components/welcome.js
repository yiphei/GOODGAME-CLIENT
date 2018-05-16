import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

const background = require('../img/basketball_on_fire.png');

class Welcome extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Text style={styles.welcome}
          onPress={() => this.props.navigation.navigate('Introduction')}
        >
          GOOD GAME
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 50,
    color: 'red',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Welcome;
