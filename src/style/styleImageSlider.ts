import { StyleSheet } from "react-native";

export const styleImageSlider = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    slide: {
      marginRight: 1,
    },
    image: {
      width: 167,
      height: 280,
      borderRadius: 1,
      borderWidth: 1,
      borderColor: "Black",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      bottom: 40,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "center",
    },
    city: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white",
    },
    place: {
      fontSize: 11,
      color: "#FFBF00",
    },
    availableDate: {
      fontSize: 12,
      color: "white",
    },
    commonPlace: {
      backgroundColor: "#FFBF00",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      position: "absolute",
      bottom: 0,
      left: 20,
      right: 20,
      height: 50,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    commonPlaceText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });