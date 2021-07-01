import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessagesStyles';

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Matches 😭 </Text>
    </View>
  );
};

export default Messages;
