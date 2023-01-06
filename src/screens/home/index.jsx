import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from "../../constants/theme"

const homeScreen = () => {
    return(
        <View style={ styles.container }>
            <ScrollView>
                <View style={ styles.topContainer } >
                    <Text style={ styles.title } >Enter your daily dish</Text>
                </View>
                <View style={ styles.dataContainer } >
                    <TextInput placeholder='Name' placeholderTextColor={ COLORS.black } style={ styles.textInput } />
                    <TextInput placeholder='Quantity' placeholderTextColor={ COLORS.black } style={ styles.textInput } />
                    <TextInput  placeholder='Date' placeholderTextColor={ COLORS.black } style={ styles.textInput } />
                    <TextInput  placeholder='Disease' placeholderTextColor={ COLORS.black } style={ styles.textInput } />
                </View>
                <View style={ styles.btnContainer } >
                    <TouchableOpacity onPress={() => {}} >
                        <View style={ styles.button1 } >
                            <Text style={ styles.btnText } >Add Dish</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default homeScreen;