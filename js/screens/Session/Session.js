import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import design from "../../config/styles";

const Session = ({ data }) => {
  renderGroupHour = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const sessionChecker = data.speaker === null;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={[styles.sessionsLocation, { marginTop: 20 }]}>
          {data.location}
        </Text>
        <Text style={styles.sessionsTitle}>{data.title}</Text>
        <Text style={styles.groupHour}>
          {this.renderGroupHour(data.startTime)}
        </Text>
        <Text style={styles.introductionParagraph}>{data.description}</Text>
      </View>

      {!sessionChecker && (
        <View style={styles.infoContainer2}>
          <Text style={styles.sessionsLocation}>Presented by:</Text>
          <View style={styles.speakerContainer}>
            {data.speaker.image != null && (
              <Image
                style={styles.imageSpeaker}
                source={{ uri: data.speaker.image }}
              />
            )}

            <Text style={styles.nameSpeaker}>{data.speaker.name}</Text>
          </View>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log("alex")}>
            <LinearGradient
              colors={["#9963ea", "#3b5998", "#192f6a"]}
              // start={{ x: 1.0, y: 0.0 }}
              // end={{ x: 0.0, y: 1.0 }}
              style={[styles.button]}
            >
              <Text style={styles.buttonText}> Add to Faves </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

Session.propTypes = {
  data: PropTypes.array.isRequired
};
export default Session;
