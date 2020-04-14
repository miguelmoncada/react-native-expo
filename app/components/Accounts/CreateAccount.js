import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */
import I18n from '../../utils/I18n';

/* BEGIN IMPORTING ROUTES NAMES */
import {STACK_REGISTER} from "../../navigations/stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

export default function CreateAccount(props) {
  const { navigation } = props;

  const [theme] = useContext(ThemeContext);
  const [ lang ] = useContext(LanguageContext);

  return (
    <Text style={style.textRegister}>
		    {I18n.t('loginScreen.noAccountText', { locale: lang })}{' '}
			<Text
				style={[ style.btnRegister, { color: theme.text.color } ]}
				onPress={() => {
					navigation.navigate(STACK_REGISTER);
				}}
			>
				{I18n.t('loginScreen.signUp', { locale: lang })}
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
