import { StyleSheet } from "react-native";
import design from "../../../config/styles";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black"
  },

  speakerContainer: {
    backgroundColor: "white",
    width: "95%",
    height: 500,
    flex: 1,
    marginLeft: "2.5%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  secondContainer: { flex: 9 },
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
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10
  },
  nameSpeaker: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 10,
    color: design.colors.darkGrey
  },
  bio: {
    fontSize: 16,
    color: design.colors.MediumGrey,
    padding: 5,
    lineHeight: 20,
    marginBottom: 20
  },
  button: {
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    backgroundColor: design.colors.Purple,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17
  }
});

export default styles;
