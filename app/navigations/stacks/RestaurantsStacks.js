import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../screens/Restaurants'

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

export default function RstaurantsStacks() {
  const [lang] = useContext(LanguageContext);

  return(
    <Stack.Navigator>
      <Stack.Screen 
        name={RoutesNames.STACK_RESTAURANTS} 
        component={RestaurantsScreen}
        options={{
          title: I18n.t("restaurantsStack.restaurants", { locale: lang })
        }}
      />
    </Stack.Navigator>
  );
}