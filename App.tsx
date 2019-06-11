/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ViewStyle, TextInput, Alert, Button } from 'react-native';
import { ListItem } from './src/components/ListItem/ListItem';
import { List } from './src/components/List/List';
import { UserInput } from './src/components/UserInput/UserInput';

interface Props { }

const App = (props: Props) => {
  const [placeName, setPlaceName] = useState("");
  const [places, setPlaces] = useState([] as string[]);

  const placeSubmitHandler = () => {
    if(placeName.trim() !== "") {
      setPlaces([...places, placeName]);
    }
  };

  return (
    <View style={styles.container}>
      <UserInput placeName={placeName} setPlaceName={setPlaceName} onPlaceSubmit={placeSubmitHandler}/>
      <List items={places} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  } as ViewStyle,
});