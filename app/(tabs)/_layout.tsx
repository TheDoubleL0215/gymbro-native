import { AppTheme } from '@/styles/AppTheme';
import { Tabs } from 'expo-router';
import { Dumbbell, Home } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Home size={28} color={color} />,
                    headerShown: false,
                    tabBarActiveTintColor: AppTheme.colors.text
                }}
            />
            <Tabs.Screen
                name="exercise"
                options={{
                    title: 'Exercise',
                    tabBarIcon: ({ color }) => <Dumbbell size={28} color={color} />,
                    headerShown: false,
                    tabBarActiveTintColor: AppTheme.colors.text
                }}
            />
        </Tabs>
    );
}
