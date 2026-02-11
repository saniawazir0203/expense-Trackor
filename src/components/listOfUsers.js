import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

const avatars= [
    require("../assets/1.png"),
    require("../assets/2.png"),
    require("../assets/3.png"),
    require("../assets/4.png"),
    require("../assets/profile.png"),
    require("../assets/1.png"),
    require("../assets/2.png"),
    require("../assets/3.png"),
    require("../assets/4.png"),
    require("../assets/profile.png"),
];

const ListOfUsers = () => {
    return(
        <View style={styles.safe}>
            <View style={styles.headerRow}>
                <Text style={styles.send}>Send Again</Text>
                <Text style={styles.all}>See all</Text>
            </View>
            
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.avatarRow}
            >
                {avatars.map((img, index)=>(
                    <Image 
                    key={index} 
                    source={img} 
                    style={styles.avatar} 
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ListOfUsers;
const styles = StyleSheet.create({
    headerRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        marginTop:10,
        
    },
    send:{
        fontSize:15,
        paddingLeft:20,
        fontWeight:"600",
    },
    all:{
        paddingRight:20,
        color:"#666666",
    },
    avatarRow:{
        paddingLeft:20,
        paddingRight:100,
        paddingTop:-30,
        paddingBottom:10,
        alignItems:"center",
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10,
        borderWidth:3,
        borderColor:"#fff",
        
    }
});