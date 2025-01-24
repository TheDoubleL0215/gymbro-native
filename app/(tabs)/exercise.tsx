import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Plus } from 'lucide-react-native'
import { Link, useRouter } from 'expo-router'
import BottomSheet from '@gorhom/bottom-sheet'

const ExercisePage = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1 }} className="m-3">
            <Link href="/exercise/NewSessionPage" asChild>
                <TouchableOpacity className="p-3 bg-secondary rounded-lg">
                    <Text className="text-white text-center">Create new session</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    )
}

export default ExercisePage