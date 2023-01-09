import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import storage from '../../components/storage';

const historyScreen = () => {
    const items = JSON.parse(AsyncStorage.getItem('dishes'));
    console.log(items)

    return(
        <View style={ styles.container }>
            <Text>
                
            </Text>
        </View>
    )
}

export default historyScreen;