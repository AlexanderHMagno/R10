import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { formatSessionData } from "./helpers";
import styles from "./styles";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }
  /* This method will create the separator line component
   * @param {None}
   * return {Component} holding the line to separate sessions */
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  /* This method will change the value of the grouped sessions from
   *    a long string to hour and minute includying (am/pm)
   * @param {string} holding the hour
   * return {string} hour with format hh:mm (am/pm) */
  renderGroupHour = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  render() {
    const { data } = this.props;
    const sessions = formatSessionData(data);

    return (
      <SectionList
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item, index, section }) => (
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate("Sessions", {
                infoSession: item
              })
            }
          >
            <View>
              <Text style={styles.sessionsTitle} key={index}>
                {item.title}
              </Text>
              <Text style={styles.sessionsLocation} key={index}>
                {item.location}
              </Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.groupHour}>{this.renderGroupHour(title)}</Text>
        )}
        sections={sessions.map(({ title, data }) => {
          return { title: title, data: data.map(x => x) };
        })}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object
};
export default Schedule;
