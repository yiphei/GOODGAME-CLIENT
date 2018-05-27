import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button, ScrollView } from 'react-native';
import { fetchGame, joinGame, deleteGame } from '../actions/index';

const background = require('../img/court.png');

class GameView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('post componentdidmount', this.props.navigation.state.params.game._id);
    this.props.fetchGame(this.props.navigation.state.params.game._id);
  }

  onJoinClick = () => {
    this.props.joinGame(this.props.navigation.state.params.game._id, this.props.navigation.state.params.game);
    // this.props.userJoinGame()
    // this.props.navigation.navigate('Home');
  }

  onDeleteClick = () => {
    this.props.deleteGame(this.props.navigation.state.params.game._id);
    this.props.navigation.navigate('Home');
  }


  renderPlayers = () => {
    console.log('here');
    console.log(this.props.game.players_list);
    console.log('befopre');

    if (this.props.game.players_list) {
      console.log(this.props.game.author);
      console.log('TTTTTT');


      return this.props.game.players_list.map((player) => {
        console.log(player);
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
            <Text style={styles.gameText}> Players: {this.props.game.players_list}</Text>
            {this.renderPlayers()}
            <Button title="Join Game" onPress={() => this.onJoinClick()} />
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
  }
);

export default connect(mapStateToProps, { fetchGame, joinGame, deleteGame })(GameView);
