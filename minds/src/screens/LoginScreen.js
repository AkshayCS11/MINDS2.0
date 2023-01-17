import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import Createpasscode from './Createpasscode';

const LoginScreen = () => {
  return (
        <>
        <Surface style={styles.header}>
          <Text style={styles.heading}>Enter Passcode</Text>
        </Surface>
        <Createpasscode/>
        </>
)
}

const styles = StyleSheet.create({
  header: { 
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#006bb3'
  },
  heading:{
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'flex-end',
    alignItems: 'center',
    color:'#fff',
    marginLeft: 130
  }
})



export default LoginScreen;