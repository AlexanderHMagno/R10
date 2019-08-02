import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "",
      markers: []
    };
  }

  componentWillMount() {
    const point = {
      latitude: 49.263455,
      longitude: -123.138064,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    this.setState({
      region: point,
      markers: [{ title: "R10", coordinates: point }]
    });
    // console.log(this.state.markers);
    // console.log(typeof this.state.markers);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        region={this.state.region}
        // onRegionChange={this.onRegionChange.bind(this)}
        style={{ width: "100%", height: "100%" }}
        showsTraffic={false}
        loadingEnabled={true}
      >
        {this.state.markers.map(marker => (
          <Marker
            coordinate={marker.coordinates}
            title={marker.title}
            image={require("../../assets/images/map_pin.png")}
            key={marker.title}
            // description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}

Map.propTypes = {
  data: PropTypes.array
};
export default Map;
