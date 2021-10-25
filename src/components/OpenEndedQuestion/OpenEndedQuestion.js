import React, {useState} from "react";
import { View,Text,TextInput,Image,KeyboardAvoidingView, SafeAreaView } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";
import PropTypes from 'prop-types';

const OpenEndedQuestion = ({question, onCorrect, onWrong,})=> {
    const [input, setInput ] = useState('');

    const onButtonPress = () => {
        if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect();
        } else {
            onWrong();
        }
        setInput("");
    };

    return (
        <>
           
            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>
                {/* Image */}
                <Image 
                    source={mascot}
                    style={styles.mascot}
                    resizeMode="contain"
                />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>

                {/* //Sentence translated */}
                
            </View>
            

            <TextInput 
                placeholder="Type in English"
                style={styles.textInput} 
                value={input}
                onChangeText={setInput} 
                textAlignVertical='top'
                multiline
                
            />
            
            <Button 
                text="Check"
                onPress={onButtonPress}
                disabled={!input}
                
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={10}>
            </KeyboardAvoidingView>
            
        </>
        

    );
};
OpenEndedQuestion.propTypes = {
    
    id: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    answer:PropTypes.string,
                
     
};

export default OpenEndedQuestion;