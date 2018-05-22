import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

const background = require('../img/court.png');

class Home extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  showGameDetail = (game) => {
    this.props.navigation.navigate('GameView', { game });
  }


  renderGames() {
    console.log(this.props.games);
    const gameList = this.props.games.all.map(game =>
      (
        <View style={styles.game}>
          <Text onPress={() => { this.showGameDetail(game); }} style={styles.gameText}> {game.date} </Text>
        </View>
      ));
    return (
      <Text style={styles.gameList} >{gameList}</Text>
    );
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <Button title="Create Game"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('CreateGame')}
        />
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
    games: state.games,
  }
);

export default connect(mapStateToProps, { fetchGames })(Home);
