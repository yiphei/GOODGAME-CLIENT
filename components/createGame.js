
import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createGame, fetchCourts, fetchGame } from '../actions';
/* eslint-disable camelcase */

// const background = require('../img/court.png');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '',
      players_needed: '',
      max_players: '',
      level: '',
    };
    this.gameCreator = this.gameCreator.bind(this);
  }

  gameCreator() {
    // const game = {
    //   date: this.state.date,
    //   time: this.state.time,
    //   duration: this.state.duration,
    //   lat: this.state.lat,
    //   long: this.state.long,
    //   players_needed: this.state.players_needed,
    //   max_players: this.state.max_players,
    //   level: this.state.level,
    // };
    // console.log('creating game...');
    this.setState({
      date: this.state.date,
      time: this.state.time,
      duration: this.state.duration,
      players_needed: this.state.players_needed,
      max_players: this.state.max_players,
      level: this.state.level,
    });
    this.props.createGame(this.state);
    // this.props.fetchGame();
    // this.props.navigation.navigate('ChooseLocation',{param:'SomeParameter'});
    this.props.navigation.navigate('ChooseLocation');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topDescription}> Create Game </Text>
        <Text style={styles.name}>
          Date: Month/Day
        </Text>
        <View style={styles.inputField}>
          <TextInput
            style={{
 height: 40, width: 270, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
              }}
            onChangeText={date => this.setState({ date })}
            value={this.state.date}
          />
        </View>
        <Text style={styles.name}>
          Time: Hour:Min AM/PM
        </Text>
        <View style={styles.inputField}>

          <TextInput
            style={{
 height: 40, width: 270, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
}}
            onChangeText={time => this.setState({ time })}
            value={this.state.time}
          />
        </View>
        <Text style={styles.name}>
          Duration: number of minutes
        </Text>
        <View style={styles.inputField}>

          <TextInput
            style={{
 height: 40, width: 220, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
}}
            onChangeText={duration => this.setState({ duration })}
            value={this.state.duration}
          />
        </View>
        <Text style={styles.name}>
          Players needed: number of players needed
        </Text>
        <View style={styles.inputField}>

          <TextInput
            style={{
 height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
}}
            onChangeText={players_needed => this.setState({ players_needed })}
            value={this.state.players_needed}
          />
        </View>
        <Text style={styles.name}>
          Max players: number of maximum players
        </Text>
        <View style={styles.inputField}>

          <TextInput
            style={{
 height: 40, width: 220, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
}}
            onChangeText={max_players => this.setState({ max_players })}
            value={this.state.max_players}
          />
        </View>
        <Text style={styles.name}>
          Level number: from 1-100
        </Text>
        <View style={styles.inputField}>

          <TextInput
            style={{
 height: 40, width: 270, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10,
}}
            onChangeText={level => this.setState({ level })}
            value={this.state.level}
          />
        </View>
        <Button title="Press to Choose Court" onPress={() => this.gameCreator()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    backgroundColor: '#FFFFFF',
  },
  inputField: {
    marginHorizontal: 20,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topDescription: {
    height: 60,
    backgroundColor: '#FF0000BB',
    fontWeight: 'bold',
    fontSize: 30,
  },
  name: {
    fontWeight: 'bold',
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

const mapStateToProps = state => (
  {
    courts: state.courts,
  }
);

export default connect(mapStateToProps, { createGame, fetchCourts, fetchGame })(Home);

// <ImageBackground
//   source={background}
//   style={styles.container}
// >
