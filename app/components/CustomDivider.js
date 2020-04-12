import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

/* BEGIN IMPORTING THEME CONTEXT */
import CustomTheme from "../styles/ExportThemes";
import { ThemeContext } from "../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function CustomDivider() {
  const [theme] = useContext(ThemeContext);

  return <Divider style={[style.divider, { backgroundColor: theme.divider.backgroundColor }]} />;
}

const style = StyleSheet.create({
  divider: {
    margin: 40
  }
});
