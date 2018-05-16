import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Text, StyleSheet, ImageBackground } from 'react-native';

const img1 = require('../img/intro1.png');
const img2 = require('../img/intro2.png');
const img3 = require('../img/intro3.png');
const img4 = require('../img/intro4.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 50,
    color: 'red',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

class Introduction extends Component {
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'rgb(0,0,0)',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={0}
      >
        <ImageBackground
          source={img1}
          style={styles.container}
        />
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}
        >
          <ImageBackground
            source={img2}
            style={styles.container}
          />
        </Swiper>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={2}
        >
          <ImageBackground
            source={img3}
            style={styles.container}
          />
        </Swiper>
        <ImageBackground
          source={img4}
          style={styles.container}
        >
          <Text style={styles.welcome}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            Click to Begin!
          </Text>
        </ImageBackground>
      </Swiper>

    );
  }
}

export default Introduction;
