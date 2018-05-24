import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground, View, Button, Animated, ScrollView, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity onPress={() => { this.showGameDetail(game); }} style={styles.game}>
          <Text style={styles.gameText}> Date: {game.date} </Text>
          <Text style={styles.gameText}> Time: {game.time} </Text>
          <Text style={styles.gameText}> Duration: {game.duration} </Text>
          <Text style={styles.gameText}> Players:{game.players} </Text>
          <Text style={styles.gameText}> Max Players: {game.max_players} </Text>
          <Text style={styles.gameText}> Skill Level: {game.level} </Text>
        </TouchableOpacity>
      ));
    return (
      <View>
        <Text style={styles.topDescription}> Your games </Text>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={50}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true },
          )}
          contentContainerStyle={styles.endPadding}
        >{gameList}
        </Animated.ScrollView>
      </View>
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
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
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
  gameList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  game: {
    width: 300,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
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
    games: state.games,
  }
);

export default connect(mapStateToProps, { fetchGames })(Home);
