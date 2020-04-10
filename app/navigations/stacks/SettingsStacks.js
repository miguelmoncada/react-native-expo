
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../screens/Settings'

const Stack = createStackNavigator();

export default function SettingsStacks() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  );
}