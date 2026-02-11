import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopSpending from "../components/Topspending";

const screenWidth = Dimensions.get("window").width;

const Statistics = ({navigation}) =>{
    const [activeTab, setActiveTab] = useState("Day");

    const Tabs = ["Day", "Week", "Month", "Year"];

    const chartData = {
        labels:
        [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun"
        ],
        datasets: 
        [
            {
                data:[500, 900, 1230, 800, 1100, 950],
                strokeWidth:2,
            },
        ],
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="chevron-back" size={20} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Statistics</Text>
                <Ionicons name ="download-outline" size={24} color="#000000" />
            </View>

            <View style={styles.tabContainer}>
                {Tabs.map((tab)=>(
                    <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        activeTab=== tab && styles.activeTab,
                    ]}
                    onPress={()=> setActiveTab(tab)}
                    >
                        <Text 
                        style={[
                            styles.tabText,
                            activeTab === tab && styles.activeTabText,
                        ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>Expense</Text>
                    <Ionicons name="chevron-down" size={16} />
            </View>
            
            <LineChart 
            data ={chartData}
            width={screenWidth + 40}
            height={220}
            bezier
            chartConfig={{
                backgroundColor:"#ffffff",
                backgroundGradientFrom:"#ffffff",
                backgroundGradientTo:"#ffffff",
                decimalPlaces:0,
                color:(opacity = 1)=> `rgba(56, 142, 129, ${opacity})`,
                labelColor:() =>"#888",
                propsForDots:{
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#388e81",
                },
            }}
            style={styles.chart}
            />
            <TopSpending />
            
        </View>
    );
};
export default Statistics

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        paddingTop:40,
    },
    headerText:{
        color:"#000",
        fontSize:16,
        fontWeight:"700",
    },

    tabContainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginVertical: 12,
    paddingLeft:20,
    paddingRight:20,
    },

    tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 8,
    backgroundColor: "#f2f2f2",
   },

  activeTab: {
    backgroundColor: "#388e81",
  },

  tabText: {
    color: "#666",
    fontSize: 14,
  },

  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },

  dropdown: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#666666",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 16,
    marginRight:20,
  },

  dropdownText: {
    marginRight: 6,
    color: "#666666",
  },

  chart: {
    borderRadius: 16,
  },
  

});