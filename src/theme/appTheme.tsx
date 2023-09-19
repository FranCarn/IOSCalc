import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#000',
  },
  totalValue: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
  },
  valueSmall: {
    color: 'rgba(255,255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  calcContainer: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
