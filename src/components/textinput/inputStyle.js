import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#EB98AD",
    margin: 10,
    borderRadius: 20,
    height: "20%",
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    margin: 20,
    marginTop: 12,
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 15,
    backgroundColor: "#AB6F7E",
  },
  textinput: {
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: "#AB6F7E",
    color: "white",
  },
});
