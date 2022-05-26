import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 35,
  },
  title: {
    fontSize: 20,
    color: COLORS.GREEN,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});