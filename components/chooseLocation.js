import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TextInput, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createGame, fetchCourts } from '../actions';

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
    this.courtThree = this.courtThree.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourts();
  }

  courtOne() {
    this.setState({
      location: this.props.courts[0]._id,
    });
    this.props.courts[0].push();
  }

  courtTwo() {
    this.setState({
      location: this.props.courts[1]._id,
    });
  }

  courtThree() {
    this.setState({
      location: this.props.courts[2]._id,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Alumni Gym" onPress={() => this.courtOne()} />
        <Button title="Location 2" onPress={() => this.courtTwo()} />
        <Button title="Location 3" onPress={() => this.courtThree()} />
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
    courts: state.courts,
  }
);

export default connect(mapStateToProps, { createGame, fetchCourts })(Choose);
