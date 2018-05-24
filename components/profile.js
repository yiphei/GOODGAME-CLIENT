import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Image, Text } from 'react-native';
import { connect } from 'react-redux';

const background = require('../img/court.png');
const player = require('../img/player1.png');

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  // need a fetchUser here
  }


  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Image source={require('../img/player1.png')} />
        <Text style={styles.name}>
        Yifei Yan
        </Text>

        <Text style={styles.stats}>
        Speed: 80
        </Text>

        <Text style={styles.stats}>
        Stamina: 80
        </Text>

        <Text style={styles.stats}>
        Shooting: 80
        </Text>

        <Text style={styles.stats}>
        Dunking: 80
        </Text>

        <Text style={styles.stats}>
        Sportsmanship: 80
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
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

export default connect(mapStateToProps, null)(Profile);

// <Button title="Login"
//   style={styles.button}
//   onPress={() => this.props.navigation.navigate('Home')}
// />
