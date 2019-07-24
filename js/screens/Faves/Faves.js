import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { formatSessionData } from "./helpers";
import styles from "./styles";
import FavesContext from "../../assets/context/FavesContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import design from "../../config/styles";

class Faves extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  renderGroupHour = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  static contextType = FavesContext;

  render() {
    const { state } = this.context;
    const { data } = this.props;
    const new_data = state.faveIds.map(x => data.filter(y => x == y.id)[0]);
    const sessions = formatSessionData(new_data);
    const IconComponent = Ionicons;

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
              <View style={styles.heartContainer}>
                <Text style={styles.sessionsLocation} key={index}>
                  {item.location}
                </Text>
                <IconComponent
                  name={`ios-heart`}
                  size={20}
                  color={design.colors.Red}
                />
              </View>
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

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object
};
export default Faves;
