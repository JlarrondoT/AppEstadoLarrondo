import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  itemWrapper: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: colors.accentColor,
    borderRadius: 10,
    textAlign: "center",
    textAlignVertical: "center",
    flexDirection: "row"
  },
  textWrapper: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: colors.accentColor,
    borderRadius: 10,
    fontFamily: 'OpenSans-Bold',
  },
  totalContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  }
});
