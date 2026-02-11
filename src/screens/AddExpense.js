import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/slices/expense";
import uuid from "react-native-uuid";

const categories = [
  {
    id: "netflix",
    name: "Netflix",
    icon: require("../assets/netflix.png"),
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: require("../assets/youtube.png"),
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: require("../assets/payPal.png"),
  },
  {
    id: "upwork",
    name: "Upwork",
    icon: require("../assets/upwork.png"),
  },
  {
    id: "starbucks",
    name: "Starbucks",
    icon: require("../assets/starBucks.png"),
  },
];
const AddExpenseScreen = ({ navigation }) => {
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleExpenseList = () => {
    if (!category || !amount) return;

    const payloadObj = {
      id: uuid.v4(),
      name: category.name,
      icon: category.icon,
      date: date.toISOString(),
      amount: amount,
    };
    console.log("payload", payloadObj.id)

    dispatch(addExpense(payloadObj));
    setCategory(null);
    setAmount("");
    setDate(new Date());
    setShowDate(false);
    navigation.goBack();

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Expense</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>NAME</Text>
        <TouchableOpacity
  style={[styles.input, styles.categoryInput]}
  onPress={() => setShowModal(true)}
>
  {category ? (
    <View style={styles.categoryRow}>
      <Image source={category.icon} style={styles.categoryIcon} />
      <Text>{category.name}</Text>
    </View>
  ) : (
    <Text style={{ color: "#999" }}>Select Category</Text>
  )}
</TouchableOpacity>


        <Text style={styles.label}>AMOUNT</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>DATE</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDate(true)}
        >
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            onChange={(e, selectedDate) => {
              setShowDate(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <TouchableOpacity style={styles.submitBtn} onPress={handleExpenseList}>

          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.modalItem}
    onPress={() => {
      setCategory(item);
      setShowModal(false);
    }}
  >
    <Image source={item.icon} style={styles.modalIcon} />
    <Text style={styles.modalText}>{item.name}</Text>
  </TouchableOpacity>
)}

            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2A7C76",
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
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 20,
    padding: 16,
  },
  categoryInput: {
  justifyContent: "center",
},

categoryRow: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

categoryIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

modalItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 14,
},

modalIcon: {
  width: 26,
  height: 26,
  marginRight: 12,
  resizeMode: "contain",
},


  label: {
    color:"#666666",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
  },

  uploadBtn: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: "#666666",
    padding: 12,
    borderRadius: 10,

  },

  uploadText: {
    marginLeft: 8,
    color: "#666666",
    fontWeight: "600",
  },

  invoiceImg: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginTop: 10,
  },
  submitBtn:{
    justifyContent:"center",
    backgroundColor:"#29756F",
    padding:20,
    borderRadius:40,
    marginTop:50,
  },
  btnText:{
    color:"#fff",
    textAlign:"center",
    fontSize:17,
    fontWeight:"500"
  },

  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },

  modalCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  modalText: {
    fontSize: 16,
  },
});