import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InventoryScreen = () => {
  return (
    <View style={style.container}>
      <Text style={{color:'white'}}>Inventory Screen</Text>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default InventoryScreen;