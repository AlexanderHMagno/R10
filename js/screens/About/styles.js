import { StyleSheet } from "react-native";
import design from "../../config/styles";

const styles = StyleSheet.create({
  fullContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  topLogo: {
    paddingTop: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    height: 1,
    margin: "5%",
    width: "90%",
    backgroundColor: "#CED0CE"
  },
  introductionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 15
  },
  introductionParagraph: {
    fontSize: 16,
    padding: 15,
    lineHeight: 30
  },
  containerList: {
    color: design.colors.Purple,
    textAlign: "center",
    flexGrow: 1,
    justifyContent: "space-between"
  },
  colorList: {
    color: design.colors.Purple,
    padding: 15,
    fontWeight: "bold",
    fontSize: 16
  }
});

export default styles;
