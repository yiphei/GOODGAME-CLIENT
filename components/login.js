import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

const background = require('../img/login.png');


/* eslint no-return-assign: 0 */
const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '',
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    console.log('state: ', this.state);


    if (value != null) {
      console.log('value: ', value.email);
      this.props.signinUser({ email: value.email, password: value.password });
      this.props.navigation.navigate('Home');
    }
  }


  signUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      // <ImageBackground
      //   source={background}
      //   style={styles.container}
      // >
      //   <Button title="Sign Up"
      //     style={styles.button}
      //     onPress={() => this.props.navigation.navigate('SignUp')}
      //   />
      //   <TextInput
      //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //     onChangeText={email => this.setState({ email })}
      //     value={this.state.email}
      //   />
      //   <TextInput
      //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //     onChangeText={password => this.setState({ password })}
      //     value={this.state.password}
      //   />
      //   <Button title="Login" onPress={() => this.signIn()} />
      // </ImageBackground>
      <View style={styles.container}>
        <Form
          ref={c => this._form = c} // assign a ref
          type={User}
        />
        <Button title="Login" onPress={() => this.signIn()} />
        <Button title="SignUp" onPress={() => this.signUp()} />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: undefined,
//     height: undefined,
//     backgroundColor: 'transparent',
//
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
// });

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default connect(null, { signinUser })(Login);

// <Button title="Login"
//   style={styles.button}
//   onPress={() => this.props.navigation.navigate('Home')}
// />
