import { StyleSheet } from "react-native";
import design from "../../../config/styles";

const styles = StyleSheet.create({
  speakerContainer: {
    backgroundColor: "white",
    width: "90%",
    minHeight: "90%",
    flex: 1,
    marginLeft: "5%",
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleContainer: {
    marginTop: 40,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    width: "90%",
    paddingLeft: "5%"
  },
  modalTitle: { color: "white", fontSize: 20, fontWeight: "bold" },
  imageSpeaker: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginTop: 10
  },
  nameSpeaker: {
    fontWeight: "bold",
    fontSize: 25
  },
  bio: {
    fontSize: 18,
    padding: 5
  },
  button: {
    alignItems: "center",
    width: "100%",
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
