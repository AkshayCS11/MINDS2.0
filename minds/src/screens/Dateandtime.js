import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React,{useState, useEffect} from 'react';
import moment from 'moment';

const Dateandtime = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect (()=> {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();

        var date = moment().utcOffset('+05:30').format('LL');
        setCurrentDate(date);
    },[])

  return (
    <View>
      <Text style={styles.header}>{currentDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: { 
        fontWeight: 'bold',
        fontSize: 17,
        color:'#000000',
        marginRight: 15,
        marginTop: 15
    }
  })

export default Dateandtime;