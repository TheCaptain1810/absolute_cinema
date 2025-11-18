import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

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
                name="index"
                options={{
                    title: 'Films',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="movie" color={color} />,
                }}
            />
            <Tabs.Screen
                name="reviews"
                options={{
                    title: 'Reviews',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="star-half" color={color} />,
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
                name="journal"
                options={{
                    title: 'Journal',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="article" color={color} />,
                }}
            />

        </Tabs>
    );
}
