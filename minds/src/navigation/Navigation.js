import React from 'react';
import { View, Text } from 'react-native'
import LoginScreen from '../screens/LoginScreen';
import InventoryScreen from '../screens/InventoryScreen';
import Homepage from '../screens/Homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
  <Stack.Navigator initialRouteName="Log In">
    <Stack.Screen options={{headerShown: false}} name="Log In" component={LoginScreen} />
    <Stack.Screen options={{headerShown: false}} name="Home" component={Homepage} />
    <Stack.Screen options={{headerShown: false}} name="Inventory" component={InventoryScreen} />
  </Stack.Navigator>
  )
}

export default Navigation;