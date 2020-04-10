import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Validations, { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function RegisterForm(props) {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const register = async () => {
    if (!email || !password || !repeatPassword) {
      console.log("Error: Todos los campos son requeridos");
    } else {
      if (validateEmail(email)) {
        if (password !== repeatPassword) {
          console.log("Error: Las contraseñas no coinciden");
        } else {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log("Creado Usuario: " + email);
            })
            .catch(() => {
              console.log("Error al crear cuenta");
            });
        }
      } else {
        console.log("Error: Por favor ingrese un email válido");
      }
    }
  };

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <View behavior="padding" style={style.formContainer} enable>
        <Input
          placeholder="Correro Electrónico"
          containerStyle={style.inputForm}
          onChange={event => setEmail(event.nativeEvent.text)}
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
          secureTextEntry={hidePassword}
          containerStyle={style.inputForm}
          onChange={event => setPassword(event.nativeEvent.text)}
          rightIcon={
            <Icon
              type="material-community"
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={style.iconRight}
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            />
          }
        />
        <Input
          placeholder="Repetir Contraseña"
          password={true}
          secureTextEntry={hideRepeatPassword}
          containerStyle={style.inputForm}
          onChange={event => setRepeatPassword(event.nativeEvent.text)}
          rightIcon={
            <Icon
              type="material-community"
              name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={style.iconRight}
              onPress={() => {
                setHideRepeatPassword(!hideRepeatPassword);
              }}
            />
          }
        />
        <Button
          title="Registrarse"
          containerStyle={style.btnContainerRegister}
          buttonStyle={{ backgroundColor: theme.color }}
          onPress={register}
        />
      </View>
    </ThemeContext.Provider>
  );
}

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
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
