import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
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
            <Ionicons name="person-circle-outline" size={26} color="#fff" style={{marginLeft:15}}/>
          </View>
        </View>
      </View>

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
    backgroundColor:"#f2f3f7"
  },

  header:{
    backgroundColor:"#2e4a7d",
    paddingTop:50,
    paddingBottom:80,
    paddingHorizontal:20,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
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
  }

});