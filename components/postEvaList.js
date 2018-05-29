/* eslint padded-blocks: ["error", "never"] */

import React, { Component } from 'react';

import {

  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    title: 'Game at 5:00pm, 5/29/2018',
    picture: require('../assets/court_1.jpg'), // eslint-disable-line global-require
    content: <Evaluation />,
  },
  {
    id: '1',
    title: 'Game at 3:00pm, 5/29/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_2.jpg'), // eslint-disable-line global-require
    content: <Text>Wheat Field with Cypresses</Text>,
  },
  {
    id: '2',
    title: 'Game at 6:00pm, 5/30/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_3.jpg'), // eslint-disable-line global-require
    content: <Text>Bedroom in Arles</Text>,
  },
  {
    id: '3',
    title: 'Game at 6:00pm, 5/30/2018',
    /* eslint global-require: "error" */
    picture: require('../assets/court_4.jpg'), // eslint-disable-line global-require
    content: <Text>Bedroom in Arles</Text>,
  },
];

class PostEvaList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <CardList cards={cards} />
        </View>
      </View>
    );
  }
}

// export default postEvaList;

// const mapStateToProps = state => (
//   {
//     user: state.user,
//   }
// );

export default PostEvaList;
// export default connect(mapStateToProps, { fetchUser })(postEvaList);
