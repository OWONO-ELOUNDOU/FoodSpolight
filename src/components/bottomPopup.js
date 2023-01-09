//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';

// create a component
class bottomPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }
    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} ></View>
    }

    render() {
        let show = this.state
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{ flex: 1, backgroundColor: '#0000aa', justifyContent: 'flex-end' }} >
                    {this.renderOutsideTouchable(onTouchOutside)}
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default bottomPopup;
