import React from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';


const YourApp = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>

  );
};

export default YourApp;
