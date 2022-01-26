import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

function NameScreen() {
  const route = useRoute();
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={`Hello, ${name}`} />
      </Card>
    </View>
  );
}

export default NameScreen;
