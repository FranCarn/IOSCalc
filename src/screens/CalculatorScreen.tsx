import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

enum Operators {
  addition,
  substract,
  multiply,
  split,
}

export const CalculatorScreen = () => {
  const [number, setNumber] = useState<string>('0');

  const [prevNumber, setPrevNumber] = useState<string>('0');

  const lastOperator = useRef<Operators>();

  const deleteAllEntries = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const makeNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const changeNumberForLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const deleteLastEntry = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }
    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const splitButton = () => {
    changeNumberForLastNumber();
    lastOperator.current = Operators.split;
  };
  const multiplyButton = () => {
    changeNumberForLastNumber();
    lastOperator.current = Operators.multiply;
  };
  const substractButton = () => {
    changeNumberForLastNumber();
    lastOperator.current = Operators.substract;
  };
  const additionButton = () => {
    changeNumberForLastNumber();
    lastOperator.current = Operators.addition;
  };

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
        <ButtonCalc text="=" color="#FF9427" action={deleteAllEntries} />
      </View>
    </View>
  );
};
