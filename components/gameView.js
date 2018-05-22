import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button, ScrollView } from 'react-native';
import { fetchGame, joinGame } from '../actions/index';

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
    this.props.joinGame(this.props.game.game);
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <ScrollView>
          <Text style={styles.name}>
        Date
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.date} </Text>
          </View>

          <Text style={styles.name}>
        Time
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.time} </Text>
          </View>

          <Text style={styles.name}>
        Duration
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.duration} </Text>
          </View>

          <Text style={styles.name}>
        Lat
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.lat} </Text>
          </View>

          <Text style={styles.name}>
        Long
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.long} </Text>
          </View>

          <Text style={styles.name}>
        Players_needed
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.players_needed} </Text>
          </View>

          <Text style={styles.name}>
        Max_players
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.max_players} </Text>
          </View>

          <Text style={styles.name}>
        Level
          </Text>

          <View style={styles.game}>
            <Text style={styles.gameText}> {this.props.game.game.level} </Text>
          </View>
          <Button title="JOIN GAME" onPress={() => this.onJoinClick()} />
        </ScrollView>
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
    fontSize: 50,
    color: 'red',
  },
});

const mapStateToProps = state => (
  {
    game: state.games,
  }
);

export default connect(mapStateToProps, { fetchGame, joinGame })(GameView);
