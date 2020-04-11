import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

/* BEGIN IMPORTING THEME CONTEXT */
import CustomTheme from "../../styles/CustomThemes";
import { ThemeContext } from "../../context/ThemeContext";
/* END IMPORTING THEME CONTEXT */

export default function SelectThemes() {

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Text style={style.title}>Selecciona un Tema:</Text>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: CustomTheme.success.color}}
            containerStyle={style.btnContainer}
            title="Success"
            onPress={() => setTheme(CustomTheme.success)}
          />
        </View>
        <View style={style.viewBtn}>
          <Button
            buttonStyle={{backgroundColor: CustomTheme.primary.color}}
            containerStyle={style.btnContainer}
            title="Primary"
            onPress={() => setTheme(CustomTheme.primary)}
          />
        </View>
    </ThemeContext.Provider>
  );
}

const style = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20
  },
  btnContainer: {
    width: "70%"
  }
});
