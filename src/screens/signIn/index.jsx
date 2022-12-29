import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const signInScreen = () => {
    <View style={ styles.container } >
        <View>
            <Text style={ styles.title } >
                Welcome Back to FoodSpolight
            </Text>
        </View>

        <View>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
        </View>
    </View>
}

export default signInScreen;