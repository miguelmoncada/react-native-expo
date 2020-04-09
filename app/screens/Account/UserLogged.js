import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'

export default function userGuest(props) {
    return (
        <View>
            <Text> User Logged </Text>
            <Button 
                title="Cerrar Sesión"
                onPress={() => firebase.auth().signOut()}
            />
        </View>
    )
}
