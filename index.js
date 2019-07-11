/**
 * @format
 */
import React from "react";
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import App from './src/App';
import configureStore from "./src/store";
import { name as appName } from './app.json';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
