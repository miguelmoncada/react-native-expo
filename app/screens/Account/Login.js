import React from 'react'
import { StyleSheet ,Text, View, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export default function Login(props) {
    
    const {navigation} = props 

    return (
      <ScrollView>
          <Image 
            source={require("../../../assets/img/logo.png")}
            style={style.image}
            resizeMode="contain"
          />
        <View style={style.viewContainer}>
            <CreateAccount navigation={navigation}/>
        </View>
        <Divider style={style.divider} />
        <View style={style.viewContainer}>
        </View>
      </ScrollView>   
    );
}

function CreateAccount(props) {

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
    },
    image: {
        height:120,
        width: "100%",
        marginTop: 20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    }
});
