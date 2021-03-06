import { StyleSheet } from "react-native";
import design from "../../config/styles";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  },
  groupHour: {
    fontWeight: "bold",
    backgroundColor: design.colors.LightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15
  },
  heartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20
  },
  sessionsTitle: {
    fontWeight: "bold",
    padding: 15,
    fontSize: 16
  },
  sessionsLocation: {
    paddingTop: 0,
    color: design.colors.MediumGrey
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default styles;
