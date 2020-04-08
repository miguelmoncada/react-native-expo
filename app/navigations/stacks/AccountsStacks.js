import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount'
import LoginScreen from '../../screens/Account/Login'

const Stack = createStackNavigator();

export default function AccountsStacks() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={MyAccountScreen}/>
      <Stack.Screen name="Login"component={LoginScreen}/>
    </Stack.Navigator>
  );
}