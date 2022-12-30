import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";

const signInScreen = () => {
    return(
        <View style={ styles.container } >
            <ImageBackground 
                source={require('../../assets/background.png')}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    <View style={ styles.topContainer } >
                        <Text style={ styles.title } >Welcome Back</Text>
                        <Text style={ styles.subtitle } >Sign In to continue</Text>
                    </View>
                    <View style={ styles.dataContainer } >
                        <TextInput placeholder='Username' placeholderTextColor={ COLORS.white } style={ styles.textInput } />
                        <TextInput placeholder='Password' placeholderTextColor={ COLORS.white } style={ styles.textInput } />
                    </View>
                    <View style={ styles.btnContainer } >
                        <TouchableOpacity onPress={() => {}} >
                            <View style={ styles.button1 } >
                                <Text style={ styles.btnText } >SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default signInScreen;