import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedbackComponent,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
      <Text style={styles.valueSmall}>1,500.00</Text>
      <Text style={styles.totalValue}>1,500.00</Text>
      <View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </View>
      </View>
    </View>
  );
};
