import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { fetchCourts } from '../actions';

/* eslint-disable react/no-array-index-key  */

const Images = [
  { uri: 'https://media.giphy.com/media/3oEdv9kR4Jsl05gS4w/giphy.gif' },
  { uri: 'https://media.giphy.com/media/vrd9ryhalxTws/giphy.gif' },
  { uri: 'https://media.giphy.com/media/RsnFpEDtHjO48/giphy.gif' },
  { uri: 'https://media.giphy.com/media/sngOr8Y7O7uz6/giphy.gif' },
  { uri: 'https://media.giphy.com/media/KvTuvZjYiERHy/giphy.gif' },
];

const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class Map extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      selectedMarker: {
        // lat: 43.702828,
        // long: -72.284016,

        coordinate: {
          latitude: 43.702828,
          longitude: -72.284016,
        },
        title: 'Alumni Gym',
        // description: 'This is the best place in Hanover. Alumni Gym!',
        // image: Images[0],
        game_list: [
          {
            _id: '5b0b4b74b74f9900392a2842',
            date: '05/18/18',
            time: 'ZZZZ',
            duration: 4,
            players_needed: 4,
            max_players: 4,
            level: 4,
          },
        ],
      },
      markers: [ // courts
        {
          // lat: 43.702828,
          // long: -72.284016,

          coordinate: {
            latitude: 43.702828,
            longitude: -72.284016,
          },
          title: 'Alumni Gym',
          // description: 'This is the best place in Hanover. Alumni Gym!',
          // image: Images[0],
          game_list: [
            {
              _id: '5b0b4b74b74f9900392a2842',
              date: '05/18/18',
              time: 'ZZZZ',
              duration: 4,
              players_needed: 4,
              max_players: 4,
              level: 4,
            },
          ],
        },
        // {
        //   coordinate: {
        //     latitude: 43.703001,
        //     longitude: -72.284544,
        //   },
        //   title: 'Second Best Place',
        //   description: 'This is the second best place in Hanover. Outside Alumni Gym!',
        //   image: Images[1],
        // },
        // {
        //   coordinate: {
        //     latitude: 43.708547,
        //     longitude: -72.284610,
        //   },
        //   title: 'Third Best Place',
        //   description: 'This is the third best place in Hanover',
        //   image: Images[2],
        // },
        // {
        //   coordinate: {
        //     latitude: 43.707349,
        //     longitude: -72.286280,
        //   },
        //   title: 'Fourth Best Place',
        //   description: 'This is the fourth best place in Hanover',
        //   image: Images[3],
        // },
        // {
        //   coordinate: {
        //     latitude: 43.701922,
        //     longitude: -72.292740,
        //   },
        //   title: 'Fifth Best Place',
        //   description: 'This is the fifth best place in Hanover',
        //   image: Images[4],
        // },
      ],
      region: {
        latitude: 43.7022928,
        longitude: -72.2895353,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
    this.markerClick = this.markerClick.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  componentWillMount() {
    console.log('componentwillmount');
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    console.log('componentdidmount');
    this.props.fetchCourts();
    // this.setState({ markers: this.props.courts.all });

    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }

      // // This for cards, right?
      // if (index >= this.state.selectedMarker.game_list.length) {
      //   index = this.state.selectedMarker.game_list.length - 1;
      // }

      if (index <= 0) {
        index = 0;
      }

      // for markers?
      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }

  markerClick(marker) {
    console.log('markerClick');
    // this.props.navigation.navigate('Home');
    this.setState({ selectedMarker: marker });
  }

  createMarker(e) {
    // write point to database
    console.log(this.props.courts.all);
    console.log(e.nativeEvent.coordinate);
    this.props.navigation.navigate('Home');
    console.log(this.props.courts.all);
  }

  render() {
    console.log('render');

    // for each card?
    const interpolations = this.state.markers.map((marker, index) => {
    // const interpolations = this.state.selectedMarker.game_list.map((game, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp',
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp',
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
          onPress={event => this.createMarker(event)}
        >
          {this.state.markers.map((marker, index) => { // {this.state.selectedMarker.map((game, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index}
                coordinate={this.state.markers.coordinate}
                onPress={() => this.markerClick(this.state.markers[index])}
              >
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
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
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.selectedMarker.game_list.map((game, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={Images[index]} // source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <View style={{ flexDirection: 'row' }}>
                  <Text numberOfLines={1} style={styles.cardtitle}>{`${game.date} ${game.time}`}</Text>
                </View>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {`duration: ${game.duration} min`}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {`players needed: ${game.players_needed}`}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {`max # players: ${game.max_players}`}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {`level: ${game.level}`}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
});

const mapStateToProps = state => (
  {
    courts: state.courts,
  }
);

export default connect(mapStateToProps, { fetchCourts })(Map);
// AppRegistry.registerComponent('mapfocus', () => screens);
