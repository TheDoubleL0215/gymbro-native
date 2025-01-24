import { AppTheme } from '@/styles/AppTheme';
import { Tabs } from 'expo-router';
import { Dumbbell, User } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ animation: 'fade', headerShown: false }}>
            <Tabs.Screen
                name="exercise"
                options={{
                    title: 'Exercise',
                    tabBarIcon: ({ color }) => <Dumbbell size={28} color={color} />,
                    headerShown: false,
                    tabBarActiveTintColor: AppTheme.colors.text
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <User size={28} color={color} />,
                    headerShown: false,
                    tabBarActiveTintColor: AppTheme.colors.text
                }}
            />
        </Tabs>
    );
}
