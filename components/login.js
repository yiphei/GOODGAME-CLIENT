import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Button } from 'react-native';

const background = require('../img/login.png');

class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Button title="Login"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
        />
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

  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Login;
