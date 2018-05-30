
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

ShowAlertDialog = (title, message) => {
  Alert.alert(

    // This is Alert Dialog Title
    title,

    // This is Alert Dialog Message.
    message,
    [
      // First Text Button in Alert Dialog.
      { text: 'Ask me later', onPress: () => console.log('Ask me later Button Clicked') },

      // Second Cancel Button in Alert Dialog.
      { text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel' },

      // Third OK Button in Alert Dialog
      { text: 'OK', onPress: () => console.log('OK ButtonPressed') },

    ],

  );
};

export { ShowAlertDialog };
