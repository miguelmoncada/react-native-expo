import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'

export default function userGuest(props) {
    const {navigation} = props   

    return (
        <ScrollView
            style={style.viewBody}
            centerContent={true}
        >
            <Image 
                style={style.image}
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
            />
            <Text style={style.title} >
                Consulta tu Perfil de 5 Tenedores
            </Text>
            <Text style={style.description} >
                ¿ Como describirías tu mejor restaurante ?
                Busca y visualiza los mejores restaurantes de una forma sencilla, 
                vota cual te ha gustado más y comenta como ha sido tu experencia.
            </Text>
            <View style={style.viewBtn}>
               <Button 
                    buttonStyle={style.btnStyle}
                    containerStyle={style.btnContainer}
                    title="Ver tu perfil"
                    onPress={() => {navigation.navigate("Login")}}
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
    image: {
        height:300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"

    },
    description: {
        textAlign: "center",
        marginBottom: 20,
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