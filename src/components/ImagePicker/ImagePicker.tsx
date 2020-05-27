import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DefaultButton } from '../ui/DefaultButton';
import { ImagePickerProps } from './ImagePicker.props';
import { showMessage } from '../ui/messages';

export const ImagePicker = (props: ImagePickerProps) => {
  const pickImage = () => {
    showMessage('Not implemented yet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Image
          source={require('../../assets/amazing04.jpg')}
          style={styles.imagePreview}
        />
      </View>
      <DefaultButton title="Pick image" onPress={pickImage} />
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
