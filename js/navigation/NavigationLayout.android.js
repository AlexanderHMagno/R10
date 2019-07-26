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

const AboutStack = createDrawerNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createDrawerNavigator(
  {
    Faves: FavesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createDrawerNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createDrawerNavigator(
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
    edgeWidth: 200,
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "Map") {
          iconName = `ios-navigate`;
        } else if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: design.colors.MediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: design.fonts.primaryr
      },
      style: { backgroundColor: "black" }
    }
  }
);
