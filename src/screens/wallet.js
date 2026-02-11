import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TransactionHistory from "../components/transactionHistory";
import UpcomingBills from "../components/upcomingBills";
import { useSelector } from "react-redux";

const WalletScreen = ({navigation}) =>{
    const [activeTab, setActiveTab] = useState("Transaction");
    const { balance = 0 } = useSelector(state => state.cards);
    
    const { transactionList = [] } = useSelector(
    state => state.transaction
  );
   const totalTransactionAmount = transactionList.reduce(
    (sum, item) => {
      // Only subtract debit transactions
      if (item.type === "credit") {
        return sum + Number(item.amount);
      }
      return sum;
    },
    0
  );


console.log("totalTransactionAmount", totalTransactionAmount);

  // ✅ Final balance
  const finalBalance = balance - totalTransactionAmount;

  console.log("finalBalance", finalBalance);


    return(
        <View style={styles.mainContainer}>
           <View style={styles.headerBackground}>
               <View style={styles.headerRow}>
                   <TouchableOpacity onPress={() => navigation?.goBack()}>
                       <Ionicons name="chevron-back" size={24} color="#fff" />
                   </TouchableOpacity>

                    <Text style={styles.headerTitle}>Wallet</Text>

                    <View style={styles.notificationContainer}>
                       <Ionicons name="notifications-outline" size={24} color="#fff" />
                   </View>
              </View>
           </View>

           <View style={styles.body}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            >
            <View style={styles.headerText}>
                <Text style={styles.title}>
                    Total Balance
                </Text>
                <Text style={styles.subtitle}>
                    ${finalBalance.toFixed(2)}

                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.add} onPress={()=> navigation.navigate("WalletPayment")}>
                    <Ionicons name ="add" size={20} color="#408782" style={styles.iconbg} />
                    <Text style={styles.iconText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add}>
                    <Ionicons name ="qr-code-outline" size={20} color="#408782" style={styles.iconbg} />
                    <Text style={styles.iconText}>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add}>
                    <Ionicons name ="paper-plane" size={20} color="#408782" style={styles.iconbg} />
                    <Text style={styles.iconText}>Send</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                   style={[styles.tab, activeTab === "Transaction" && styles.activeTab]}
                   onPress={()=>setActiveTab("Transaction")}
                >
                    <Text style={[styles.tabText, activeTab === "Transaction" && styles.activeTabText]}>
                        Transaction
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={[styles.tab, activeTab === "Upcoming" && styles.activeTab]}
                   onPress={()=>setActiveTab("Upcoming")}
                >
                    <Text style={[styles.tabText, activeTab === "Upcoming" && styles.activeTabText]}>
                        Upcoming Bills
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {activeTab === "Transaction" ? (
                    <TransactionHistory/>
                ) : (
                    <UpcomingBills navigation={navigation} />
                )}
                </ScrollView>
            </ScrollView>
           </View>
        </View>
    );
};
export default WalletScreen; 
const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    backgroundColor: "#3E9D95",
    height: 200,
    borderBottomLeftRadius: 100, 
    borderBottomRightRadius: 100,
    transform: [{ scaleX: 1.5 }], 
    alignItems: "center",
  },
  headerRow: {
    transform: [{ scaleX: 0.67 }], 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 50,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  notificationContainer: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 8,
    borderRadius: 10,
  },
  headerText:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:30,
  },
  title:{
    fontSize:15,
    color:"#666666",
  },
  subtitle:{
    paddingTop:6,
    fontSize:30,
    fontWeight:"700",
    color:"#222222"
  },


body:{
   backgroundColor:"#fff",
   zIndex:1,
   marginTop:-50,
   borderTopLeftRadius:40,
   borderTopRightRadius:40,
},
  buttons:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:40,
    paddingLeft:100,
    paddingRight:100,
  },
  iconbg:{
    borderWidth:1,
    borderColor:"#408782",
    borderRadius:30,
    padding:13,
  },
  iconText:{
    paddingTop:10,
    paddingLeft:15,
  },
  tabContainer: {
    marginTop:50,
    flexDirection: "row",
    backgroundColor: "#F4F6F6",
    borderRadius: 25,
    padding: 5,
    marginLeft:20,
    marginRight:20,
    
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#222",
    fontWeight: "700",
  },
});
