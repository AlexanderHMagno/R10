import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const generalInfo = () => {
  return (
    <View>
      <Text style={styles.introductionParagraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.introductionTitle}>Date & Venue</Text>
      <Text style={styles.introductionParagraph}>
        The R10 conference will take place on Saturday, June 27, 2020 in
        Vancouver, BC.
      </Text>
      <Text style={styles.introductionTitle}>Code of Conduct</Text>
    </View>
  );
};

export default generalInfo;
