import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10,
  },
  card: {
    width: '90%',
  },
});

export default styles;
