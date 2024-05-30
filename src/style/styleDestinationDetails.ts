import { StyleSheet } from "react-native";

export const styleDestinationDetails = StyleSheet.create({

    image: {
      width: 390,
      height: 290,
      overflow:"hidden",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      bottom: 120,
      left: 0,
      right: 0,
      height:90 ,
      backgroundColor:'rgba(0,0,0,0)',
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "center",
    },

    city: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
    },
    places: {
      paddingTop:20,
      fontSize: 20,
      fontWeight:'bold',
      color: "white",
    },
    text:{
      padding:20,
      paddingBottom:25,
      fontSize:19,
    },
    showMoreContainer:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:5,
      marginLeft:135

    },
    showMoreText: {
      color: "#F00A6C",
      fontSize:18,
      fontWeight:"bold"
    },
   
  });