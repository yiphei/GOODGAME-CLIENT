import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

const background = require('../img/court.png');

class Home extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  renderGames() {
    console.log(this.props.games);
    const gameList = this.props.games.all.map(game =>
      (
        <Text style={styles.game}> {game.title} </Text>
      ));
    return (
      <Text>{gameList}</Text>
    );
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        {this.renderGames()}
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
    fontFamily: 'Helvetica-Bold',
    fontSize: 50,
    color: 'red',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

const mapStateToProps = state => (
  {
    games: state.games,
  }
);

export default connect(mapStateToProps, { fetchGames })(Home);
