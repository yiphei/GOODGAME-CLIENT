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
// change to markers: this.props.courts
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: this.props.courts,
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
    this.props.fetchCourts();
    console.log(this.props.courts);
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // this.props.fetchCourts();
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    console.log('kjfksdjhfkaisufhawiusBFuaesfbuaesFGwufeksjhfciuwekshfiuKHCiueshfiueawshfiuweshfwiueshfwiuemimijmjmjimi');
    this.animation.addListener(({ value }) => {
      console.log('kjfksdjhfksjdfhjksd,o,ko,imimimijmjmjimi');
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      console.log(index);
      if (index >= this.props.courts.length) {
        console.log(':((((()))))');
        index = this.props.courts.length - 1;
      }
      if (index <= 0) {
        console.log(':((((()))))');
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        console.log('Hi');
        if (this.index !== index) {
          console.log('Jesus*****');
          this.index = index;
          console.log(this.props.courts[index]);
          const { coordinate } = {
            coordinate: {
              latitude: this.props.courts[index].latitude,
              longitude: this.props.courts[index].longitude,
            },
            title: 'New Court',
            description: 'Play pick up games at Dartmouth!',
            image: Images[0],
          };
          console.log('court pin rendered');
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

  markerClick() {
    this.props.navigation.navigate('Home');
  }

  createMarker(e) {
    // write point to database
    console.log(this.props.courts);
    console.log(e.nativeEvent.coordinate);
    this.props.navigation.navigate('Home');
    console.log(this.props.courts);
  }
  cardDraw() {
    return (
      this.props.courts.map((marker, index) => {
        return (
          marker.game_list.map((game, i) => (
            <View style={styles.card} key={i}>
              <Image
                source={Images[1]} // source={marker.image}
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
          ))
        );
      }));
  }


  render() {
    console.log(this.cardDraw());
    const interpolations = this.props.courts.map((marker, index) => {
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
          {this.props.courts.map((marker, index) => {
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
                coordinate={{ latitude: marker.lat, longitude: marker.long }}
                onPress={() => this.markerClick()}
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
          {this.cardDraw()}
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
    courts: state.courts.all,
  }
);

export default connect(mapStateToProps, { fetchCourts })(Map);

// AppRegistry.registerComponent('mapfocus', () => screens);
