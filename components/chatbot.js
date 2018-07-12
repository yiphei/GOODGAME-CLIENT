import React, { Component } from 'react';
import { View, StyleSheet, Linking, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';


import messagesData from './chatbot/data';
import gameData from './chatbot/gameSimulation';
import NavBar from './chatbot/NavBar';
import CustomView from './chatbot/CustomView';

/* eslint padded-blocks: ["error", "never"] */


const styles = StyleSheet.create({
  container: { flex: 2 },
  footerContainer: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  footerText: {
    fontSize: 12,
    color: '#aaa',
  },
});

const filterBotMessages = message => !message.system && message.user && message.user._id && message.user._id === 2;
const findStep = step => (_, index) => index === step - 1;

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typingText: null,
      step: 0,
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.onSend = this.onSend.bind(this);
    this.parsePatterns = this.parsePatterns.bind(this);
  }

  componentWillMount() {
    // init with only system messages
    this.setState({ messages: messagesData.filter(message => message.system) });
    const game = gameData;
    // console.log(game.playersSignedUp);
    this.setState({ step: game.playersSignedUp.length - 1 });
    setTimeout(() => this.botSend(1), 0);
    setTimeout(() => this.botSendEval(game.playersSignedUp.length - 1), 1000 + Math.round(Math.random() * 1000));
  }

  onSend(messages = []) {
    const step = this.state.step - 1;
    console.log('step', step);

    if ((messages[0].text === 'Like') || (messages[0].text === 'Dislike')) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
        step,
      }));

      if (step < 0) {
        setTimeout(() => this.botSend(7), 0);
      } else {
        console.log('our messages', messages);
        console.log('You said like!');
        setTimeout(() => this.botSendEval(step), 1500 + Math.round(Math.random() * 1000));
      }
    } else {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
      }));

      console.log('Please say like or dislike!');
      setTimeout(() => this.botSend(6), 1500 + Math.round(Math.random() * 1000));
    }
  }

  botSend(step = 0) {
    const newMessage = messagesData
      // .reverse()
      .filter(filterBotMessages)
      .find(findStep(step));
    if (newMessage) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, newMessage),
      }));
    }
  }

  botSendEval(step = 0) {
    const newMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: 'Time to rate your fellow players! Type Like or Dislike for Savanah!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
      },
      sent: true,
      received: true,
    };

    if (newMessage) {
      const game = gameData;
      console.log(game.playersSignedUp);
      const tempPlayerName = game.playersSignedUp[step];
      newMessage.text = `Time to rate your fellow players! Type Like or Dislike for ${tempPlayerName}`;
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, newMessage),
      }));
    }
  }

  // botSendWarning(step = 0) {
  //   const newMessage = messagesData
  //     // .reverse()
  //     .filter(filterBotMessages)
  //     .find(findStep(step));
  //   if (newMessage) {
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, newMessage),
  //     }));
  //   }
  // }

  // TODO: link this with a selected game
  sendPostGameEvaluation() {
    const postGameEvaluation = {
      playerId: 'player 2',
      evaluations: {
        'player 1': 'Dislike', 'player 3': 'Dislike', 'player 4': 'Like', 'player 5': 'Like',
      },
    };


    console.log('updating gameGameEvalution...');
    this.props.updatePostGameEvaluation(this.props.navigation.state.params.game, postGameEvaluation);

    this.setState({});

    this.props.navigation.navigate('Home');
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /Like/,
        style: { ...linkStyle, color: 'pink' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
      {
        pattern: /Dislike/,
        style: { ...linkStyle, color: 'red' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: 'orange' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ];
  }


  // parsePatterns_eval(linkStyle) {
  //   return [
  //     {
  //       pattern: /#(\w+)/,
  //       style: { ...linkStyle, color: 'orange' },
  //       onPress: () => Linking.openURL('http://gifted.chat'),
  //     },
  //   ];
  // }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          renderCustomView={CustomView}
          renderFooter={this.renderFooter}
          user={{
            _id: 1,
          }}
          parsePatterns={this.parsePatterns}

        />
      </View>
    );
  }
}

// export default Chat;
const mapStateToProps = state => (
  {
    auth: state.auth,
  }
);

export default connect(mapStateToProps, null)(Evaluation);

// <Button title="Login"
//   style={styles.button}
//   onPress={() => this.props.navigation.navigate('Home')}
// />
