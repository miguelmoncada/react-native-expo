import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import ThemesColor from '../components/CustomStyleSheet'

export default function userGuest(props) {
    const {navigation} = props   

    return (
        <ScrollView
            style={style.viewBody}
            centerContent={true}
        >
            <Text style={style.title} >
                Selecciona un Tema:
            </Text>
            <View style={style.viewBtn}>
               <Button 
                    buttonStyle={style.btnStyle}
                    containerStyle={style.btnContainer}
                    title="Aplicar Tema"
                />
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center"

    },
    viewBtn: {
        flex: 1,
        alignItems: "center"
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: "70%"
    },
});