import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../screens/Restaurants'

const Stack = createStackNavigator();

export default function RstaurantsStacks() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={RestaurantsScreen}/>
    </Stack.Navigator>
  );
}