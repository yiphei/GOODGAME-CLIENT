import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

/* eslint no-return-assign: 0 */
const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
});

const options = {
  fields: {
    // email: {
    //   error: 'Email must be provided',
    // },
    // password: {
    //   error: 'Password must be provided',
    // },
    terms: {
      label: 'Agree to Terms',
    },
  },
};

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
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    console.log('state: ', this.state);


    if (value != null) {
      console.log('value: ', value.email);
      this.props.signupUser({ email: value.email, password: value.password, handle: value.username });
      this.props.navigation.navigate('Map');
    }
    // console.log(this.state);
    // this.props.signupUser(this.state);
    // this.props.navigation.navigate('Home');
  }

  render() {
    return (
      // <ImageBackground
      //   source={background}
      //   style={styles.container}
      // >
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
      //   <TextInput
      //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //     onChangeText={handle => this.setState({ handle })}
      //     value={this.state.handle}
      //   />
      //   <Button title="Submit" onPress={() => this.signUp()} />
      // </ImageBackground>
      <View style={styles.container}>
        <Form
          ref={c => this._form = c} // assign a ref
          type={User}
          options={options} // pass the options via props
        />
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
//   gameList: {
//     flex: 1,
//   },
//   game: {
//     borderRadius: 30,
//     borderWidth: 10,
//     borderColor: '#000000',
//   },
//   gameText: {
//     fontFamily: 'Helvetica-Bold',
//     fontSize: 50,
//     color: 'red',
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

export default connect(null, { signupUser })(SignUp);
