import 'react-native';
import renderer from 'react-test-renderer'; // Note: test renderer must be required after react-native.
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import { AuthScreen } from '../src/screens/Auth/Auth';

const store = configureStore();
const navigation = { navigate: jest.fn() } as any;

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <AuthScreen navigation={navigation} />
    </Provider>
  );
});
