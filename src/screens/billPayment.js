import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Divider} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const BillPayment = ({route, navigation}) =>{
    const { icon, price, fee } = route.params;
    const total =(parseFloat(price) + parseFloat(fee)).toFixed(2);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="chevron-back" size={20} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Bill Details</Text>
                <Ionicons name ="ellipsis-horizontal" size={24} color="#ffffff" />
            </View>
            
            <View style={styles.card}>
                    <View style={styles.logoWrapper}>
                       <Image source={icon} style={styles.logo} />
                    </View>
                <Text style={styles.title}>
                       You will pay Youtube Premium for one month with BCA OneKlik
                </Text>
                
                <View style={styles.row}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>${price}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Fee</Text>
                    <Text style={styles.value}>${fee}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${total}</Text>
                </View>

        
                
                <TouchableOpacity style={styles.payNow}
                onPress={(item)=> navigation.navigate("TransactionDetail", { transaction: item })}
                >
                <Text style={styles.payNowText}>Confirm and Pay</Text>
            </TouchableOpacity>
            </View>

            
        </View>
    );
};
export default BillPayment;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3D8E8A",
        maxHeight:"40%",
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        paddingTop:60,
    },
    headerText:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"700",
    },
    card: {
    maxHeight:"full",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom:400,
  },
  

  logoWrapper: {
    marginTop:20,
  width: 80,
  height: 80,
  borderRadius: 40,   
  backgroundColor: "#f3efef",
  justifyContent: "center",
  alignItems: "center",
  alignSelf:"center",
},

   logo: {
  width: 35,
  height: 35,
  resizeMode: "contain",
},

  title: {
    marginTop:40,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginLeft:30,
    marginRight:30,
    
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    margintop:20,
    marginLeft:20,
    marginRight:20,
  },

  label: {
    color: "#777",
    paddingTop:20,
  },

  value: {
    fontWeight: "600",
    paddingTop:20,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  payNow: {
    backgroundColor: "#3F8782",
    marginTop:80,
    margin: 20,
    padding: 18,
    borderRadius: 30,
     filter: "drop-shadow(0px 4px 4px #438883)"
  },

  payNowText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize:16,
  },
});