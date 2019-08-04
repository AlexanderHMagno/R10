import { Platform, StyleSheet } from "react-native";
import design from "../../config/styles";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#CED0CE"
  },
  groupHour: {
    fontWeight: "bold",
    color: design.colors.Red,
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
    ...Platform.select({
      android: {
        marginTop: 10,
        marginBottom: 10
      }
    })
  },
  sessionsTitle: {
    fontWeight: "bold",
    padding: 15,
    ...Platform.select({
      ios: {
        fontSize: 24
      },
      android: {
        paddingTop: 0,
        fontSize: 24,
        color: design.colors.darkGrey
      }
    })
  },
  sessionsLocation: {
    padding: 15,
    paddingTop: 0,
    color: design.colors.MediumGrey,
    ...Platform.select({
      ios: {
        fontWeight: "bold",
        fontSize: 20
      },
      android: {
        fontSize: 16
      }
    })
  },
  subInfoContainer: { flex: 6 },
  introductionParagraph: {
    padding: 15,
    ...Platform.select({
      ios: {
        lineHeight: 35,
        fontSize: 24
      },
      android: {
        lineHeight: 24,
        fontSize: 16,
        color: design.colors.darkGrey,
        fontFamily: design.fonts.secundary
      }
    })
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    height: "90%"
  },
  infoContainer: {
    justifyContent: "flex-start",
    ...Platform.select({
      ios: {
        flex: 2
      },
      android: {
        flex: 1
      }
    })
  },
  infoContainer2: {
    justifyContent: "flex-start",
    ...Platform.select({
      ios: {
        flex: 1
      },
      android: {
        flex: 2,
        paddingTop: 50
      }
    })
  },
  speakerContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
    marginBottom: 20
  },
  imageSpeaker: {
    borderRadius: 50,
    marginRight: 10,
    ...Platform.select({
      ios: {
        width: 75,
        height: 75
      },
      android: {
        width: 50,
        height: 50
      }
    })
  },
  nameSpeaker: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      android: {
        color: design.colors.darkGrey
      }
    })
  },
  button: {
    alignItems: "center",
    width: "60%",
    marginLeft: "20%",
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: design.colors.Purple,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17
  }
});

export default styles;
