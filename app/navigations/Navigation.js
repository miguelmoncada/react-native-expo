import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RestaurantsScreen from '../screens/Restaurants'
import TopRestaurantsScreen from '../screens/TopRestaurants'
import SearchScreen from '../screens/Search'
import MyAccountScreen from '../screens/Account/MyAccount'
import LoginScreen from '../screens/Account/Login'

import CreateStacks from './CreateStacks'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RestaurantsStack() {
  return( <CreateStacks name="Restaurants" component={RestaurantsScreen} /> );
}

function TopRestaurantsStack() {
  return( <CreateStacks name="Top 5 Restaurants" component={TopRestaurantsScreen} /> );
}

function SearchStack() {
  return( <CreateStacks name="Search" component={SearchScreen} /> );
}

function MyAccountStack() {
  return( <CreateStacks name="My Account" component={MyAccountScreen} /> );
}

function LoginStack() {
  return( <CreateStacks name="Login" component={LoginScreen} /> );
}

export default function Navigation(){
    
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="My Account"
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
          name="My Account" 
          component={MyAccountStack}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Login" 
          component={LoginStack}
          options={{      
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}