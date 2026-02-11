import React, { useState } from "react";
import { View, Text, StyleSheet, Image , TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const paymentMethods = [
  {
    id: 1,
    title: "Bank Link",
    subtitle: "Connect your bank account to deposit & fund",
    icon: require("../assets/bank.png"),
    
  },
  {
    id: 2,
    title: "Microdeposits",
    subtitle: "Connect bank in 5-7 days",
    icon: require("../assets/vector.png"),
    
  },
  {
    id: 3,
    title: "Paypal",
    subtitle: "Connect your paypal account",
    icon: require("../assets/paypal-logo.png"),
  },
];

const AccountPayment = ({navigation}) => {
    const [activeId, setActiveId] = useState(1);
  return (
    <View style={styles.container}>
      {paymentMethods.map(item => {
        const isActive = item.id === activeId;
        return(
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          onPress={()=> setActiveId(item.id)}
          style={[
            styles.card,
            isActive && styles.activeCard,
          ]}
        >
          
          <View style={styles.iconBox}>
            <Image source={item.icon} style={styles.icon} />
          </View>

          
          <View style={styles.textBox}>
            <Text
              style={[
                styles.title,
                isActive && styles.activeTitle,
              ]}
            >
              {item.title}
            </Text>
            <Text style={[styles.subtitle, isActive && styles.activeSubtitle]}>{item.subtitle}</Text>
          </View>

         
          {item.active && (
            <View style={styles.check}>
              <Ionicons name="checkmark" size={16} color="#fff" />
            </View>
          )}
        </TouchableOpacity>
        );
       })}

       <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>
            Next 
        </Text>
       </TouchableOpacity>
    </View>
  );
};

export default AccountPayment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    marginTop:5,
    marginLeft:20,
    marginRight:20,
    borderRadius: 18,
    padding: 30,
    marginBottom: 14,
  },

  activeCard: {
    backgroundColor: "#4388831A",
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#888",
  },

  activeTitle: {
    color: "#3E9D95",
  },

  subtitle: {
    fontSize: 13,
    color: "#999",
    marginTop: 4,
  },
  activeSubtitle:{
    color: "#3E9D95",
  },

  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#3E9D95",
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    marginTop:100,
    borderRadius:30,
    padding:18,
    borderWidth:1,
    borderColor:"#408782"
  },
  btnText:{
    color:"#438883",
    textAlign:"center",
    fontWeight:"600",
    fontSize:15,
  }
});
