import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'

const width = Dimensions.get('window').width

export default function Btn({ text, color, onPress}) {
    return (
        <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: color }]}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})