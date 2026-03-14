import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    router.replace("/login");
  };
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.appName}>HisabKitab</Text>
            <Text style={styles.subtitle}>Manage your business easily</Text>
          </View>

          <View style={styles.icons}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <Pressable onPress={() => setShowMenu(!showMenu)}>
              <Ionicons
                name="person-circle-outline"
                size={26}
                color="#fff"
                style={{ marginLeft:15 }}
              />
            </Pressable>
          </View>
        </View>
      </View>

      {showMenu && (
        <View style={styles.dropdown}>

          <Pressable
            style={styles.menuItem}
            onPress={() => {
              setShowMenu(false);
              router.push("/profile");
            }}
          >
            <Text>Profile</Text>
          </Pressable>

          <View style={styles.menuDivider}></View>

          <Pressable style={styles.menuItem} onPress={handleLogout}>
            <Text style={{color:"#d32f2f"}}>Logout</Text>
          </Pressable>

        </View>
      )}

      {/* SUMMARY CARD */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>You Will Get</Text>
          <Text style={styles.green}>₹ 8,200</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>You Will Give</Text>
          <Text style={styles.red}>₹ 1,100</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f3f7",
    overflow: "visible",
  },

  header:{
    backgroundColor:"#2e4a7d",
    paddingTop:50,
    paddingBottom:80,
    paddingHorizontal:20,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    overflow: "visible",
  },

  headerRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  appName:{
    fontSize:26,
    fontWeight:"bold",
    color:"#fff"
  },

  subtitle:{
    color:"#e8f5e9",
    marginTop:4
  },

  icons:{
    flexDirection:"row"
  },

  summaryCard:{
    backgroundColor:"#fff",
    marginHorizontal:20,
    marginTop:-40,
    padding:20,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    elevation:4
  },

  summaryItem:{
    flex:1,
    alignItems:"center"
  },

  divider:{
    width:1,
    height:40,
    backgroundColor:"#ddd"
  },

  label:{
    color:"#777"
  },

  green:{
    fontSize:20,
    fontWeight:"bold",
    color:"#2e7d32"
  },

  red:{
    fontSize:20,
    fontWeight:"bold",
    color:"#d32f2f"
  },
  dropdown:{
    position:"absolute",
    top:110,
    right:20,
    backgroundColor:"#fff",
    borderRadius:10,
    width:150,
    elevation:8,
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:8,
    zIndex: 1000,
  },

  menuItem:{
    paddingVertical:10,
    paddingHorizontal:15
  },

  menuDivider:{
  height:1,
  backgroundColor:"#eee"
}
});