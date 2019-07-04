/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../src/App';
import configureStore from '../src/store/configureStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const store = configureStore();

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});