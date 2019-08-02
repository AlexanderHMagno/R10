import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  Image,
  LayoutAnimation,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
// import { Separator } from "native-base";
import styles from "./styles";
import GeneralInfo from "./generalInfo";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateValue: new Animated.ValueXY()
    };
  }

  animateCircle = () => {
    let matX = Math.random() * 300;
    let matY = Math.random() * 300;
    let time = Math.random() * 3000;

    Animated.timing(this.state.translateValue, {
      toValue: { x: matX, y: matY },
      duration: time
    }).start(animation => {
      if (animation.finished) {
        this.animateCircle();
      }
    });
  };
  render() {
    const { data } = this.props;
    return (
      <View style={styles.fullContainer}>
        <ScrollView contentContainerStyle={[styles.containerList]}>
          <View style={styles.topLogo}>
            <Image source={require("../../assets/images/r10_logo.png")} />
          </View>
          <View style={styles.separator} />
          <GeneralInfo />
          {data.map(({ id, title, description }) => (
            <Collapse key={id}>
              <CollapseHeader>
                <Text style={styles.colorList}>+ {title}</Text>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.introductionParagraph}>{description}</Text>
              </CollapseBody>
            </Collapse>
          ))}

          <View style={styles.separator} />
          <Text style={styles.introductionParagraph}>RED Academy 2019</Text>
        </ScrollView>
      </View>
    );
  }
}

About.propTypes = {
  data: PropTypes.array.isRequired
};
export default About;
