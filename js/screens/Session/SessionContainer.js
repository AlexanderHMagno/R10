import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./styles";
import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const infoSession = navigation.getParam("infoSession");
    return <Session data={infoSession} navigation={navigation} />;
  }
}

export default SessionContainer;
