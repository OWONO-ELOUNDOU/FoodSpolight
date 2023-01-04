import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native"
import styles from "./styles";

const forgotPwdScreen = () => {
    return(
        <View style={ styles.container } >
            <Text style={ styles.title } >Forgot password</Text>
            <Text style={ styles.subtitle } >Enter your email address below and we will you an email with instructions on how to change your password.</Text>
            <View>
                <TextInput placeholder="Enter your email" style={ styles.textinput } />
            </View>
            <TouchableOpacity>
                <View style={ styles.button } >
                    <Text style={ styles.buttonText } >Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default forgotPwdScreen;