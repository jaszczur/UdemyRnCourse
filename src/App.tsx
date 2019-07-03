import React from "react";
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerViewConfig, NavigationRouteConfigMap, createMaterialTopTabNavigator, createBottomTabNavigator, NavigationScreenOptions, TabBarIconProps, BottomTabNavigatorConfig, createStackNavigator, NavigationScreenConfigProps, DrawerIconProps, StackNavigatorConfig } from 'react-navigation';
import { AuthScreen } from './screens/Auth/Auth';
import { SharePlaceScreen } from './screens/SharePlace/SharePlace';
import { FindPlaceScreen } from './screens/FindPlace/FindPlace';
import { PlaceDetailsScreen, PlaceDetailsScreenProps } from "./screens/PlaceDetails/PlaceDetails";
import { CustomDrawerContentComponent } from "./components/CustomDrawerContent/CustomDrawerContent";
import { navigationIconProvider } from "./components/NavigationIcon/NavigationIcon";
import { NavigationButton } from "./components/NavigationButton/NavigationButton";

const FIND_PLACE_TITLE = "Find place";
const SHARE_PLACE_TITLE = "Share place";
const HEADER_CONFIG = {
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: (
      <NavigationButton onPress={() => navigation.openDrawer()} iconName="md-menu"/>
    )
  })
} as StackNavigatorConfig;

const FindPlaceStack = createStackNavigator({
  FindPlace: {
    screen: FindPlaceScreen,
    navigationOptions: {
      title: FIND_PLACE_TITLE,
    }
  },
  PlaceDetails: {
    screen: PlaceDetailsScreen,
    navigationOptions: ({ navigation }: PlaceDetailsScreenProps) => (
      {
        title: navigation.getParam("placeName")
      }
    )
  }
}, HEADER_CONFIG);


const SharePlaceStack = createStackNavigator({
  FindPlace: {
    screen: SharePlaceScreen,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
    } as NavigationScreenOptions
  },
}, HEADER_CONFIG);

const MainNavigation = createDrawerNavigator({
  SharePlace: {
    screen: SharePlaceStack,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
      drawerIcon: navigationIconProvider("md-share"),
    } as NavigationScreenOptions
  },

  FindPlaceStack: {
    screen: FindPlaceStack,
    navigationOptions: {
      title: FIND_PLACE_TITLE,
      drawerIcon: navigationIconProvider("md-map"),
    } as NavigationScreenOptions
  },
},
  {
    contentComponent: CustomDrawerContentComponent
  });

const RootNavigator = createSwitchNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      title: "Log in",
    },
  },
  Main: MainNavigation
});

const App = createAppContainer(RootNavigator);

export default App;
