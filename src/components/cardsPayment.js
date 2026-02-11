import React, { useState, useEffect } from "react";
import { Image, TextInput, Alert } from "react-native";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../store/slices/card";
import uuid from "react-native-uuid";


const CardPayment = ({navigation}) =>{
    
    const {card: savedCard} = useSelector(
    (state => state.cards )
    );
    console.log("savedCard",savedCard)
    const dispatch= useDispatch();

    const [name, setName] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [CVC, setCVC] = useState("");
    const [expDate, setExpDate] = useState("");
    const [zip, setZip] = useState("");

    useEffect(() => {
    if (savedCard.name) {
      setName(savedCard.name);
      setCardNo(savedCard.cardNo);
      setCVC(savedCard.CVC);
      setExpDate(savedCard.expDate);
      setZip(savedCard.zip);
    }
  }, [savedCard]);
        
    console.log("savedcard",savedCard)

    const handleCardsList = () =>{
      //  if(!name || !cardNo || !CVC || !expDate || !zip) {
      //   Alert.alert("Please enter all fields");
      //   return;
      //  }
        
        const payloadOBJ = {
        id: savedCard?.id || uuid.v4(),
        name,
        cardNo,
        CVC,
        expDate,
        zip,
    }
        console.log("payloadobj", payloadOBJ)

        dispatch(addCard(payloadOBJ));
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <View style={styles.img}>
            <Image 
               source={require("../assets/card.png")}
               style={styles.img}
               resizeMode="contain"
            />
            </View>
            <Text style={styles.title}>
                Add your debit Card
            </Text>
            <Text style={styles.subtitle}>
                This card must be connected to a bank account under your name 
            </Text>
            <View style={styles.form}>
                <TextInput 
                       placeholder="Name on Card"
                       value={name}
                       onChangeText={setName}
                       placeholderTextColor="#999"
                       style={styles.inputFull}
                    />
                <View style={styles.row}>
                    <TextInput 
                    value={cardNo}
                       onChangeText={setCardNo}
                       placeholder="DEBIT CARD NUMBER"
                       placeholderTextColor="#999"
                       style={styles.FirstHalf}
                       keyboardType="numeric"
                    />
                    <TextInput 
                       value={CVC}
                       onChangeText={setCVC}
                       placeholder="CVC"
                       placeholderTextColor="#999"
                       style={styles.secondHalf}
                       keyboardType="numeric"
                    />
                </View>

                <View style={styles.row}>
                    <TextInput
                       value={expDate}
                       onChangeText={setExpDate}
                       placeholder="EXPIRATION MM/YY"
                       placeholderTextColor="#999"
                       style={styles.FirstHalf}
                       keyboardType="numeric"
                    />
                    <TextInput
                       value={zip}
                       onChangeText={setZip}
                       placeholder="ZIP"
                       placeholderTextColor="#999"
                       style={styles.secondHalf}
                       keyboardType="numeric"
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleCardsList}>
                    <Text style={styles.btnText}>
                        Submit 
                    </Text>
            </TouchableOpacity>
        </View>
    );
};
export default CardPayment;

const styles = StyleSheet.create({
    img:{
        alignSelf:"center",
        width:300,
        height:300,
    },
    title:{
        fontSize:20,
        fontWeight:"700",
        paddingLeft:30,
    },
    subtitle:{
        paddingLeft:30,
        paddingRight:40,
        fontSize:15,    
        fontWeight:"500",
        color:"#666666",
    },
    form: {
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3E9D95",
    marginBottom: 6,
    marginLeft:20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    marginTop:20,
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
    marginTop:20,
    marginBottom:20,
  },

  FirstHalf: {
    width: "60%",
    height: 52,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    marginLeft:10,
    marginRight:20,
    marginTop:-15,
  },
  secondHalf: {
    width: "30%",
    height: 52,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 14,
    marginRight:20,
    marginTop:-15,
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
  }
});