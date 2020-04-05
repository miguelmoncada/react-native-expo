import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantsScreen from '../screens/Restaurants'
import MyAccountScreen from '../screens/MyAccount'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Restaurants" 
        component={RestaurantsScreen}
        options={{      
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}
