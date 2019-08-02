import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  DrawerNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import FavesScreen from "../screens/Faves";
import MapScreen from "../screens/Map";
import ScheduleScreen from "../screens/Schedule";
import SessionsScreen from "../screens/Session";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import design from "../config/styles";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Sessions: SessionsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
    // Sessions: SessionsStack
  },
  //theses are the options to work with the navigation bar
  {
    initialRouteName: "Schedule",
    edgeWidth: 100,
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "About") {
          iconName = `md-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Map") {
          iconName = `md-navigate`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),

    contentOptions: {
      activeTintColor: design.colors.Purple,
      inactiveTintColor: design.colors.MediumGrey,

      labelStyle: {
        fontSize: 16,
        // color: design.colors.MediumGrey,
        fontFamily: design.fonts.primary
      }
      // style: { backgroundColor: "black" }
    }
  }
);
