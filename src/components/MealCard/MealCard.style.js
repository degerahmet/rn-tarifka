import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical:10,
        justifyContent: 'center',
    },
    image: {
        width: deviceSize.width / 1.1,
        height: deviceSize.height / 4,
        resizeMode: 'cover',
        flexDirection: "column-reverse"
    },
    title_container:{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title:{
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 5,
    }
})