import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TransactionDetail = ({ route, navigation }) => {
  const { transaction } = route.params;

  const isIncome = transaction.type === "credit";
  const fee = isIncome ? 20 : 1.99;
  const earnings = isIncome ? transaction.amount + fee : transaction.amount;
  const total = transaction.amount;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={20} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Transaction Detail</Text>
              <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
            </View>
      {/* Single Card */}
      <View style={styles.card}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={styles.iconCircle}>
            <Image source={transaction.icon} style={styles.icon} />
          </View>

          <Text
            style={[
              styles.typeBadge,
              { backgroundColor: isIncome ? "#E9F7F1" : "#FDECEC", color: isIncome ? "#25A969" : "#F95B51" },
            ]}
          >
            {isIncome ? "Income" : "Expense"}
          </Text>

          <Text style={styles.amount}>${transaction.amount}</Text>
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text
              style={[
                styles.value,
                { color: isIncome ? "#25A969" : "#F95B51" },
              ]}
            >
              {isIncome ? "Income" : "Paid"}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>{transaction.title}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>
              {new Date(transaction.date).toLocaleTimeString()}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>
              {new Date(transaction.date).toDateString()}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Earnings</Text>
            <Text style={styles.value}>${earnings}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.feeLabel}>Fee</Text>
            <Text style={styles.fee}>- ${fee}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Receipt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",

  },
  header:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:50,
        paddingTop:60,
        backgroundColor:"#2A7C76",
    },
    headerText:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"700",
    },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    marginTop:-10,
  },

  topSection: {
    alignItems: "center",
    marginBottom: 20,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F0F6F5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  typeBadge: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginVertical: 10,
    fontSize: 14,
    fontWeight: "600",
  },

  amount: {
    fontSize: 28,
    fontWeight: "700",
  },

  detailsSection: {
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  label: {
    color: "#777",
    fontSize: 14,
  },

  value: {
    fontSize: 14,
    fontWeight: "500",
  },

  feeLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#777",
  },

  fee: {
    color: "#F95B51",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 10,
  },

  totalLabel: {
    fontWeight: "600",
    fontSize: 16,
  },

  total: {
    fontWeight: "700",
    fontSize: 16,
  },

  button: {
    borderWidth: 1,
    borderColor: "#2FA4A9",
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    maxWidth:"80%",
    marginLeft:40,

  },

  buttonText: {
    color: "#2FA4A9",
    fontWeight: "600",
    fontSize: 16,
  },
});
