/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";

const SplashScreen = ({navigation}) => {


    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.replace("Get Started")
        },1000);
        return()=> clearInterval(timer);
    }, [navigation]);

    return(
        <View style ={styles.container}>
        <Text style={styles.text}>
        mono
        </Text>
        </View>
    );
};
export default SplashScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3F8782",
    },
    text:{
        color:"#fff",
        fontSize:40,
        fontWeight:"700",
        justifyContent:"center",
        alignItems:"center",
    },
});
