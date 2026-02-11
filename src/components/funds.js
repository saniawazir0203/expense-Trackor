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
  const {balance} = useSelector(state => state.cards);

  console.log("funds balance" , balance)
  

  const handleFunds = () => {
    if (!amount || Number(amount) <= 0) return;

    dispatch(addBalance(Number(amount)));
    setAmount("");
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder={`Current balance: ${balance}`}
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