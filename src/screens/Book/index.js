import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';

function BookScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Books Screen" />
      </Card>
    </View>
  );
}

export default BookScreen;
