import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
    backfaceVisibility: 'hidden',
    width: Dimensions.get('screen').width - 40,
  },
  label: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
});