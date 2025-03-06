/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from "@emotion/react";
import { Slot, Tabs } from "expo-router";
import { Platform } from "react-native";

import { HapticTab } from "@/components/ui/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import Header from "@/components/ui/WebHeader";

export default function TabLayout() {
  const theme = useTheme();

  if (Platform.OS === "web")
    return (
      <>
        <Header />
        <Slot />
      </>
    );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="item/index"
        options={{
          title: "Items",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="boss/index"
        options={{
          title: "Boss",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vivid/index"
        options={{
          title: "Vivid",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="item/[itemId]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="boss/[bossId]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
