import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

const background = require('../img/login.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '',
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    console.log(this.state);
    this.props.signinUser(this.state); // not sure that you can passin this.state directly
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Button title="Sign Up"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={() => this.signIn()} />
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

export default connect(null, { signinUser })(Login);

// <Button title="Login"
//   style={styles.button}
//   onPress={() => this.props.navigation.navigate('Home')}
// />
