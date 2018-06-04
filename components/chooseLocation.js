import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createGame, fetchCourts, addGameToCourt } from '../actions';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '',
      location: '',
      players_needed: '',
      max_players: '',
      level: '',
    };
    this.courtOne = this.courtOne.bind(this);
    this.courtTwo = this.courtTwo.bind(this);
    // this.courtThree = this.courtThree.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourts();
    // console.log(this.props.game);
  }

  courtOne() {
    this.setState({
      location: this.props.courts[0]._id,
    });
    this.props.courts[0].game_list.push(this.props.game._id);
    this.props.addGameToCourt(this.props.courts[0]._id, this.props.courts[0].game_list);
    this.props.fetchCourts();
    this.props.navigation.navigate('Map');
  }

  courtTwo() {
    this.setState({
      location: this.props.courts[1]._id,
    });
    this.props.courts[1].game_list.push(this.props.game._id);
    this.props.addGameToCourt(this.props.courts[1]._id, this.props.courts[1].game_list);
    this.props.fetchCourts();
    this.props.navigation.navigate('Map');
  }

  // courtThree() {
  //   this.setState({
  //     location: this.props.courts[2]._id,
  //   });
  //   this.props.courts[2].game_list.push(this.props.game._id);
  //   this.props.addGameToCourt(this.props.courts[2]._id, this.props.courts[1].game_list);
  //   this.props.navigation.navigate('Map');
  // }

  render() {
    const title1 = this.props.courts[0].title;
    const title2 = this.props.courts[1].title;
    return (
      <View style={styles.container}>
        <Button title={title1} onPress={() => this.courtOne()} />
        <Button title={title2} onPress={() => this.courtTwo()} />
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
});

const mapStateToProps = state => (
  {
    courts: state.courts.all,
    game: state.games.game,
  }
);

export default connect(mapStateToProps, { createGame, fetchCourts, addGameToCourt })(Choose);
