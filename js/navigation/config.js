import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header, HeaderTitle } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 120, width: "100%" }]}
    >
      {/* {console.log(props.navigation.state.pathname)} */}
    </LinearGradient>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => {
  console.log();
  return {
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    title: navigation.state.routeName,
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 20
    }
  };
};
