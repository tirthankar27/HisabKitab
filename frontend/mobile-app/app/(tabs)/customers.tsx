import { View, Text, FlatList, StyleSheet, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const customers = [
  { id: "1", name: "Ramesh", balance: 300 },
  { id: "2", name: "Rahul", balance: -200 },
  { id: "3", name: "Amit", balance: 1200 },
];

export default function Customers() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Customers</Text>

          <Ionicons name="search-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* CUSTOMER LIST */}
      <View style={styles.content}>
        <FlatList
          data={customers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>

              <Text
                style={[
                  styles.balance,
                  item.balance >= 0 ? styles.green : styles.red,
                ]}
              >
                ₹ {Math.abs(item.balance)}
              </Text>
            </View>
          )}
        />
      </View>

      {/* FLOATING BUTTON */}
      <Pressable style={styles.fab} onPress={() => setMenuVisible(true)}>
        <Ionicons name="add" size={30} color="#fff" />
      </Pressable>

      {/* BOTTOM SHEET */}
      <Modal visible={menuVisible} animationType="slide" transparent>

        <Pressable
          style={styles.overlay}
          onPress={() => setMenuVisible(false)}
        >
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

  container: {
    flex: 1,
    backgroundColor: "#f2f3f7",
  },

  /* HEADER */

  header: {
    backgroundColor: "#2e4a7d",
    paddingTop: 55,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  /* CONTENT */

  content: {
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },

  name: {
    fontSize: 18,
  },

  balance: {
    fontSize: 18,
    fontWeight: "bold",
  },

  green: {
    color: "#2e7d32",
  },

  red: {
    color: "#d32f2f",
  },

  /* FLOATING BUTTON */

  fab: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#2e4a7d",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  /* BOTTOM SHEET */

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  menu: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  menuText: {
    fontSize: 18,
    marginLeft: 10,
  },
});