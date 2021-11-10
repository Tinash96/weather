import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Weather from './components/weather';
export default function App() {
  return (
    <View style={styles.container}>
     <Weather> </Weather>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
image:{
  flex:1,
  resizeMode:"cover",
  justifyContent:"center"
}
});
