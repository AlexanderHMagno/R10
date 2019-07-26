import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import design from "../../config/styles";
import FavesContext from "../../assets/context/FavesContext";
import Ionicons from "react-native-vector-icons/Ionicons";

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: true,
      function: ""
    };
  }
  renderGroupHour = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  toggleFavorites = (func, id) => {
    this.setState({
      favorites: !this.state.favorites
    });
    func(id);
  };
  static contextType = FavesContext;
  componentDidMount = () => {
    if (this.context.state.faveIds.indexOf(this.props.data.id) == -1) {
      this.setState({
        favorites: false,
        function: this.context.add
      });
    } else {
      this.setState({
        function: this.context.remove
      });
    }
  };

  render() {
    const { data } = this.props;
    const sessionChecker = data.speaker === null;
    let IconComponent = Ionicons;

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.heartContainer}>
            <Text style={[styles.sessionsLocation, { marginTop: 20 }]}>
              {data.location}
            </Text>
            {this.state.favorites && Platform.OS == "android" && (
              <IconComponent
                name={`ios-heart`}
                size={20}
                color={design.colors.Purple}
              />
            )}
            {this.state.favorites && Platform.OS == "ios" && (
              <IconComponent
                name={`ios-heart`}
                size={20}
                color={design.colors.Red}
              />
            )}
          </View>
          <View style={styles.subInfoContainer}>
            <Text style={styles.sessionsTitle}>{data.title}</Text>
            <Text style={styles.groupHour}>
              {this.renderGroupHour(data.startTime)}
            </Text>
            <Text style={styles.introductionParagraph}>{data.description}</Text>
          </View>
        </View>

        {!sessionChecker && (
          <View style={styles.infoContainer2}>
            <Text style={styles.sessionsLocation}>Presented by:</Text>
            <View style={styles.speakerContainer}>
              {data.speaker.image != null && (
                <TouchableOpacity onPress={() => console.log(data.speaker)}>
                  <Image
                    style={styles.imageSpeaker}
                    source={{ uri: data.speaker.image }}
                  />
                </TouchableOpacity>
              )}

              <Text
                style={styles.nameSpeaker}
                onPress={() => console.log(data.speaker)}
              >
                {data.speaker.name}
              </Text>
            </View>
            <View style={styles.separator} />

            <TouchableOpacity
              onPress={() => this.toggleFavorites(this.state.function, data.id)}
            >
              <LinearGradient
                colors={["#9963ea", "#3b5998", "#192f6a"]}
                // start={{ x: 1.0, y: 0.0 }}
                // end={{ x: 0.0, y: 1.0 }}
                style={[styles.button]}
              >
                <Text style={styles.buttonText}>
                  {!this.state.favorites && "Add to Faves"}
                  {this.state.favorites && "Remove from Faves"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

Session.propTypes = {
  data: PropTypes.object.isRequired
};
export default Session;
