import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  board: {
    width: 320,
    height: 320,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  lightSquare: {
    backgroundColor: "#f0d9b5",
  },
  darkSquare: {
    backgroundColor: "#b58863",
  },
  piece: {
    width: 30,
    height: 30,
  },
});
