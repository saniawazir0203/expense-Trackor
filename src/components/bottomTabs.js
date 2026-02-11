import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import HomePage from "../screens/homePage";
import Statistics from "../screens/statistics";
import AddExpense from "../screens/AddExpense";
import ProfileScreen from "../screens/Profile";
import WalletScreen from "../screens/wallet";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: {
          height: 65,
          backgroundColor: "#fff",
        },
        tabBarActiveTintColor: "#408782",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
            />
           ),
         }}
       />

      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
                name={focused ? "stats-chart" : "stats-chart"}
                size={size}
                color={color}
            />
           ),
         }}
      />

      {/* ADD (+) BUTTON */}
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.addButton}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
                name={focused ? "wallet" : "wallet"}
                size={size}
                color={color}
            />
           ),
         }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
                name={focused ? "person" : "person"}
                size={size}
                color={color}
            />
           ),
         }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#438883",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    marginLeft:10,
    filter: "drop-shadow(0px 5px 5px #438883)"
  },
  addText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "400",
  },
});
