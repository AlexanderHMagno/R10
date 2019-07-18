import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./styles";
import Faves from "./Faves";

const ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      title
      description
    }
  }
`;

class FavesContainer extends Component {
  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;
          return <Faves data={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default FavesContainer;
