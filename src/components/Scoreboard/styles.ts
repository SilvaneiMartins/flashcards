import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
  },
  divider: {
    height: 45,
    width: 1,
    backgroundColor: COLORS.BLACK,
    marginHorizontal: 40
  }
});