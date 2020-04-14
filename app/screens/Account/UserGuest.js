import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */
import I18n from '../../utils/I18n';
/* BEGIN IMPORTING ROUTES NAMES */
import {STACK_LOGIN} from "../../navigations/stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

export default function UserGuest(props) {
	const { navigation } = props;
	const [ theme, setTheme ] = useContext(ThemeContext);
	const [ lang ] = useContext(LanguageContext);

	return (
		<ThemeContext.Provider value={[ theme, setTheme ]}>
			<ScrollView style={style.viewBody} centerContent={true}>
				<Image style={style.image} source={require('../../../assets/img/user-guest.jpg')} resizeMode="contain" />
				<Text style={style.title}>{I18n.t('userGuestScreen.title', { locale: lang })}</Text>
				<Text style={style.description}>{I18n.t('userGuestScreen.description', { locale: lang })}</Text>
				<View style={style.viewBtn}>
					<Button
						buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
						containerStyle={style.btnContainer}
						title={I18n.t('userGuestScreen.buttonText', { locale: lang })}
						onPress={() => {
							navigation.navigate(STACK_LOGIN);
						}}
					/>
				</View>
			</ScrollView>
		</ThemeContext.Provider>
	);
}

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnContainer: {
    width: "70%"
  }
});
