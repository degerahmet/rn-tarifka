import  {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white"
    },
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'cover',
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"#14213D",

    },
    description:{
        marginTop:10,
    },
    area:{
        fontWeight:"bold",
        fontSize:14,

    },
    button:{
        backgroundColor:"red",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        marginBottom:2,
        borderRadius:4,
    },
    button_text:{
        fontSize:17,
    }

})