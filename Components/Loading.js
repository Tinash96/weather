//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
// create a component
const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white',fontSize:30, }}>Loading...</Text>
        </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D82DC',
    },
    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
    },
});
//make this component available to the app
export default Loading;