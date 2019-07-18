import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const Map = ({ data }) => {
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

Map.propTypes = {
  data: PropTypes.array.isRequired
};
export default Map;
