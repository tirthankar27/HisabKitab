import { View, Text, FlatList, StyleSheet, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const customers = [
  { id:"1", name:"Ramesh", balance:300 },
  { id:"2", name:"Rahul", balance:-200 },
  { id:"3", name:"Amit", balance:1200 }
];

export default function Customers() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Customers</Text>

      <FlatList
        data={customers}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>

            <Text
              style={[
                styles.balance,
                item.balance >= 0 ? styles.green : styles.red
              ]}
            >
              ₹ {Math.abs(item.balance)}
            </Text>
          </View>
        )}
      />

      {/* Floating Button */}
      <Pressable style={styles.fab} onPress={()=>setMenuVisible(true)}>
        <Ionicons name="add" size={30} color="#fff" />
      </Pressable>

      {/* Bottom Sheet */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent
      >
        <Pressable style={styles.overlay} onPress={()=>setMenuVisible(false)}>

          <View style={styles.menu}>

            <Pressable style={styles.menuItem}>
              <Ionicons name="person-add" size={22} color="#333" />
              <Text style={styles.menuText}>Add Customer</Text>
            </Pressable>

            <Pressable style={styles.menuItem}>
              <Ionicons name="receipt" size={22} color="#333" />
              <Text style={styles.menuText}>Add Transaction</Text>
            </Pressable>

            <Pressable style={styles.menuItem}>
              <Ionicons name="qr-code" size={22} color="#333" />
              <Text style={styles.menuText}>Receive Payment</Text>
            </Pressable>

          </View>

        </Pressable>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f3f7",
    padding:20
  },

  header:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:15
  },

  card:{
    backgroundColor:"#fff",
    padding:16,
    borderRadius:10,
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },

  name:{
    fontSize:18
  },

  balance:{
    fontSize:18,
    fontWeight:"bold"
  },

  green:{
    color:"#2e7d32"
  },

  red:{
    color:"#d32f2f"
  },

  fab:{
    position:"absolute",
    bottom:30,
    right:20,
    backgroundColor:"#2e7d32",
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    elevation:6
  },

  overlay:{
    flex:1,
    justifyContent:"flex-end",
    backgroundColor:"rgba(0,0,0,0.4)"
  },

  menu:{
    backgroundColor:"#fff",
    padding:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },

  menuItem:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:15
  },

  menuText:{
    fontSize:18,
    marginLeft:10
  }

});