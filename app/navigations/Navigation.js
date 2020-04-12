import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/* BEGIN IMPORTING ROUTES NAMES */
import * as RoutesNames from "../navigations/stacks/RoutesNames";
/* END IMPORTING ROUTES NAMES */

/* BEGIN IMPORTING LANGUAGES */
import I18n from "../utils/I18n";
/* END IMPORTING LANGUAGES */

/* BEGIN IMPORTING STACKS */
import AccountsStacks from "../navigations/stacks/AccountsStacks";
import RestaurantsStack from "../navigations/stacks/RestaurantsStacks";
import TopRestaurantsStack from "../navigations/stacks/TopRestaurantsStacks";
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
        initialRouteName={RoutesNames.TAB_ACCOUNT}
        tabBarOptions={{
          activeTintColor: theme.tab.color
        }}
      >
        <Tab.Screen
          name={RoutesNames.TAB_RESTAURANTS}
          component={RestaurantsStack}
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
          name={RoutesNames.TAB_TOP_RESTAURANTS}
          component={TopRestaurantsStack}
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
          name={RoutesNames.TAB_SEARCH}
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
          name={RoutesNames.TAB_ACCOUNT}
          component={AccountsStacks}
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
          name={RoutesNames.TAB_SETTINGS}
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
