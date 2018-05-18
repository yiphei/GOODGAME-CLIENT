import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ImageBackground, View, Button } from 'react-native';
import { fetchGame } from '../actions/index';

const background = require('../img/court.png');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      title: null,
      content: null,
      tags: null,
      cover_url: null,
      isEditing: false,
    };
  }
  componentDidMount() {
    console.log('post componentdidmount', this.props.match.params.postID);
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <View style={styles.game}>
          <Text style={styles.gameText}> {this.props.game.title} </Text>
        </View>
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
    game: state.game,
  }
);

export default connect(mapStateToProps, { fetchGame })(Game);
