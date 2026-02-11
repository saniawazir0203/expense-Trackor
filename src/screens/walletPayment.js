import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPayment from "../components/cardsPayment";
import AccountPayment from "../components/accountPayment"
import FundsPay from "../components/funds";

const WalletPayment = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Cards");


  const renderContent = () => {
  switch (activeTab) {
    case "Cards":
      return <CardPayment navigation={navigation} />;

    case "Account":
      return <AccountPayment navigation={navigation} />;

    case "Funds":
      return <FundsPay navigation={navigation} />;

    default:
      return null;
  }
};



  return (
    <View style={styles.mainContainer}>
      {/* HEADER */}
      <View style={styles.headerBackground}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Connect Wallet</Text>

          <View style={styles.notificationContainer}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#fff"
            />
          </View>
        </View>
      </View>

      {/* BODY */}
      <View style={styles.body}>
        {/* TABS */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Cards" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Cards")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Cards" && styles.activeTabText,
              ]}
            >
              Cards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Account" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Account")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Account" && styles.activeTabText,
              ]}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Funds" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Funds")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Funds" && styles.activeTabText,
              ]}
            >
              Funds
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
    </View>
  );
};

export default WalletPayment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerBackground: {
    backgroundColor: "#3E9D95",
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    transform: [{ scaleX: 1.5 }],
    alignItems: "center",
  },

  headerRow: {
    transform: [{ scaleX: 0.67 }],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 50,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  notificationContainer: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 8,
    borderRadius: 10,
  },

  body: {
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    flex: 1,
    marginTop: -40,
  },

  tabContainer: {
    marginLeft:35,
    marginRight:35,
    marginTop:20,
    flexDirection: "row",
    backgroundColor: "#F4F6F6",
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 20,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: "#fff",
    elevation: 2,
  },

  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },

  activeTabText: {
    color: "#222",
    fontWeight: "700",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 30,
    color: "#888",
  },
});
