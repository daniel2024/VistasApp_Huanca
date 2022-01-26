import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Card} from 'react-native-paper';
import styles from './styles';

function BackScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Back Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.goBack()}>
            Go Back
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

export default BackScreen;
