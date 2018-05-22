import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button } from 'react-native';
import { fetchGame } from '../actions/index';

const background = require('../img/court.png');

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '',
      lat: 50,
      long: 50,
      players_needed: '',
      max_players: '',
      level: '',
    };
  }
  componentDidMount() {
    console.log('post componentdidmount', this.props.navigation.state.params.game._id);
    this.props.fetchGame(this.props.navigation.state.params.game._id);
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <View style={styles.game}>
          <Text style={styles.gameText}> Date: {this.props.game.date} </Text>
          <Text style={styles.gameText}> Time: {this.props.game.time} </Text>
          <Text style={styles.gameText}> Duration: {this.props.game.duration} </Text>
          <Text style={styles.gameText}> Players:{this.props.game.players} </Text>
          <Text style={styles.gameText}> Max Players: {this.props.game.max_players} </Text>
          <Text style={styles.gameText}> Skill Level: {this.props.game.level} </Text>
        </View>
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
  game: {
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#000000',
  },
  gameText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 30,
    color: 'red',
  },
});

const mapStateToProps = state => (
  {
    game: state.games.game,
  }
);

export default connect(mapStateToProps, { fetchGame })(GameView);
