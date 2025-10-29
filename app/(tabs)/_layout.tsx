import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // or any icon set you like

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarActiveTintColor: "#ff4da6", 
        tabBarInactiveTintColor: "#999", 
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "call" : "call-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Categories"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
