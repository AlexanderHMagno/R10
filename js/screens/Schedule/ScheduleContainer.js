import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./styles";
import Schedule from "./Schedule";

const ALL_SCHEDULE = gql`
  query {
    allSessions {
      title
      location
      startTime
    }
  }
`;

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={ALL_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;
          return <Schedule data={data.allSessions} />;
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
