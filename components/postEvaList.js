/* eslint padded-blocks: ["error", "never"] */

import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground, View, Button, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import {
//
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

import { fetchGames, fetchCourts } from '../actions';
// import { connect } from 'react-redux';
import CardList from './CardList';
import ItemCard from './ItemCard';
import Evaluation from '../components/chatbot';
// import { fetchUser } from '../actions/index';
// import { CardList } from 'react-native-card-list';


/* eslint padded-blocks: ["error", "never"] */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const cards = [
  {
    id: '0',
    title: 'Game Played at 5:00pm, 5/29/2018',
    picture: require('../assets/court_1.jpg'), // eslint-disable-line global-require
    content: <Evaluation />,
  },
  {
    id: '1',
    title: 'Game Played at 3:00pm, 5/29/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_2.jpg'), // eslint-disable-line global-require
    content: <Evaluation />,
  },
  {
    id: '2',
    title: 'Game Played at 6:00pm, 5/30/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_3.jpg'), // eslint-disable-line global-require
    content: <Evaluation />,
  },
  {
    id: '3',
    title: 'Game Played at 6:00pm, 5/30/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_4.jpg'), // eslint-disable-line global-require
    content: <Evaluation />,
  },
];

class PostEvaList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     messages: [],
  //     typingText: null,
  //     step: 0,
  //   };
  //
  // }

  componentDidMount() {
    this.props.fetchGames();
    // this.props.fetchCourts();
  }

  renderGames() {
    // this.props.fetchGames();
    // console.log('What is in the this.props.games are: ', this.props.games);

    //
    // const gameList = this.props.games.all.map(game =>
    //   (
    //
    //     <TouchableOpacity onPress={() => { this.showGameDetail(game); }} style={styles.game}>
    //       <Text style={styles.gameText}> Date: {game.date} </Text>
    //       <Text style={styles.gameText}> Time: {game.time} </Text>
    //       <Text style={styles.gameText}> Duration: {game.duration} </Text>
    //       <Text style={styles.gameText}> Players:{game.players} </Text>
    //       <Text style={styles.gameText}> Max Players: {game.max_players} </Text>
    //       <Text style={styles.gameText}> Skill Level: {game.level} </Text>
    //     </TouchableOpacity>
    //
    //
    //   // cards.push({});
    //   //
    //   // cards.push({
    //   //   id: '3',
    //   //   title: game.time,
    //   //   /* eslint global-require: "error" */
    //   //   picture: require('../assets/court_4.jpg'), // eslint-disable-line global-require
    //   //   content: <Evaluation />,
    //   // });
    //   // if the title changes and we have another game. Then it succeeds.
    //
    //   ));
    /* eslint guard-for-in: 0 */
    let gameId = 0;
    const gamelistss = this.props.games.all;
    const cardss = [];
    // const gifNumb = Math.floor(Math.random() * 5) + 1;
    gamelistss.forEach((game) => {
      gameId++;
      console.log('game', game);
      // switch (gifNumb) {
      //   case 1:
      //     cardss.push({
      //       id: '1',
      //       title: `Game at ${game.time}`,
      //       /* eslint global-require: "error" */
      //       picture: require('../assets/eval_1.gif'),
      //       content: <Evaluation />,
      //     });
      //     break;
      //   case 2:
      //     cardss.push({
      //       id: '2',
      //       title: `Game at ${game.time}`,
      //       /* eslint global-require: "error" */
      //       picture: require('../assets/eval_2.gif'),
      //       content: <Evaluation />,
      //     });
      //     break;
      //   case 3:
      //     cardss.push({
      //       id: '3',
      //       title: `Game at ${game.time}`,
      //       /* eslint global-require: "error" */
      //       picture: require('../assets/eval_3.gif'),
      //       content: <Evaluation />,
      //     });
      //     break;
      //   default:
      //     cardss.push({
      //       id: '4',
      //       title: `Game at ${game.time}`,
      //       /* eslint global-require: "error" */
      //       picture: require('../assets/eval_4.gif'),
      //       content: <Evaluation />,
      //     });
      // }
      cardss.push({
        id: gameId,
        title: `Game Played at ${game.time}`,
        /* eslint global-require: "error" */
        picture: require('../assets/eval_1.gif'),
        content: <Evaluation />,
      });
    });

    return (
    // <View>
    // <Text style={styles.topDescription}> Games </Text>
    // <Animated.ScrollView
    //   horizontal
    //   scrollEventThrottle={1}
    //   showsHorizontalScrollIndicator={false}
    //   snapToInterval={50}
    //   onScroll={Animated.event(
    //     [
    //       {
    //         nativeEvent: {
    //           contentOffset: {
    //             x: this.animation,
    //           },
    //         },
    //       },
    //     ],
    //     { useNativeDriver: true },
    //   )}
    //   contentContainerStyle={styles.endPadding}
    // >{gameList}
    // </Animated.ScrollView>
      <CardList cards={cardss} />

    // </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.renderGames()}


        </View>
      </View>
    );
  }
}

// export default postEvaList;

const mapStateToProps = state => (
  {
    user: state.user,
    games: state.games,
    courts: state.courts,
  }
);

// export default PostEvaList;
export default connect(mapStateToProps, { fetchGames, fetchCourts })(PostEvaList);
