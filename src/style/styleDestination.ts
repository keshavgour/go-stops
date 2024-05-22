import { StyleSheet } from "react-native";

export const styleDestination = StyleSheet.create({
    container: {
      flexDirection: "row",
      margin: 20,
    },
    slide: {
      marginRight: 12,
    },
    image: {
      width: 150,
      height: 220,
      borderRadius:10,
      overflow:"hidden",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      bottom: 1,
      left: 0,
      right: 0,
      height:90 ,
      backgroundColor:'rgba(0,0,0,0.3)',
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "flex-start",
    },

    city: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white",
    },
    places: {
      fontSize: 13,
      color: "white",
    },
    text:{
      paddingTop: 50,
      paddingLeft:20,
      fontSize:18,
      fontWeight:'bold'  
    },
    textSeeAll: {
        paddingTop:50,
        fontSize:16,
        paddingLeft:160,
        color:'#F00A6C'
    }
   
    
  });