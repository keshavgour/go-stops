import { StyleSheet } from "react-native";

export const styleReadMore = StyleSheet.create({
    containers:{
        padding :20,
        backgroundColor:'#EAEAEA'
    },
    heading:{
        fontSize: 16,
        fontWeight:'bold'
    },
    climate:{
      paddingTop:30,
      flexDirection:"row"  
    },
    temp:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:15,
        paddingTop:2
    },
    description:{
        paddingTop:30,
        fontSize:17
    },
    horizontalLine:{
        marginTop:40,
        marginBottom:40,
        height: 1,
        marginVertical: 40,
        backgroundColor: "grey",
    },
    mode:{
        paddingLeft:10,
        fontSize:20,
        color:'#6A5ACD',
        fontWeight:'bold'
    }
})