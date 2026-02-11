import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const menuItems = [
  {
    id: 1,
    title: "Invite Friends",
    iconType: "special", 
    icon: "gem-outline", 
  },
  {
    id: 2,
    title: "Account info",
    iconType: "icon",
    icon: "person",
  },
  {
    id: 3,
    title: "Personal profile",
    iconType: "icon",
    icon: "people",
  },
  {
    id: 4,
    title: "Message center",
    iconType: "icon",
    icon: "mail",
  },
  {
    id: 5,
    title: "Login and security",
    iconType: "icon",
    icon: "shield",
  },
  {
    id: 6,
    title: "Data and privacy",
    iconType: "icon",
    icon: "lock-closed",
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
     
      
      <View style={styles.headerBackground}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge} />
          </View>
        </View>

        
        <View style={styles.profileImageContainer}>
          <Image
          source={require("../assets/profile.png")}
            style={styles.avatar}
          />
        </View>
      </View>

      
      <ScrollView contentContainerStyle={styles.contentScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.infoSection}>
          <Text style={styles.userName}>Sania Wazir</Text>
          <Text style={styles.userHandle}>@sania_wazir</Text>
        </View>

       
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={styles.iconWrapper}>
              {item.id === 1 ? (
                <View style={styles.specialIconBg}>
                 
                  <Ionicons name="diamond" size={22} color="#2D8E87" />
                </View>
              ) : (
                <Ionicons name={item.icon} size={24} color="#666" />
              )}
            </View>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    backgroundColor: "#3E9D95",
    height: 280,
    borderBottomLeftRadius: 150, 
    borderBottomRightRadius: 150,
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
  
  profileImageContainer: {
    transform: [{ scaleX: 0.67 }],
    position: "absolute",
    bottom: -50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#fff",
  },
  contentScroll: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  infoSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  userHandle: {
    fontSize: 14,
    color: "#3E9D95",
    marginTop: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  iconWrapper: {
    width: 45,
    alignItems: "center",
    marginRight: 15,
  },
  specialIconBg: {
    backgroundColor: "#E8F5F4",
    padding: 10,
    borderRadius: 20,
    
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});