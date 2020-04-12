import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Validations, { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

import InputText from "../../components/InputText";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [theme] = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const register = async () => {
    if (!email || !password || !repeatPassword) {
      setError(true);
      setErrorMessage("Campo requerido");
    } else {
      if (validateEmail(email)) {
        setError(false);
        if (password !== repeatPassword) {
          console.log("Error: Las contraseñas no coinciden");
        } else {
          setError(false);
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log("Creado Usuario: " + email);
            })
            .catch(e => {
              toastRef.current.show("Error al crear cuenta")
            });
        }
      } else {
        setError(false);
        console.log("Error: Por favor ingrese un email válido");
      }
    }
  };

  return (
    <View
      style={[styles.formContainer, { backgroundColor: theme.formContainer }]}
    >
      <InputText
        label="Correo Electrónico"
        text={email}
        isActive={true}
        keyboardType="email-address"
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <InputText
        label="Contraseña"
        text={password}
        isActive={true}
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setPassword(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <InputText
        label="Repetir Contraseña"
        text={repeatPassword}
        isActive={true}
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setRepeatPassword(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
        onPress={register}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10
  },
  btnContainerRegister: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10, 
    width: "95%"
  }
});
