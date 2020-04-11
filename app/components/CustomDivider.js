import React, {useState, useContext} from 'react'
import { StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

/* BEGIN IMPORTING THEME CONTEXT */
import CustomTheme from "../styles/CustomThemes";
import { ThemeContext } from "../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function CustomDivider() {

    const [theme, setTheme] = useContext(ThemeContext);
    
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Divider style={[style.divider, {backgroundColor: theme.color}]} /> 
        </ThemeContext.Provider>
    );
}

const style = StyleSheet.create({
    divider: {
        margin: 40,
    }
});