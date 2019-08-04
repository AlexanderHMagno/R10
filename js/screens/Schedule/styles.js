import { Platform, StyleSheet } from "react-native";
import design from "../../config/styles";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  },
  groupHour: {
    backgroundColor: design.colors.LightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      android: {
        color: design.colors.darkGrey
      }
    })
  },
  sessionsTitle: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        padding: 15,
        fontWeight: "bold"
      },
      android: {
        padding: 5,
        paddingLeft: 15,
        color: design.colors.darkGrey
      }
    })
  },
  heartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 0,
    paddingRight: 20
  },
  sessionsLocation: {
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
