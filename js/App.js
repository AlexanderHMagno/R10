import React, { Component } from "react";
import { View, Text } from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import AboutScreen from "./screens/About";
import FavesScreen from "./screens/Faves";
import MapScreen from "./screens/Map";
import ScheduleScreen from "./screens/Schedule";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          <Text>My first Apollo app 🚀</Text>
          <AboutScreen />
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
