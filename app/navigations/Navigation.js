import React , { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* BEGIN IMPORTING STACKS */
import AccountsStacks from '../navigations/stacks/AccountsStacks'
import RestaurantsStack from '../navigations/stacks/RestaurantsStacks'
import TopRestaurantsStack from '../navigations/stacks/TopRestaurantsStacks'
import SearchStack from '../navigations/stacks/SearchStacks'
import SettingsStacks from '../navigations/stacks/SettingsStacks'
/* END IMPORTING STACKS */

/* BEGIN IMPORTING STACKS */
import ThemeContext from '../context/ThemeContext'
import ThemesColor from '../components/CustomStyleSheet'
/* END IMPORTING STACKS */


export default function Navigation(){
  
  const Tab = createBottomTabNavigator();  

  return(
    /* BEGIN CREATE BOTTOM TABS*/
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accounts"
        tabBarOptions={{
          activeTintColor: "#00a680",
        }}
      >
        <Tab.Screen 
          name="Restaurants" 
          component={RestaurantsStack}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="Top 5 Restaurants" 
          component={TopRestaurantsStack}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-circle-outline" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="Search" 
          component={SearchStack}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cloud-search-outline" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen
          name="Accounts" 
          component={AccountsStacks}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Settings" 
          component={SettingsStacks}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    /* END CREATE BOTTOM TABS*/
  );
}