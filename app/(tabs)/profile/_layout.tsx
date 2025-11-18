import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ProfileTabsLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="manage-accounts" color={color} />,
                }}
            />
            <Tabs.Screen
                name="diary"
                options={{
                    title: 'Diary',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="edit-note" color={color} />,
                }}
            />
            <Tabs.Screen
                name="lists"
                options={{
                    title: 'Lists',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="watchlist"
                options={{
                    title: 'Watchlist',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="watch-later" color={color} />,
                }}
            />
        </Tabs>
    );
}
