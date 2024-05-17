import { StyleSheet } from "react-native";

export const styleBookHostel = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      paddingTop: 16,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 22,
      backgroundColor: "#F4F5F4",
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
    },
    text: {
      marginLeft: 8,
      fontSize: 14,
    },
    dateContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    dateButton: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
    },
    dateAlign: {
      flexDirection: "column",
    },
    dateHori: {
      flexDirection: "row",
      paddingTop: 9,
    },
    greyColor: {
      color: "grey",
      fontSize: 13,
    },
    horizontalLine: {
      height: 1,
      marginVertical: 16,
      backgroundColor: "lightgrey",
    },
    dashedLine: {
      width: 25,
      height: 1,
      marginTop: 35,
      borderWidth: 1.3,
      borderStyle: "dashed",
      borderColor: "grey",
    },
    modalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    modalItem: {
      padding: 15,
      backgroundColor: "white",
      width: 360,
      alignItems: "flex-start",
    },
    modalText: {
      fontSize: 18,
    },
  });
  