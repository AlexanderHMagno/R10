import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Header, HeaderTitle } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import design from "../config/styles";

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

const Menu_android = ({ navigation }) => {
  return (
    <Ionicons
      onPress={() => navigation.toggleDrawer()}
      name={`md-menu`}
      size={30}
      color={"white"}
      style={{ marginLeft: 20 }}
    />
  );
};

export const sharedNavigationOptions = navigation => {
  return {
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    title: navigation.state.routeName,
    headerLeft: Platform.OS == "android" &&
      navigation.state.routeName != "Sessions" && (
        <Menu_android navigation={navigation} />
      ),

    headerStyle: {
      backgroundColor: "transparent",
      color: "white"
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 20
    }
  };
};
