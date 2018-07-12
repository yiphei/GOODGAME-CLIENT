import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button, ScrollView, TextInput } from 'react-native';
import { fetchGame, joinGame, deleteGame, fetchUser, leaveGame, updateGame } from '../actions/index';

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
      isEditing: false,
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchGame(this.props.navigation.state.params.game._id);
  }

  onJoinClick = () => {
    this.props.joinGame(this.props.navigation.state.params.game._id, this.props.game);
  }

  onDeleteClick = () => {
    this.props.deleteGame(this.props.navigation.state.params.game._id);
    this.props.navigation.navigate('Home');
  }

  onEditClick = () => {
    this.setState({ date: this.props.game.date });
    this.setState({ time: this.props.game.time });
    this.setState({ duration: this.props.game.duration });
    this.setState({ players_needed: this.props.game.players_needed });
    this.setState({ max_players: this.props.game.max_players });
    this.setState({ level: this.props.game.level });
    this.setState({ isEditing: true });
  }


  renderPlayers = () => {
    if (this.props.game.players_list) {
      return this.props.game.players_list.map((player) => {
        return (
          <View>
            <Text style={styles.playerText}> {player.handle} </Text>
          </View>
        );
      });
    } else {
      console.log('loading...');
    }
  }

  onLeaveClick = () => {
    this.props.leaveGame(this.props.navigation.state.params.game._id, this.props.game);
  }


  renderUsers = () => {
    if (this.props.game.author) {
      return (
        <View style={styles.playerContainer}>
          <Text style={styles.AuthorText}> Author: {this.props.game.author.handle} </Text>
          <View style={styles.playerDetails}>
            <Text style={styles.playerHeader}> Players: </Text>
            <View style={styles.playerList}>
              {this.renderPlayers()}
            </View>
          </View>
        </View>
      );
    }
  }

  renderButton = () => {
    if (Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object) {
      console.log('USER IS STILL NULL');
    } else {
      console.log('INSIDE RENDERBUTTON');
      console.log(this.props.user);

      if (Array.isArray(this.props.user.games) && this.props.user.games.length) {
        console.log('PASSED');
        console.log(this.props.user);

        if (this.props.user.games.indexOf(this.props.navigation.state.params.game._id) >= 0) {
          return (
            <View>
              <Button title="Leave Game" onPress={() => this.onLeaveClick()} />
            </View>
          );
        } else {
          return (
            <View>
              <Button title="Join Game" onPress={() => this.onJoinClick()} />
            </View>
          );
        }
      } else {
        console.log('NOT PASSED');
        console.log(this.props.user);
        return (
          <View>
            <Button title="Join Game" onPress={() => this.onJoinClick()} />
          </View>
        );
      }
    }
  }

  renderEditDelete = () => {
    if ((Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object) || typeof this.props.game.author === 'undefined') {
      console.log('loading...');
    } else if (this.props.game.author._id == this.props.user._id) {
      return (
        <View>
          <Button title="Delete Game" onPress={() => this.onDeleteClick()} />
          <Button title="Edit Game" onPress={() => this.onEditClick()} />
        </View>
      );
    }
  }

  gameUpdate = () => {
    // call updatePost here
    const newgame = {
      date: this.state.date,
      time: this.state.time,
      duration: this.state.duration,
      players_needed: this.state.players_needed,
      max_players: this.state.max_players,
      level: this.state.level,
    };
    this.props.updateGame(this.props.navigation.state.params.game._id, Object.assign({}, this.props.game, newgame));
    this.setState({ isEditing: false });
  }


  RenderALL = () => {
    if (this.state.isEditing === false) {
      return (
        <View style={styles.game}>
          <ScrollView>
            <Text style={styles.dateText}> Date: {this.props.game.date} </Text>
            <Text style={styles.timeText}> Time: {this.props.game.time} </Text>
            <View style={styles.gameDetails}>
              <Text style={styles.durationText}> Duration: {this.props.game.duration} </Text>
              <Text style={styles.playersNeededText}> Players needed: {this.props.game.players_needed} </Text>
              <Text style={styles.maxPlayersText}> Max Players: {this.props.game.max_players} </Text>
              <Text style={styles.levelText}> Skill Level: {this.props.game.level} </Text>
            </View>
            {this.renderUsers()}
            {this.renderButton()}
            {this.renderEditDelete()}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.game}>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Date
            </Text>
            <TextInput
              style={{
                  height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
                }}
              onChangeText={date => this.setState({ date })}
              value={this.state.date}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Time
            </Text>
            <TextInput
              style={{
   height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
  }}
              onChangeText={time => this.setState({ time })}
              value={this.state.time}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Duration
            </Text>
            <TextInput
              style={{
   height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
  }}
              onChangeText={duration => this.setState({ duration })}
              value={`${this.state.duration}`}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Players needed
            </Text>
            <TextInput
              style={{
   height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
  }}
              onChangeText={players_needed => this.setState({ players_needed })}
              value={`${this.state.players_needed}`}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Max players
            </Text>
            <TextInput
              style={{
   height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
  }}
              onChangeText={max_players => this.setState({ max_players })}
              value={`${this.state.max_players}`}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.name}>
              Level
            </Text>
            <TextInput
              style={{
   height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
  }}
              onChangeText={level => this.setState({ level })}
              value={`${this.state.level}`}
            />
          </View>
          {this.renderUsers()}
          <Button title="Submit" onPress={() => this.gameUpdate()} />
        </View>
      );
    }
  }


  render() {
    return (
      <View style={styles.container} >
        {this.RenderALL()}
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
    backgroundColor: '#ffffff',
  },
  game: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 30,
    color: 'red',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',

  },

  timeText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },

  gameDetails: {
    margin: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  durationText: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',

  },

  playersNeededText: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',

  },

  maxPlayersText: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',

  },

  levelText: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',
  },

  playerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  AuthorText: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',
  },

  playerHeader: {
    margin: 8,
    fontSize: 15,
    alignItems: 'center',
  },

  playerText: {
    margin: 5,
    fontSize: 15,
    alignItems: 'center',
  },

  inputField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    margin: 5,
    fontSize: 15,
    alignItems: 'center',
  },

});

const mapStateToProps = state => (
  {
    game: state.games.game,
    user: state.user.user,
  }
);

export default connect(mapStateToProps, {
  fetchGame, joinGame, deleteGame, fetchUser, leaveGame, updateGame,
})(GameView);
