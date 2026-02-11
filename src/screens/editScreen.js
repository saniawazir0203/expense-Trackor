import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { editExpense } from "../store/slices/expense";

const EditExpenseScreen = ({ route, navigation }) => {
  const { expense } = route.params;
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(new Date(expense.date));
  const [showDate, setShowDate] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    try {
        dispatch(
      editExpense({
        ...expense,
        amount,
        date: date.toISOString(),
      })
    );

    navigation.goBack();
    } catch (error) {
        console.error(error)
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Expense</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>AMOUNT</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
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

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={handleUpdate}
        >
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditExpenseScreen;
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
        marginRight:140,
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