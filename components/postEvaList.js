import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { CardList } from './CardList';
import { ItemCard } from './ItemCard';

import { fetchUser } from '../actions/index';
// import { CardList } from 'react-native-card-list';


module.exports = {
  CardList,
  ItemCard,
};

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
    title: 'Starry Night',
    /* eslint global-require: "error" */
    picture: require('../img/court.png'),
    content: <Text>Starry Night</Text>,
  },
  {
    id: '1',
    title: 'Wheat Field',
    /* eslint global-require: "error" */
    picture: require('../img/court.png'),
    content: <Text>Wheat Field with Cypresses</Text>,
  },
  {
    id: '2',
    title: 'Bedroom in Arles',
    /* eslint global-require: "error" */
    picture: require('../img/court.png'),
    content: <Text>Bedroom in Arles</Text>,
  },
];

class postEvaList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    );
  }
}

// export default postEvaList;

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

export default connect(mapStateToProps, { fetchUser })(postEvaList);
