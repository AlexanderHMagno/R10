import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./styles";
import Map from "./Map";

const ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      title
      description
    }
  }
`;

class MapContainer extends Component {
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
          return <Map data={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default MapContainer;
