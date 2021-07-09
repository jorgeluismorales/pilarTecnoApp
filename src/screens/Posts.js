import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'


export default function Posts({navigation}) {
    return (
        <View style={styles.container}>
            <Text>posts</Text>
            <Button title='Ir a post details'
            onPress={() => navigation.navigate("postDetail")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
})