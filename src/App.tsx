import React from "react";
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerViewConfig, NavigationRouteConfigMap, createMaterialTopTabNavigator, createBottomTabNavigator, NavigationScreenOptions, TabBarIconProps, BottomTabNavigatorConfig, createStackNavigator, NavigationScreenConfigProps } from 'react-navigation';
import { AuthScreen } from './screens/Auth/Auth';
import { SharePlaceScreen } from './screens/SharePlace/SharePlace';
import { FindPlaceScreen } from './screens/FindPlace/FindPlace';
import Icon from "react-native-vector-icons/Ionicons";
import { PlaceDetailsScreen, PlaceDetailsScreenProps } from "./screens/PlaceDetails/PlaceDetails";

type AppTabBarIconProps = {iconName: string} & TabBarIconProps;
const AppTabBarIcon = ({iconName, focused, horizontal, tintColor}: AppTabBarIconProps) => (
  <Icon size={30} name={iconName} color={tintColor}/>
);

const FIND_PLACE_TITLE = "Find place";
const SHARE_PLACE_TITLE = "Share place";

const FindPlaceStack = createStackNavigator({
  FindPlace: {
    screen: FindPlaceScreen,
    navigationOptions: {
      title: FIND_PLACE_TITLE,
    }
  },
  PlaceDetails: {
    screen: PlaceDetailsScreen,
    navigationOptions: ({navigation}: PlaceDetailsScreenProps) => (
      {
        title: navigation.getParam("placeName")
      } 
    )
  }
});


const SharePlaceStack = createStackNavigator({
  FindPlace: {
    screen: SharePlaceScreen,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
    } as NavigationScreenOptions
  },
});

const MainTabs = createBottomTabNavigator({
  FindPlaceStack: {
    screen: FindPlaceStack,
    navigationOptions: {
      title: FIND_PLACE_TITLE,
      tabBarIcon: (props) => (
        <AppTabBarIcon iconName="md-map" {...props}/>
      ),
    } as NavigationScreenOptions
  },
  SharePlace: {
    screen: SharePlaceStack,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
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
