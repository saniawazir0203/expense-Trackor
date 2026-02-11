import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { deleteExpense } from "../store/slices/expense";

const UpcomingBills = ({ navigation }) => {
  const dispatch = useDispatch();
  const {card: savedCard} = useSelector(state => state.cards);
const hasCard = !!savedCard?.cardNo;



  const {expensesList} = useSelector(
    (state => state.expenses)
  );
  console.log("expensesList",expensesList )

  const handleOptions = (item) => {
    Alert.alert(
      "Expense Options",
      "What do you want to do?",
      [
        {
          text: "Edit",
          onPress: () =>
            navigation.navigate("EditExpenseScreen", {
              expense: item,
              
            }),
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => dispatch(deleteExpense(item.id)),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
    
      {expensesList.map((item) => (
        <View key={item.id} style={styles.statsRow}>
          <View style={styles.left}>
            <Image source={item.icon} style={styles.image} />

            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>
                {new Date(item.date).toDateString()}
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
  style={[
    styles.payBtn,
    !hasCard && styles.disabledBtn,
  ]}
  disabled={!hasCard}
  onPress={() =>
    navigation.navigate("BillDetails", {
      title: item.name,
      date: item.date,
      price: item.amount,
      icon: item.icon,
      fee: "1.99",
    })
  }
>
  <Text
    style={[
      styles.payText,
      !hasCard && styles.disabledText,
    ]}
  >
    Pay
  </Text>
</TouchableOpacity>

            {/* 👇 ELLIPSIS ICON */}
            <TouchableOpacity
              onPress={() => handleOptions(item)}
              style={{ marginLeft: 10 }}
            >
              <Ionicons
                name="ellipsis-vertical"
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    
    </View>
  );
};

export default UpcomingBills;


const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  historyText: {
    fontSize: 20,
    fontWeight: "600",
  },
  seeAll: {
    color: "#666",
    fontSize: 15,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  image: {
    width: 30,
    height: 30,
    padding:10,
    backgroundColor: "#F0F6F5",
    borderRadius: 4,
    resizeMode:"contain"
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
  },

  subtitle: {
    color: "#888",
    fontSize: 13,
    marginTop: 4,
  },

  right: {
    alignItems: "flex-end",
    flexDirection:"row",
  },

  price: {
    color: "#F95B51",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 6,
  },

  payBtn: {
    backgroundColor: "#ECF9F8",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },

  payText: {
    color: "#438883",
    fontSize: 13,
    fontWeight: "600",
  },
  disabledBtn: {
  backgroundColor: "#E0E0E0",
},

disabledText: {
  color: "#999",
},

});
