import React, { Component } from "react";
import { View, Text } from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import RootStackNavigator from "./navigation/RootStackNavigator";

console.disableYellowBox = true;
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
