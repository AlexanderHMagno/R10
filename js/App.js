import React, { Component } from "react";
import { View, Text } from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { FavesProvider } from "./assets/context/FavesContext";

console.disableYellowBox = true;
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

export default App;
