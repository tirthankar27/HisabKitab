import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>HisabKitab</Text>
        <Text style={styles.subtitle}>Smart bookkeeping for your business</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.loginTitle}>Login</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#777" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#777" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Manage customers • Track payments • Grow business
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#f4f6fb",
  },

  brandContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  brand: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#2e4a7d",
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },

  loginTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f3f7",
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    padding: 14,
    fontSize: 16,
  },

  loginButton: {
    backgroundColor: "#2e4a7d",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    fontSize: 12,
  },
});
