import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});
