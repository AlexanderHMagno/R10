import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";

const About = ({ data }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.topLogo}>
        <Image source={require("../../assets/images/r10_logo.png")} />
      </View>

      <ScrollView contentContainerStyle={[styles.containerList]}>
        {data.map(({ id, title, description }) => (
          <View key={id}>
            <Text style={styles.colorList}>+ {title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired
};
export default About;
