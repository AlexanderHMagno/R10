import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
import GeneralInfo from "./generalInfo";

const About = ({ data }) => {
  return (
    <View style={styles.fullContainer}>
      <ScrollView contentContainerStyle={[styles.containerList]}>
        <View style={styles.topLogo}>
          <Image source={require("../../assets/images/r10_logo.png")} />
        </View>
        <View style={styles.separator} />
        <GeneralInfo />
        {data.map(({ id, title, description }) => (
          <View key={id}>
            <Text onPress={() => console.log(id)} style={styles.colorList}>
              + {title}
            </Text>
            <Text style={styles.introductionParagraph}>{description}</Text>
          </View>
        ))}
        <View style={styles.separator} />
        <Text style={styles.introductionParagraph}>RED Academy 2019</Text>
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired
};
export default About;
