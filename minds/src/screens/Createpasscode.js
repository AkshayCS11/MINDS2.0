import { View, SafeAreaView, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Createpasscode = () => {

const [number, onChangeNumber] = React.useState(''); 


return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter 4 digit PIN to</Text>
      <Text style={styles.text}>Sign In</Text>
      <TextInput 
        onChangeText={(value)=>onChangeNumber(value)}
        value={number}
        keyboardType="numeric" 
        style={styles.input}/>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        marginTop: 200,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding:6,
        margin:20,
        width:300,
        backgroundColor: '#fff',
      },
    text:{
        color: 'black',
        fontWeight: 'medium',
        fontSize: 20
    }  
  })

export default Createpasscode;



