import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";

const signInScreen = ({ navigation }) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate('main')} >
                            <View style={ styles.button1 } >
                                <Text style={ styles.btnText } >SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} >
                            <View style={ styles.button2 } >
                                <View style={ styles.logo } >
                                    <Image source={require('../../assets/facebook.png')} resierMode="contain" style={{ width: 20, height: 20, marginRight: 20 }} />
                                    <Text style={ styles.btnText }>Connect with Facebook</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('forgotpwd')} >
                            <Text style={ styles.text } >Forgot Password | click here</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.bottomContainer } >
                        <TouchableOpacity onPress={() => navigation.navigate('signup')} >
                            <Text style={ styles.text } >Don't have account ? | Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default signInScreen;