import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Validations, { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";
import InputText from "../../components/InputText";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */
import I18n from "../../utils/I18n";
import { validate } from "../../helpers/Validation";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [theme] = useContext(ThemeContext);
  const [lang] = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfimation] = useState("");
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const register = async () => {
    let form = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    let errors = await validate(form, "register");
    if (Object.keys(errors).length > 0) {
      setError(true);
      setErrorMessage(errors);
    } else {
      setError(false);
      setErrorMessage();
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          toastRef.current.show("Creado Usuario: " + email);
        })
        .catch(e => {
          toastRef.current.show("Error al crear cuenta");
        });
    }
  };

  return (
    <View
      style={[styles.formContainer, { backgroundColor: theme.formContainer }]}
    >
      <InputText
        label={I18n.t("registerScreen.email", { locale: lang })}
        text={email}
        who={"email"}
        isActive={true}
        keyboardType="email-address"
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <InputText
        label={I18n.t("registerScreen.password", { locale: lang })}
        text={password}
        who={"password"}
        isActive={true}
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setPassword(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <InputText
        label={I18n.t("registerScreen.repeatPassword", { locale: lang })}
        text={password_confirmation}
        isActive={true}
        who={"password_confirmation"}
        isError={isError}
        errorMessage={errorMessage}
        onChange={e => setPasswordConfimation(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <Button
        title={I18n.t("registerScreen.signUp", { locale: lang })}
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
