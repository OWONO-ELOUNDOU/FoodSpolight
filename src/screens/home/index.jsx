import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from "../../constants/theme"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '../../components/task';

const homeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [date, setDate] = useState('');
    const [disease, setDisease] = useState('');

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);

        if(taskItems) {
            AsyncStorage.setItem('dishes', JSON.stringify(taskItems));
            alert('data saved');
        } else {
            alert('Please fill all the inputs');
        }

    }

    const completedTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return(
        <View style={ styles.container }>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Dishes</Text>

                <View style={styles.items}>
                {/* This is where the tasks will go! */}
                {
                    taskItems.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => completedTask(index)}>
                        <Task text={item}/>
                        </TouchableOpacity>
                    );
                    })
                }
                </View>
            </View>
            <ScrollView>
                
                <View style={ styles.topContainer } >
                    <Text style={ styles.title } >Enter your daily dish</Text>
                </View>
                <View style={ styles.dataContainer } >
                    <TextInput
                        placeholder='Name'
                        placeholderTextColor={ COLORS.black }
                        style={ styles.textInput }
                        value={task}
                        onChangeText={text => setTask(text)}
                    />
                    <TextInput
                        placeholder='Quantity'
                        placeholderTextColor={ COLORS.black }
                        style={ styles.textInput }
                        onChangeText={Qty => setQuantity(Qty)}
                    />
                    <TextInput
                        placeholder='Date'
                        placeholderTextColor={ COLORS.black }
                        style={ styles.textInput }
                        onChangeText={date => setDate(date)}
                    />
                    <TextInput
                        placeholder='Disease'
                        placeholderTextColor={ COLORS.black }
                        style={ styles.textInput }
                        onChangeText={ill => setDisease(ill)}
                    />
                </View>
                <View style={ styles.btnContainer } >
                    <TouchableOpacity onPress={() => handleAddTask()} >
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