import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultButton } from '../ui/DefaultButton';
import { PlacePickerProps } from './PlacePicker.props';
import { showMessage } from '../ui/messages';

export const PlacePicker = (props: PlacePickerProps) => {
  const locateMe = () => {
    showMessage('Not implemented yet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text>Jestę mapą</Text>
      </View>
      <DefaultButton title="Locate me" onPress={locateMe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 250,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
});
