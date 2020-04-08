import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function ImagenLogo(props) {
    return (
        <Image 
        source={require("../../assets/img/logo.png")}
        style={style.image}
        resizeMode="contain"
      />
     
    );
}
const style = StyleSheet.create({
    image: {
        height:120,
        width: "100%",
        marginTop: 20,
    },
});