import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button, ScrollView } from 'react-native';
import { fetchGame, joinGame, deleteGame, UserAddGame, fetchUser } from '../actions/index';

const background = require('../img/court.png');

class GameView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('In Gameview componentdidmount');
    this.props.fetchUser();
    this.props.fetchGame(this.props.navigation.state.params.game._id);
  }

  onJoinClick = () => {
    this.props.joinGame(this.props.navigation.state.params.game._id, this.props.navigation.state.params.game);
    this.props.UserAddGame(this.props.navigation.state.params.game);
    this.props.fetchUser();
    this.props.fetchGame(this.props.navigation.state.params.game._id);
    console.log('BEFORE A');
    console.log(this.props.user);
    console.log('AFTER A');
  }

  onDeleteClick = () => {
    this.props.deleteGame(this.props.navigation.state.params.game._id);
    this.props.navigation.navigate('Home');
  }


  renderPlayers = () => {
    if (this.props.game.players_list) {
      return this.props.game.players_list.map((player) => {
        return (
          <View>
            <Text style={styles.gameText}> {player.handle} </Text>
          </View>
        );
      });
    } else {
      console.log('loading...');
    }
  }

  onLeaveClick = () => {

  }


  renderUsers = () => {
    if (this.props.game.author) {
      return (
        <View>
          <Text style={styles.gameText}> Author: {this.props.game.author.handle} </Text>
          <Text style={styles.gameText}> Players: </Text>
          {this.renderPlayers()}
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
        return (
          <View>
            <Button title="Join Game" onPress={() => this.onJoinClick()} />
          </View>
        );
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


  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.game}>
            <Text style={styles.gameText}> Date: {this.props.game.date} </Text>
            <Text style={styles.gameText}> Time: {this.props.game.time} </Text>
            <Text style={styles.gameText}> Duration: {this.props.game.duration} </Text>
            <Text style={styles.gameText}> Players:{this.props.game.players} </Text>
            <Text style={styles.gameText}> Max Players: {this.props.game.max_players} </Text>
            <Text style={styles.gameText}> Skill Level: {this.props.game.level} </Text>
            {this.renderUsers()}
            {this.renderButton()}
            <Button title="Delete Game" onPress={() => this.onDeleteClick()} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  },
  topDescription: {
    height: 60,
    backgroundColor: '#FF0000BB',
    fontWeight: 'bold',
    fontSize: 30,
  },
  game: {
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#000000',
    backgroundColor: '#99999944',
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
    user: state.user.user,
  }
);

export default connect(mapStateToProps, {
  fetchGame, joinGame, deleteGame, UserAddGame, fetchUser,
})(GameView);
