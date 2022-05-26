import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  thumbProgressBar: {
    flex: 1,
    height: 7,
    borderRadius: 7,
    backgroundColor: COLORS.BLACK,
    overflow: 'hidden',
    marginHorizontal: 7
  },
  currentProgressBar: {
    height: 7,
    width: '80%',
    backgroundColor: COLORS.GREEN,
    position: 'absolute',
    left: 0,
    top: 0
  },
  percentage: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  label: {
    fontSize: 10,
    color: COLORS.WHITE,
  },
});