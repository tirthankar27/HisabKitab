import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const userName = "Farhan Ahmad";
  const userEmail = "farhan@email.com";

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </Pressable>

        <Text style={styles.headerTitle}>Profile</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* PROFILE CARD */}
      <View style={styles.card}>
        <Ionicons name="person-circle" size={110} color="#2e4a7d" />

        <Text style={styles.name}>{userName}</Text>
        <Pressable onPress={() => Linking.openURL(`mailto:${userEmail}`)}>
            <Text style={styles.email}>{userEmail}</Text>
        </Pressable>

        <Pressable style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f7",
  },

  header: {
    backgroundColor: "#2e4a7d",
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 6,
    marginTop: 40,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },

  email: {
    color: "#777",
    marginTop: 5,
    marginBottom: 30,
  },

  closeButton: {
    backgroundColor: "#2e4a7d",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
