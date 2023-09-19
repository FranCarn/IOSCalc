import React from 'react';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
export default App;
