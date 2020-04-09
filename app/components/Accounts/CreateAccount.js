import React from 'react'
import { StyleSheet ,Text } from 'react-native'

export default function CreateAccount(props) {

    const {navigation} = props 

    return (
         <Text style={style.textRegister}>
             ¿Aun no tienes una cuenta?{" "}
             <Text
                style={style.btnRegister}
                onPress={()=> {navigation.navigate("Register")}}
             >
                Regístrarte
             </Text>
         </Text>
    );
}

const style = StyleSheet.create({
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold",

    },
    textRegister: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    }
});