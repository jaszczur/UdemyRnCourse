import React from 'react';
import { ButtonWithBackgroundProps } from './ButtonWithBackground.props';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export const ButtonWithBackground = (props: ButtonWithBackgroundProps) => (
  <View style={styles.container}>
    <TouchableNativeFeedback
      onPress={props.onPress}
      style={[styles.button, { backgroundColor: props.color }]}
    >
      <Text>{props.children}</Text>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  button: {
    padding: 10,
    // margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});
