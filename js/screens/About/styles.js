import { StyleSheet } from "react-native";
import design from "../../config/styles";

const styles = StyleSheet.create({
  fullContainer: {
    // marginTop: 100,
    height: "100%",
    width: "100%",
    display: "flex",
    // flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  topLogo: {
    flex: 1,
    width: "100%",
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  containerList: {
    color: design.colors.Purple,
    textAlign: "center",
    flex: 5
  },
  colorList: {
    color: design.colors.Purple,
    padding: 15
  }
});

export default styles;
