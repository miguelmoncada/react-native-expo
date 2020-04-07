import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
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

function AccountsStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={MyAccountScreen}/>
      <Stack.Screen name="Login"component={LoginScreen}/>
    </Stack.Navigator>
  );
}

export default function Navigation(){
  
  return(
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
          component={AccountsStack}
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