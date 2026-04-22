import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#0F172A' : '#F8FAFC',
          ...(Platform.OS === 'web' ? { boxShadow: 'none' } : {}),
        },
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 17,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1E293B' : '#FFFFFF',
          borderTopColor: colorScheme === 'dark' ? '#334155' : '#E2E8F0',
          height: Platform.OS === 'web' ? 60 : undefined,
          paddingBottom: Platform.OS === 'web' ? 8 : undefined,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerTitle: 'JayCa Supplies',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22 }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          headerTitle: 'Inventory Management',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22 }}>📦</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="delivery"
        options={{
          title: 'Delivery',
          headerTitle: 'Delivery Center',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22 }}>🚚</Text>
          ),
        }}
      />
    </Tabs>
  );
}
