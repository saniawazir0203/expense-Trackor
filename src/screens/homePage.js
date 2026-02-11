import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabs from "../components/bottomTabs";
import TransactionHistory from "../components/transactionHistory";
import ListOfUsers from "../components/listOfUsers";

const HomePage = ({navigation}) =>{
    return(
        <View style={styles.safe}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Good Morning,
                </Text>
                <View style={styles.options}>
                <Text style={styles.subTitle}>
                    Sania Wazir
                </Text>
                <Ionicons name ="notifications-outline" size={24} color="#fff" style={styles.icon}/>
                </View>
            </View>
            
            <View style ={styles.topCard}>
                <View style ={styles.headerRow}>
                <Text style={styles.cardText}>Total Balance</Text>
                <Ionicons name="ellipsis-horizontal" size={24} color="#fff" style={styles.menuIcon} />
                </View>
                <Text style={styles.subTitle}>
                    $ 2,548.00
                </Text>
               {/* Income and Expenses Row */}
      <View style={styles.statsRow}>
        
        {/* Income Section */}
        <View style={styles.statItem}>
          <View style={styles.iconLabelRow}>
            <View style={styles.iconCircle}>
              <Ionicons name="arrow-down-outline" size={15} color="#fff"/>
            </View>
            <Text style={styles.labelMedium}>Income</Text>
          </View>
          <Text style={styles.statAmount}>$ 1,840.00</Text>
        </View>

        {/* Expenses Section */}
        <View style={styles.statItem}>
          <View style={styles.iconLabelRow}>
            <View style={styles.iconCircle}>
              <Ionicons name="arrow-up-outline" size={15} color="#fff"/>
            </View>
            <Text style={styles.labelMedium}>Expenses</Text>
          </View>
          <Text style={styles.statAmount}>$ 284.00</Text>
        </View>

      </View>
        </View>
        <TransactionHistory navigation={navigation} />
        <ListOfUsers />
        {/* <BottomTabs navigation={navigation} /> */}
        </View>
    );
};
export default HomePage;

const styles= StyleSheet.create({
    safe:{
        flex:1,
        backgroundColor:"#fff",
        
    },
    container:{
        flex:3,
        backgroundColor:"#3F8782",
        maxHeight:"30%",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    title:{
        color:"#fff",
        marginTop:60,
        marginLeft:20,
    },
    options:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    subTitle:{
        color:"#fff",
        fontSize:25,
        fontWeight:"500",
        marginLeft:20,
       
    },
    icon:{
        marginRight:30,
        color:"#fff",
        backgroundColor:"#FFFFFF0F",
        borderRadius:20,
        padding:8,
    },
    topCard:{
        backgroundColor:"#2F7E79",
        borderRadius:20,
        maxWidth:"90%",
        height:220,
        marginLeft:20,
        marginTop:-140,
    },
    cardText:{
        color:"#fff",
        paddingLeft:20,
    },
    headerRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
    },
    menuIcon:{
        color:"#fff",
        borderRadius:10,
        fontSize:25,
        marginRight:20,
    },

    statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginTop:55,
    marginRight:20,
  },
  statItem: {
    flexDirection: 'column',
  },
  iconLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  iconCircle: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  textIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelMedium: {
    color: '#E0F2F1',
    fontSize: 14,
    opacity: 0.9,
  },
  statAmount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 4,
  },
});