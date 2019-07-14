import React, { useState } from "react";
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, NavigationScreenOptions, createStackNavigator, StackNavigatorConfig, withNavigation, NavigationContainerComponent, createBottomTabNavigator } from 'react-navigation';
import { AuthScreen } from './screens/Auth/Auth';
import { SharePlaceScreen } from './screens/SharePlace/SharePlace';
import { FindPlaceScreen } from './screens/FindPlace/FindPlace';
import { PlaceDetailsScreen, PlaceDetailsScreenProps } from "./screens/PlaceDetails/PlaceDetails";
import { CustomDrawerContentComponent } from "./components/CustomDrawerContent/CustomDrawerContent";
import { navigationIconProvider } from "./components/NavigationIcon/NavigationIcon";
import { NavigationButton } from "./components/NavigationButton/NavigationButton";
import configureStore from "./store";
import { Provider } from "react-redux";

const FIND_PLACE_TITLE = "Find place";
const SHARE_PLACE_TITLE = "Share place";
const ROOT_ROUTES = ["FindPlace", "SharePlace"];

const HEADER_CONFIG = {
  defaultNavigationOptions: ({ navigation }) => {
    if (ROOT_ROUTES.indexOf(navigation.state.routeName) >= 0) {
      return {
        headerLeft: (
          <NavigationButton onPress={() => navigation.openDrawer()} iconName="md-menu" />
        )
      };
    } else {
      return {};
    }
  }
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
  SharePlace: {
    screen: SharePlaceScreen,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
    } as NavigationScreenOptions
  },
  NewPlaceDetails: {
    screen: PlaceDetailsScreen,
    navigationOptions: ({ navigation }: PlaceDetailsScreenProps) => (
      {
        title: navigation.getParam("placeName")
      }
    )
  }
}, HEADER_CONFIG);

const MainNavigation = createBottomTabNavigator({
  SharePlace: {
    screen: SharePlaceStack,
    navigationOptions: {
      title: SHARE_PLACE_TITLE,
      tabBarIcon: navigationIconProvider("md-share"),
    } as NavigationScreenOptions
  },

  FindPlaceStack: {
    screen: FindPlaceStack,
    navigationOptions: {
      title: FIND_PLACE_TITLE,
      tabBarIcon: navigationIconProvider("md-map"),
    } as NavigationScreenOptions
  },
});

const DrawerNavigation = createDrawerNavigator({
  MainNavigation: {
    screen: MainNavigation,
  }
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
  Main: DrawerNavigation
});

// const App = createAppContainer(RootNavigator);

// const RNRedux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

// export default RNRedux;

const App: React.FunctionComponent = () => {
  let navigator: NavigationContainerComponent | null = null;
  const store = configureStore(() => navigator === null ? null : navigator.dispatch);
  const AppContainer = createAppContainer(RootNavigator);

  return (
    <Provider store={store}>
      <AppContainer ref={nav => navigator = nav} />
    </Provider>
  );
};

export default App;
