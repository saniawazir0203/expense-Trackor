import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../store/slices/card";

const FundsPay = ({ navigation }) => {
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const { balance = 0 } = useSelector(state => state.cards);

  console.log("funds balance" , balance)
   const { transactionList = [] } = useSelector(
    state => state.transaction
  );

  // ✅ Calculate balance after transactions
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


  const handleFunds = () => {
    if (!amount || Number(amount) <= 0) return;

    dispatch(addBalance(Number(amount)));
    setAmount("");
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.balanceText}>
        Total Balance: ${balance.toFixed(2)}
      </Text>

      <Text style={styles.balanceAfterText}>
        After Transactions: ${totalTransactionAmount.toFixed(2)}
      </Text>
      <TextInput
        placeholder={`Current balance: ${totalTransactionAmount}`}
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor="#999"
        style={styles.inputFull}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleFunds}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FundsPay;


const styles = StyleSheet.create({
  balanceText: {
  fontSize: 18,
  fontWeight: "600",
  marginTop: 40,
  textAlign: "center",
},

balanceAfterText: {
  fontSize: 16,
  marginTop: 10,
  textAlign: "center",
  color: "#408782",
},
    inputFull: {
    width: "95%",
    height: 52,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    marginLeft:10,
    marginRight:10,
    marginTop:50,
    marginBottom:20,
  },
  button:{
    width:"60%",
    alignSelf:"center",
    marginTop:10,
    borderRadius:30,
    padding:15,
    backgroundColor:"#408782",
    
  },
  btnText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"600",
    fontSize:15,
  },
    
});