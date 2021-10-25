import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
    
    optionContainer:{
        borderWidth: 2,
        borderColor:'#e3e3e3',
        borderRadius:10,
        borderBottomWidth: 4,
        width:'48%',
        height:'48%',
        alignItems:'center',
        padding: 10,
        

    },
    selectedContainer:{
        backgroundColor: '#ddf4fe',
        borderColor: '#81D5FE',
    },
   
    optionImage:{
        width:'100%',
        flex:1,
    },
    optionText:{
        fontWeight:'bold',
        color:'#000000',
    },
    selectedText:{
        color:'#40bef7',
        fontWeight:'bold',
    },
});


export default styles;