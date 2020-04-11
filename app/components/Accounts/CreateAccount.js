import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function CreateAccount(props) {
  const { navigation } = props;

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Text style={style.textRegister}>
        ¿Aun no tienes una cuenta?{" "}
        <Text
          style={[style.btnRegister, { color: theme.color }]}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Regístrarte
        </Text>
      </Text>
    </ThemeContext.Provider>
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
