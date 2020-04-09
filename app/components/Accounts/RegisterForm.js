import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

export default function RegisterForm(props) {

    const register = () => {
        
    }

    return (
        <View
            behavior="padding" 
            style={style.formContainer}
            enable
        >
            <Input 
                placeholder="Correro Electrónico"
                containerStyle={style.inputForm}
                onChange={() => console.log("")}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name="at"
                        iconStyle={style.iconRight}
                    />
                }
            /> 
            <Input
                placeholder="Contraseña"
                password={true}
                secureTextEntry={true}
                containerStyle={style.inputForm}
                onChange={() => console.log("")}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name="eye-outline"
                        iconStyle={style.iconRight}
                    />
                }
            />
            <Input
                placeholder="Repetir Contraseña"
                password={true}
                secureTextEntry={true}
                containerStyle={style.inputForm}
                onChange={() => console.log("")}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name="eye-outline"
                        iconStyle={style.iconRight}
                    />
                }
            />
            <Button 
                title="Registrarse"
                containerStyle={style.btnContainerRegister}
                buttonStyle={style.btnRegister}
                onPress={register}
            />   
        </View>
    );
}

const style = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
      backgroundColor: "#00a680"  
    }
});
