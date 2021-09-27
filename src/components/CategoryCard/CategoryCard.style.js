import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        margin:5,
        borderBottomLeftRadius:50,
        borderTopStartRadius:50,
        paddingLeft:15,

    },
    image:{
        width:100,
        height:100,
        resizeMode:"contain",

    },
    title_container:{
        justifyContent:'center',
        marginLeft:15,
    },
    title:{
        fontSize:20,
        color:'#14213D',
    }


})