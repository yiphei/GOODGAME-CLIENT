import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { createGame } from '../actions';

const background = require('../img/court.png');

class Home extends Component {
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
    this.gameCreator = this.gameCreator.bind(this);
  }

  gameCreator() {
    const game = {
      date: this.state.date,
      time: this.state.time,
      duration: this.state.duration,
      lat: this.state.lat,
      long: this.state.long,
      players_needed: this.state.players_needed,
      max_players: this.state.max_players,
      level: this.state.level,
    };
    console.log('creating game...');
    this.props.createGame(game);

    this.setState({});

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Text style={styles.name}>
        Date
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={date => this.setState({ date })}
          value={this.state.date}
        />
        <Text style={styles.name}>
        Time
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={time => this.setState({ time })}
          value={this.state.time}
        />
        <Text style={styles.name}>
        Duration
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={duration => this.setState({ duration })}
          value={this.state.duration}
        />
        <Text style={styles.name}>
        Players needed
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={players_needed => this.setState({ players_needed })}
          value={this.state.players_needed}
        />
        <Text style={styles.name}>
        Max players
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={max_players => this.setState({ max_players })}
          value={this.state.max_players}
        />
        <Text style={styles.name}>
        Level
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={level => this.setState({ level })}
          value={this.state.level}
        />
        <Button title="Submit" onPress={() => this.gameCreator()} />
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

export default connect(null, { createGame })(Home);
