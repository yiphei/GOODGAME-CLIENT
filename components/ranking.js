import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Image, Text } from 'react-native';
import { connect } from 'react-redux';

const background = require('../img/court.png');
const player = require('../img/player1.png');

class Ranking extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  // need a fetchUsers here
  }


  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Text style={styles.name}>
        Ranking
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

  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = state => (
  {
    auth: state.auth,
  }
);

export default connect(mapStateToProps, null)(Ranking);

// <Button title="Login"
//   style={styles.button}
//   onPress={() => this.props.navigation.navigate('Home')}
// />
