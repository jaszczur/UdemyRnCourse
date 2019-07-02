import React from "react";
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerViewConfig, NavigationRouteConfigMap, createMaterialTopTabNavigator, createBottomTabNavigator, NavigationScreenOptions, TabBarIconProps, BottomTabNavigatorConfig } from 'react-navigation';
import { AuthScreen } from './screens/Auth/Auth';
import { SharePlaceScreen } from './screens/SharePlace/SharePlace';
import { FindPlaceScreen } from './screens/FindPlace/FindPlace';
import Icon from "react-native-vector-icons/Ionicons";

type AppTabBarIconProps = {iconName: string} & TabBarIconProps;
const AppTabBarIcon = ({iconName, focused, horizontal, tintColor}: AppTabBarIconProps) => (
  <Icon size={30} name={iconName} color={tintColor}/>
);

const MainTabs = createBottomTabNavigator({
  FindPlace: {
    screen: FindPlaceScreen,
    navigationOptions: {
      title: "Find place",
      tabBarIcon: (props) => (
        <AppTabBarIcon iconName="md-map" {...props}/>
      ),
    } as NavigationScreenOptions
  },
  SharePlace: {
    screen: SharePlaceScreen,
    navigationOptions: {
      title: "Share place",
      tabBarIcon: (props) => (
        <AppTabBarIcon iconName="md-share" {...props}/>
      )
    } as NavigationScreenOptions
  },
  
} as BottomTabNavigatorConfig);

const RootNavigator = createSwitchNavigator({
  Auth: { 
    screen: AuthScreen,
    navigationOptions: {
      title: "Log in",
    },
  },
  Main: MainTabs
});

const App = createAppContainer(RootNavigator);

export default App;
