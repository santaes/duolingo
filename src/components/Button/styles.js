import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#58cc02',
        height:50,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        //borders
        borderRadius:10,
        
        
        marginHorizontal:10,

    },
    disabledContainer:{
        backgroundColor:'#e8e8e8',
        borderColor:'#d1d1d1',
    },
    text:{
        fontSize:20,
        color:'#ffffff',
        fontWeight:'bold',
        borderColor:'#ffffff',
        borderBottomWidth:1.5,

    },
});

export default styles;