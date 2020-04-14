import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

/* BEGIN IMPORTING THEME CONTEXT */
import CustomTheme from "../../styles/ExportThemes";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import I18n from '../../utils/I18n'
/* END IMPORTING THEME CONTEXT */

export default function SelectThemes() {

  const [theme] = useContext(ThemeContext);
  const [lang, setLang] = useContext(LanguageContext);

  return (
		<LanguageContext.Provider value={[ lang, setLang ]}>
			<Text style={style.title}>{I18n.t('settingStack.selectLanguage', { locale: lang })}</Text>
			<View style={style.viewBtn}>
				<Button
					buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
					containerStyle={style.btnContainer}
					title={I18n.t('settingStack.englishBtn', { locale: lang })}
					onPress={() => setLang('en')}
				/>
			</View>
			<View style={style.viewBtn}>
				<Button
					buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
					containerStyle={style.btnContainer}
					title={I18n.t('settingStack.spanishBtn', { locale: lang })}
					onPress={() => setLang('es')}
				/>
			</View>
		</LanguageContext.Provider>
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