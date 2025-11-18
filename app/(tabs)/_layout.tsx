import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name='popular'
        options={{
          title: "Popular",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="explore" color={color} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name='addnew'
        options={{
          title: "Addnew",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="flash-on" color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="manage-accounts" color={color} />,
        }}
      />
    </Tabs>
  );
}
