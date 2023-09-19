import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  stretch?: boolean;
  action: (value: string) => void;
}
export const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  stretch = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: stretch ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9b9b9b' ? '#000' : '#FFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
