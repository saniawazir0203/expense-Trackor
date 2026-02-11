import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TopSpending = ()=>{
    const [activeIndex, setActiveIndex] = useState(null);

    const listOfSpending = [
        {title: "StarBucks", value: -1500, date: new Date("01-10-2022"), image: require("../assets/starBucks.png")},
        {title: "StarBucks", value: -1500, date: new Date("02-12-2022"), image: require("../assets/profile.png")},
        {title: "StarBucks", value: -1500, date: new Date("03-3-2022"), image: require("../assets/youtube.png")},


    ];

    const renderItem = ({item, index}) =>{
        const isActive = activeIndex === index;
        return(
            <TouchableOpacity 
            style={[
                styles.row,
                isActive && styles.activeRow,
            ]}
            onPress={() => setActiveIndex(index)}
            activeOpacity={0.8}
            >
            
                <Image source={item.image} style={styles.icon} />
                
                <View style={styles.textContainer}>
                    <Text style={[styles.title, isActive && styles.activeTitle]}>{item.title}</Text>
                    <Text style={[styles.date, isActive && styles.activeDate]}>
                        {item.date.toDateString()}
                    </Text>
                </View>
                <Text style={[styles.value, isActive && styles.activeValue]}>
                    $ {item.value}
                </Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style = {styles.container}>
            <View style={styles.spendingRow}>
                <Text style={styles.spendingText}>Top Spending</Text>
                <Ionicons name ="funnel" size={24} color="#666666" />
             </View>
             
             <FlatList 
             data={listOfSpending}
             keyExtractor={(item, index) => index.toString()}
             renderItem={renderItem}
             showsVerticalScrollIndicator = {false}
             />
        </View>
    );
};
export default TopSpending;
const styles = StyleSheet.create({
    spendingRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
  },
  spendingText:{
    fontSize:18,
    fontWeight:"600"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#F5F5F5",
  },

  activeRow: {
    backgroundColor: "#29756F",
    filter: "drop-shadow(0px 5px 5px #438883)"
  },

  icon: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },

  activeTitle: {
    color: "#FFFFFF",
  },

  date: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  activeDate: {
    color: "#E0E0E0",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
  },

  activeValue: {
    color: "#FFFFFF",
  },
});
