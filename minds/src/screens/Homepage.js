import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import Dateandtime from './Dateandtime';

const Homepage = () => {
  return (
        <>
        <Surface style={styles.header}>
          <Text style={styles.heading}>Home</Text>
        </Surface>
        <View style={styles.container}>
        <Text style={styles.user}>Welcome, John Smith</Text>
        <Dateandtime/>
       </View>
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
    marginLeft: 180
  },
  user:{
    fontWeight: 'bold',
    fontSize: 17,
    color:'#000000',
    margin: 15,
  },
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex:1,
  }
})



export default Homepage;