import {useRef, useState} from 'react';

enum Operators {
  addition,
  substract,
  multiply,
  split,
}

export const useCalculator = () => {
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

  const getResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperator.current) {
      case Operators.addition:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.split:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };
  return {
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
  };
};
