import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, Alert} from "react-native";

const GetStarted = ({navigation}) =>{
    
    const handleGetStarted=()=>{
        navigation.navigate("Home Page");
    }

    return(
        <View style={styles.safe}>
            <ImageBackground
                 source={require("../assets/bg.png")}   
                   style={styles.container}
                   resizeMode="cover"
            >
                <View style ={styles.character}>
              <Image
               source={require("../assets/user.png")}
               style={styles.image}
              />

              <Image
              source={require("../assets/left.png")}
              style={styles.leftHand}
              />

              <Image
              source={require("../assets/right.png")}
              style={styles.rightHand}
              />

              </View>
            </ImageBackground>
        <View >
        <Text style={styles.headerText}>
            Spend Smarter 
        </Text>
        <Text style={styles.subTitile}>
            Save More 
        </Text>
              
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
             </TouchableOpacity>
             <Text style={styles.bottomText}>
                Already Have Account? Login in
             </Text>
        </View>
    </View>
    );
};

export default GetStarted;
const styles = StyleSheet.create({
    safe:{
        flex:1,
        backgroundColor:"#fff",
    },
    container:{
        flex:1,
        backgroundColor:"#fff",
        maxHeight:"60%",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        marginTop:160,
        width:380,
        height:450,
        resizeMode:"contain",
        
    },
    character:{
        position:"relative",
        width:350,
        height:450,
        alignItems:"center",
        justifyContent:"center",
    },
    leftHand:{
        position:"absolute",
        top:90,
        left:40,
        width:90,
        height:80,
        resizeMode:"contain",
    },
    rightHand:{
        position:"absolute",
        top:140,
        right:30,
        width:90,
        height:80,
        resizeMode:"contain",
    },
    
    headerText:{
        marginTop:45,
        marginLeft:60,
        marginRight:10,
        fontSize:40,
        fontWeight:"800",
        color:"#438883",
        justifyContent:"center",
        alignItems:"center",
    },
    subTitile:{
        marginLeft:90,
        marginRight:10,
        fontSize:40,
        fontWeight:"800",
        color:"#438883",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        backgroundColor:"#3F8782",
        borderRadius:28,
        justifyContent:"center",
        maxWidth:"80%",
        alignItems:"center",
        padding:20,
        marginTop:30,
        marginLeft:40,
        boxShadow:"0px 0px 3px 0px"
    },
    buttonText:{
        color:"#fff",
        fontSize:15,
        fontWeight:"500",
    },
    bottomText:{
        marginTop:25,
        justifyContent:"center",
        textAlign:"center",
    }

});