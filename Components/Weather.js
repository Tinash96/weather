//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Feather } from 'react-native';
import Loading from './loading';
import { Ionicons } from '@expo/vector-icons';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
// create a component
const Weather = () => {
    const [loading, setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState()
    const [city, setCity] = useState('')
    const api_key = "b3501170ee3a484ccf49e7335fdb26e1"
    const fetchData = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "Midrand" + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }
    const searchByCity = () => {
        console.log(city);
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])
   // const onPress = () => {
    //    if (!city) {
    //        alert('Nah')
   //     }
  //  }
    return (
        <View style={styles.container}>
            {loading ? <Loading></Loading>
                :
                <div>
                    <View style={styles.form}>
                        <View style={styles.inputCity} >
                            <TextInput style={{ color: 'white', fontSize: 25 }}  placeholder='Search city...' onChangeText={(e) => setCity(e)} />
                            <Ionicons name="search" style={styles.btn} size={30} color="black" onPress={() => searchByCity()} />
                        </View>
                    </View>
                    <Text style={{  color: 'black', fontSize: 15, fontWeight: 'bold' }}>Country:</Text>
                            <Text style={{ color: 'white', fontSize: 30, }} >
                                {(currentWeather.sys.country)}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginBottom: 100, marginTop: 100 }}>
                        <Ionicons name="location-outline" size={50} color="#E42434" />
                        <Text style={{ color: 'white', fontSize: 50 }}> {currentWeather.name} </Text>
                    </View>
                    <View style={styles.subheading}>
                        <Text style={{ color: 'white', fontSize: 25 }}>Today's weather </Text>
                        <View >
                            <Text style={{ color: 'black', fontSize: 18 }}> {new Date().toDateString()} </Text>
                            <Text style={{ color: 'black', fontSize: 18 }}> {currentWeather.weather[0].description} </Text>
                        </View>
                    </View>
                    <View style={styles.wearther}>
                        <Image style={{ width: "200px", height: "200px", }} source={{ uri: "http://openweathermap.org/img/wn/" + currentWeather.weather?.[0].icon + "@2x.png " }} />
                        <Text style={{ color: 'white', fontSize: 30, }} >
                            {(currentWeather.main.temp - 273.15).toFixed(2)}
                            <span style={{ color: '#E42434' }}>c</span>
                        </Text>
                    </View>
                    <View>
                        <View style={styles.Inlineweather}>
                            <Text style={{  color: 'black', fontSize: 15, fontWeight: 'bold' }}>Humidity:</Text>
                            <Text style={{ color: 'white', fontSize: 30, }} >
                                {(currentWeather.main.humidity)}%</Text>
                            <Text style={{  color: 'black', fontSize: 15, fontWeight: 'bold' }}>Wind:</Text>
                            <Text style={{ color: 'white', fontSize: 30, }} >
                                {(currentWeather.wind.speed)}km/h</Text>
                        </View>
                    </View>
                </div>
            }
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
        width: '100%',
        height: '100%',
        borderColor: 'white',
        borderWidth: 2,
        //marginTop: 200,
    },
    subheading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    wearther: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginTop:50,
    },
    inputCity: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        display: 'flex',
    },
    Inlineweather: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 50,
        paddingHorizontal: 15,
       paddingVertical: 15,
    },
});
//make this component available to the app
export default Weather;