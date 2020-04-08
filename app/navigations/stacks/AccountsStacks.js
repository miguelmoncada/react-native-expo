import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount'
import LoginScreen from '../../screens/Account/Login'
import RegisterScreen from '../../screens/Account/Register'

const Stack = createStackNavigator();

export default function AccountsStacks() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={MyAccountScreen}/>
      <Stack.Screen name="Login"component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
  );
}