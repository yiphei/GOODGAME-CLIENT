import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

const background = require('../img/court.png');

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', handle: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.log(this.state);
    this.props.signupUser(this.state);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
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
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={handle => this.setState({ handle })}
          value={this.state.handle}
        />
        <Button title="Submit" onPress={() => this.signUp()} />
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
  gameList: {
    flex: 1,
  },
  game: {
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#000000',
  },
  gameText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 50,
    color: 'red',
  },
});

export default connect(null, { signupUser })(SignUp);
