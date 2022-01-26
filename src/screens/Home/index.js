import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import styles from './styles';

function HomeScreen() {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    return navigation.addListener('blur', () => {
      setCounter(counter + 1);
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title={`Navigation Count: ${counter}`} />
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate to 'Book' Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Book')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate with Parameters" />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.textInput}
          />
          <Button
            mode="contained"
            disabled={name.length === 0}
            onPress={() => navigation.navigate('Name', {name})}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate to 'Back' Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Back')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default HomeScreen;
