import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,

    additionButton,
    deleteAllEntries,
    deleteLastEntry,
    getResult,
    makeNumber,
    multiplyButton,
    positiveNegative,
    splitButton,
    substractButton,
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.valueSmall}>{prevNumber}</Text>
      )}

      <Text style={styles.totalValue} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={deleteAllEntries} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="DEL" color="#9b9b9b" action={deleteLastEntry} />
        <ButtonCalc text="/" color="#FF9427" action={splitButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={makeNumber} />
        <ButtonCalc text="8" action={makeNumber} />
        <ButtonCalc text="9" action={makeNumber} />
        <ButtonCalc text="X" color="#FF9427" action={multiplyButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={makeNumber} />
        <ButtonCalc text="5" action={makeNumber} />
        <ButtonCalc text="6" action={makeNumber} />
        <ButtonCalc text="-" color="#FF9427" action={substractButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={makeNumber} />
        <ButtonCalc text="2" action={makeNumber} />
        <ButtonCalc text="3" action={makeNumber} />
        <ButtonCalc text="+" color="#FF9427" action={additionButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" stretch action={makeNumber} />
        <ButtonCalc text="." action={makeNumber} />
        <ButtonCalc text="=" color="#FF9427" action={getResult} />
      </View>
    </View>
  );
};
