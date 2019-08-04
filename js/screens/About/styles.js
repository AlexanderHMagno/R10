import { Platform, StyleSheet } from "react-native";
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
    alignItems: "center",
    ...Platform.select({
      android: {
        paddingTop: "5%"
      }
    })
  },
  separator: {
    height: 1,
    width: "90%",
    backgroundColor: "#CED0CE",
    ...Platform.select({
      ios: {
        margin: 5
      },
      android: {
        margin: "2%",
        marginLeft: "5%"
      }
    })
  },
  introductionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        padding: 15
      },
      android: {
        padding: 0,
        paddingLeft: 15,
        color: "gray"
      }
    })
  },
  introductionParagraph: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        padding: 15,
        lineHeight: 30,
        fontFamily: design.fonts.primary
      },
      android: {
        color: design.colors.MediumGrey,
        fontSize: 16,
        padding: 5,
        paddingLeft: 15,
        fontFamily: design.fonts.secundary,
        fontWeight: "400"
      }
    })
  },
  containerList: {
    color: design.colors.Purple,
    textAlign: "center",
    flexGrow: 1,

    ...Platform.select({
      ios: {
        justifyContent: "space-between"
      },
      android: {
        justifyContent: "flex-start"
      }
    })
  },
  colorList: {
    color: design.colors.Purple,
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontWeight: "bold",
        padding: 15
      },
      android: {
        padding: 10,
        paddingLeft: 15
      }
    })
  }
});

export default styles;
