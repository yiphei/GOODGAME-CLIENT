import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground, View, Button, Animated, ScrollView } from 'react-native';
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
          <Text onPress={() => { this.showGameDetail(game); }} style={styles.gameText}> {game.title} </Text>
        </View>
      ));
    return (
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
