import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    height: height / 6,
    margin: 20,
    borderRadius: 20,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: colors.textColor,
    backgroundColor: 'rgba(173,173,173,0.56)',
  },
});
