import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
      <Text style={styles.valueSmall}>1,500.00</Text>
      <Text style={styles.totalValue}>1,500.00</Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" />
        <ButtonCalc text="+/-" color="#9b9b9b" />
        <ButtonCalc text="del" color="#9b9b9b" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" stretch />
        <ButtonCalc text="." />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};
