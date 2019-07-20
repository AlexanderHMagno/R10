import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import design from "../../config/styles";

const About = ({ data }) => {
  return (
    <View style={styles.fullContainer}>
      <LinearGradient
        colors={["#cf392a", "#9963ea"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={[{ height: 64, width: "100%" }]}
      >
        <Text>About</Text>
      </LinearGradient>
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
