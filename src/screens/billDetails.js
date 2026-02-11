import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Divider} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import { addtransaction } from "../store/slices/transaction";

const BillDetails = ({route, navigation}) =>{
    const [selectedMethod, setSelectedMethod] = useState("card");
    const {title, date, icon, price, fee } = route.params;
    const total =(parseFloat(price) + parseFloat(fee)).toFixed(2);

    const dispatch = useDispatch();

    const handlePay = () => {
      dispatch(
      addtransaction({
      id: uuid.v4(),
      title: title,
      amount: price,
      date: new Date().toISOString(),
      type: parseFloat(price) > 0 ? "credit" : "debit",
      icon: icon,
      status: "paid",
    })
  );

  navigation.navigate("BillPayment", {icon, price, fee});
};


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
                <View style={styles.headerSection}>
                    <View style={styles.logoWrapper}>
                       <Image source={icon} style={styles.logo} />
                    </View>
                    <Text style={styles.title}>
                      {title}
                    </Text>
                </View>
                <Text style={styles.date}>
                       {date}
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

                <Text style={styles.methodTitle}>Select Payment Method</Text>
                <TouchableOpacity 
                  style={[
                       styles.method,
                       selectedMethod === "card" && styles.methodActive
                    ]}
                    onPress={() => setSelectedMethod("card")}
                    >
                    <Ionicons name ="card" size={24} color="#438883" />
                    <Text style={styles.methodText}>Debit Card</Text>
                    <Ionicons
                     name={
                        selectedMethod === "card" 
                        ? "radio-button-on"
                        : "radio-button-off"
                        }
                         size={20} color = "#438883" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                     styles.method,
                     selectedMethod === "paypal" && styles.methodActive 
                    ]}
                    onPress={()=> setSelectedMethod("paypal")}
                >
                    <Ionicons name ="logo-paypal" size={24} color="#438883" />
                    <Text style={styles.methodText}>Paypal</Text>
                    <Ionicons 
                    name = {
                        selectedMethod === "paypal"
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={24}
                    color ="#438883"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.payNow} onPress={handlePay}>
                <Text style={styles.payNowText}>Pay Now</Text>
            </TouchableOpacity>
            </View>

            
        </View>
    );
};
export default BillDetails;
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
    paddingBottom:200,
  },
  headerSection:{
    flexDirection:"row",
  },

  logoWrapper: {
  width: 70,
  height: 70,
  borderRadius: 35,   
  backgroundColor: "#f3efef",
  justifyContent: "center",
  alignItems: "center",
  marginRight:20,
  marginLeft:20,
},

   logo: {
  width: 35,
  height: 35,
  resizeMode: "contain",
},

  title: {
    marginTop:15,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    
  },

  date: {
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
    marginLeft:10,
  
    marginTop:-20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  label: {
    color: "#777",
  },

  value: {
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  methodTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    fontSize:18,
  },

  methodActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECF9F8",
    padding: 25,
    borderRadius: 15,
    justifyContent: "space-between",
  },

  method: {
    backgroundColor:"#FAFAFA",
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    borderRadius: 15,
    justifyContent: "space-between",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#eee",
  },

  methodText: {
    flex: 1,
    marginLeft: 10,
  },

  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  payNow: {
    backgroundColor: "#438883",
    marginTop:80,
    margin: 20,
    padding: 20,
    borderRadius: 30,
    filter: "drop-shadow(0px 4px 4px #438883)"
  },

  payNowText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
    fontSize:15,
  },
});