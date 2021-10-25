import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight:'bold',
        alignSelf:'flex-start',
        marginHorizontal:10,
        marginTop:20,
    },
    row:{
        flexDirection:'row',
        alignSelf:'flex-start',
        alignItems:'center',
        margin: 10,
        marginBottom: 0,
        marginHorizontal:10,
        
    },
    mascot:{
        width:'30%',
        aspectRatio: 3/4,
        marginRight:10,
    },
    sentence:{
        fontSize:16,
    },
    sentenceContainer:{
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius: 5,
        padding:10,
    },
    textInput:{
        alignSelf:'stretch',
        flex:1,
        backgroundColor:'#ebebeb',
        borderWidth: 1,
        borderColor:'#d1d1d1',
        borderRadius:10,
        padding:10,
        fontSize:16,
        marginHorizontal:10,
    },
});

export default styles;