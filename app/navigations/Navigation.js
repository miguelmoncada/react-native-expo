import React from 'react';
import {Icon} from 'react-native-elements';
import {createAppContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RestaurantsScreenStacks from './RestaurantsStacks';

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestaurantsScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: 'Restaurants',
      tabBarIcon: ({tintColor}) => {
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />;
      },
    }),
  },
});

export default createAppContainer(NavigationStacks);
