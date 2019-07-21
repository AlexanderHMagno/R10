import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";
import { formatSessionData } from "./helpers";
import styles from "./styles";

const Schedule = ({ data }) => {
  const sessions = formatSessionData(data);

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  renderGroupHour = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return (
    <SectionList
      ItemSeparatorComponent={this.renderSeparator}
      renderItem={({ item, index, section }) => (
        <View>
          <Text style={styles.sessionsTitle} key={index}>
            {item.title}
          </Text>
          <Text style={styles.sessionsLocation} key={index}>
            {item.location}
          </Text>
        </View>
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
};

Schedule.propTypes = {
  data: PropTypes.array.isRequired
};
export default Schedule;
