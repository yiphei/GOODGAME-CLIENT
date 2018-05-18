import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { createGame } from '../actions';

const background = require('../img/court.png');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
      cover_url: '',
    };
    this.gameCreator = this.gameCreator.bind(this);
  }
  gameCreator() {
    console.log(this.state);
    this.props.createGame(this.state);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={content => this.setState({ content })}
          value={this.state.content}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={tags => this.setState({ tags })}
          value={this.state.tags}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={cover_url => this.setState({ cover_url })}
          value={this.state.cover_url}
        />
        <Button title="Submit" onPress={() => this.gameCreator()} />
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

export default connect(null, { createGame })(Home);
