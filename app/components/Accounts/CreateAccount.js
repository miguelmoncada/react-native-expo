import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

/* BEGIN IMPORTING ROUTES NAMES */
import * as RoutesNames from "../../navigations/stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

export default function CreateAccount(props) {
  const { navigation } = props;

  const [theme] = useContext(ThemeContext);

  return (
    <Text style={style.textRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={[style.btnRegister, { color: theme.text.color }]}
        onPress={() => {
          navigation.navigate(RoutesNames.STACK_REGISTER);
        }}
      >
        Regístrarte
      </Text>
    </Text>
  );
}

const style = StyleSheet.create({
  btnRegister: {
    fontWeight: "bold"
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  }
});
