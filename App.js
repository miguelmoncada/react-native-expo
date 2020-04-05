import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './app/navigations/Navigation'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}