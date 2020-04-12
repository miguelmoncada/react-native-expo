import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/* BEGIN IMPORTING ROUTES NAMES */
import { 
  TAB_ACCOUNT, 
  TAB_RESTAURANTS, 
  TAB_TOP_RESTAURANTS, 
  TAB_SEARCH, 
  TAB_SETTINGS 
} from "./stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from "../utils/I18n";
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING STACKS */
import AccountStacks from "./stacks/AccountStacks";
import RestaurantStack from "./stacks/RestaurantStacks";
import TopRestaurantStack from "./stacks/TopRestaurantsStacks";
import SearchStack from "../navigations/stacks/SearchStacks";
import SettingsStacks from "../navigations/stacks/SettingsStacks";
/* END IMPORTING STACKS */

/* BEGIN IMPORTING THEME CONTEXT */
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */

export default function Navigation(props) {
  const [theme] = useContext(ThemeContext);
  const [lang] = useContext(LanguageContext);

  const Tab = createBottomTabNavigator();

  return (
    /* BEGIN CREATE BOTTOM TABS*/
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={TAB_ACCOUNT}
        tabBarOptions={{
          activeTintColor: theme.tab.color
        }}
      >
        <Tab.Screen
          name={TAB_RESTAURANTS}
          component={RestaurantStack}
          options={{
            title: I18n.t("navigationTabs.restaurants", {locale: lang}),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name={TAB_TOP_RESTAURANTS}
          component={TopRestaurantStack}
          options={{
            title: I18n.t("navigationTabs.topRestaurants", {locale: lang}),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="star-circle-outline"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name={TAB_SEARCH}
          component={SearchStack}
          options={{
            title: I18n.t("navigationTabs.search", {locale: lang}),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cloud-search-outline"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name={TAB_ACCOUNT}
          component={AccountStacks}
          options={{
            title: I18n.t("navigationTabs.account", {locale: lang}),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name={TAB_SETTINGS}
          component={SettingsStacks}
          options={{
            title: I18n.t("navigationTabs.settings", {locale: lang}),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    /* END CREATE BOTTOM TABS*/
  );
}
