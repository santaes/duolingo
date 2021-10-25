import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    root:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
    },
    icon:{
        height:30,
        width:30,
        marginHorizontal:5,
    },
    lives:{
        color: '#ff1100',
        fontWeight:'bold',
        fontSize:18,
        marginHorizontal:5,
        right:5,
    },
});
export default styles;