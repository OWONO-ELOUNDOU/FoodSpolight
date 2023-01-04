import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";

const signUpScreen = ({ navigation }) => {
    return(
        <View style={ styles.container } >
            <ImageBackground 
                source={require('../../assets/background.png')}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    <View style={ styles.topContainer } >
                        <Text style={ styles.title } >Get Started</Text>
                        <Text style={ styles.subtitle } >Sign Up to continue</Text>
                    </View>
                    <View style={ styles.dataContainer } >
                        <TextInput placeholder='Email' placeholderTextColor={ COLORS.white } style={ styles.textInput } />
                        <TextInput placeholder='Phone Number' placeholderTextColor={ COLORS.white } style={ styles.textInput } />
                        <TextInput placeholder='Password' placeholderTextColor={ COLORS.white } style={ styles.textInput } />
                    </View>
                    <View style={ styles.btnContainer } >
                        <TouchableOpacity onPress={() => {}} >
                            <View style={ styles.button1 } >
                                <Text style={ styles.btnText } >SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} >
                            <View style={ styles.button2 } >
                                <View style={ styles.logo } >
                                    <Image source={require('../../assets/facebook.png')} resierMode="contain" style={{ width: 20, height: 20, marginRight: 20 }} />
                                    <Text style={ styles.btnText }>Sign In with Facebook</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={ styles.bottomContainer } >
                        <TouchableOpacity onPress={() => navigation.navigate('signin')} >
                            <Text style={ styles.text } >Already have account ? | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default signUpScreen;