import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ActivityTabsLayout() {
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
                    title: 'Friends',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="people" color={color} />,
                }}
            />
            <Tabs.Screen
                name="you"
                options={{
                    title: 'You',
                }}
            />
            <Tabs.Screen
                name="incoming"
                options={{
                    title: 'Incoming',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="call-received" color={color} />,
                }}
            />
        </Tabs>
    );
}
