import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../../screens/Account/MyAccount";
import LoginScreen from "../../screens/Account/Login";
import RegisterScreen from "../../screens/Account/Register";

/* BEGIN IMPORTING ROUTES NAMES */
import * as RoutesNames from "../../navigations/stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from "../../utils/I18n";
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */

const Stack = createStackNavigator();

export default function AccountsStacks() {
  const [lang] = useContext(LanguageContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RoutesNames.STACK_MY_ACCOUNT}
        component={MyAccountScreen}
        options={{
          title: I18n.t("accountsStack.myAccount", { locale: lang })
        }}
      />
      <Stack.Screen
        name={RoutesNames.STACK_LOGIN}
        component={LoginScreen}
        options={{
          title: I18n.t("accountsStack.login", { locale: lang })
        }}
      />
      <Stack.Screen
        name={RoutesNames.STACK_REGISTER}
        component={RegisterScreen}
        options={{
          title: I18n.t("accountsStack.register", { locale: lang })
        }}
      />
    </Stack.Navigator>
  );
}
