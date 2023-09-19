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
  btn: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});
