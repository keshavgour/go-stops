import { Dimensions, StyleSheet } from "react-native";

export const styleOurHostel = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingTop:30
    },
    heading:{
        fontSize:16,
        fontWeight:'bold'
    },
    hostelName:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:5
    },
    address:{
        color:'grey',
        width:330
    },
    locationAlign:{
        paddingTop:7,
        flexDirection:'row'
    },
    horizontalAlign:{
        flexDirection:'row',
        paddingTop:7
    },
    price:{
        paddingTop:4,
        color:'#F00A6C',
        fontWeight:'bold',
        fontSize:17
    },
    horizontalLine:{
        marginTop:50,
        height:1,
        width:345,
        backgroundColor:'lightgrey'
    },
    textPadding:{
        paddingLeft:40
    },
    imagesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop:30,
      },
      leftColumn: {
        flex: 2,
        marginRight: 2,
      },
      rightColumn: {
        flex: 1,
        justifyContent: "space-between",
      },
      largeImage: {
        width: 241,
        height: 200,
        borderRadius:20,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,

      },
      smallImage: {
        width: 100,
        height: 100,
        marginBottom: 2,
        borderTopRightRadius:20
      },
      smallImage1: {
        width: 100,
        height: 98,
        marginBottom: 2,
        borderBottomRightRadius:20
      },
      modalContainer: {
        paddingTop:230,
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
      fullImage: {
        width: 383,
        height: 300,
      },
      closeButton: {
        position: "absolute",
        top: 40,
        right: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
      },
      closeButtonText: {
        fontSize: 16,
        fontWeight: "bold",
      },
})