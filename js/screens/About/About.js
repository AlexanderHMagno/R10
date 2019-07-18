import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const About = ({ data }) => {
  return (
    <View>
      {data.map(({ id, title, description }) => (
        <View key={id}>
          <Text>{title}</Text>
        </View>
      ))}
    </View>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired
};
export default About;
