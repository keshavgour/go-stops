import { StyleSheet } from "react-native";

export const styleHeader = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingHorizontal: 20,
      height: 80,
      paddingTop: 20,
      backgroundColor: "#fff", // Example background color
    },
    logo: {
      width: 130,
      height: 130,
      resizeMode: "contain",
    },
  });