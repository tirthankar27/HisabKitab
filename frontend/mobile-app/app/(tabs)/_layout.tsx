import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#2e4a7d",
        tabBarInactiveTintColor: "#777",

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle:{
          fontSize:12,
          fontWeight:"600",
          marginBottom:5
        }

      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title:"Home",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="home" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="customers"
        options={{
          title:"Customers",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="people" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title:"Transactions",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="receipt" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          title:"QR Pay",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="qr-code" size={size} color={color}/>
          )
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({

  tabBar:{
    position:"absolute",
    height:70,
    backgroundColor:"#fff",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:10,
    elevation:10,
    borderTopWidth:0
  }

});