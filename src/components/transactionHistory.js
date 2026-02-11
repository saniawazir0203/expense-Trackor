import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";

const TransactionHistory = ({ navigation }) => {
    

  const {transactionList} = useSelector(
    state => state.transaction
  );
  console.log("transactionList", transactionList)
   

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.statsRow}
        onPress={() =>
          navigation.navigate("TransactionDetail", { transaction: item })
        }
      >
        <Image source={item.icon} style={styles.image} />

        <View style={styles.headerText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            {new Date(item.date).toDateString()}
          </Text>
        </View>

        <Text
          style={[
            styles.amount,
            { color: item.type === "credit" ? "#25A969" : "#F95B51" },
          ]}
        >
          {item.type === "credit" ? "+" : "-"} ${item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.safe}>
      {/* Header */}
      <View style={styles.topRow}>
        <Text style={styles.historyText}>Transactions History</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Empty State */}
      {transactionList.length === 0 ? (
        <Text style={styles.emptyText}>No transactions yet</Text>
      ) : (
        <FlatList
          data={transactionList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  historyText: {
    fontWeight: "500",
    fontSize: 20,
  },

  seeAll: {
    color: "#666666",
    fontSize: 15,
  },

  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  image: {
    width: 55,
    height: 55,
    backgroundColor: "#F0F6F5",
    borderRadius: 10,
  },

  headerText: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },

  amount: {
    fontWeight: "700",
    fontSize: 18,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#999",
    fontSize: 16,
  },
});
