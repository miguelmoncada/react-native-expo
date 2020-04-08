import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function CustomViewContainer(props) {
    return (
        <View style={style.viewContainer}>
            {props.children}
        </View>
    );
}

const style = StyleSheet.create({
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
});
