import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./styles";
import Faves from "./Faves";

const ALL_Faves = gql`
  query {
    allSessions {
      id
      title
      location
      startTime
      description
      speaker {
        name
        image
      }
    }
  }
`;

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
    console.log("alexander");
  }

  render() {
    return (
      <Query query={ALL_Faves}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;
          return (
            <Faves data={data.allSessions} navigation={this.props.navigation} />
          );
        }}
      </Query>
    );
  }
}

export default FavesContainer;
