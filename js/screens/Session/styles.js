import { StyleSheet } from "react-native";
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
    paddingRight: 20
  },
  sessionsTitle: {
    fontWeight: "bold",
    padding: 15,
    fontSize: 24
  },
  sessionsLocation: {
    padding: 15,
    paddingTop: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: design.colors.MediumGrey
  },
  subInfoContainer: { flex: 6 },
  introductionParagraph: {
    fontSize: 24,
    padding: 15,
    lineHeight: 35
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    height: "90%"
  },
  infoContainer: {
    flex: 2,
    justifyContent: "flex-start"
  },
  infoContainer2: {
    flex: 1,
    justifyContent: "flex-start"
  },
  speakerContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
    marginBottom: 20
  },
  imageSpeaker: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 10
  },
  nameSpeaker: {
    fontWeight: "bold",
    fontSize: 16
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
