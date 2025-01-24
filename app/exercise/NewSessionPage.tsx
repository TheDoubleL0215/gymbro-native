import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack, useRouter } from 'expo-router'
import { AppTheme } from '@/styles/AppTheme';

const NewSessionPage = () => {
    const [title, setTitle] = React.useState('');
    const router = useRouter();

    return (
        <View className='p-3'>
            <Stack.Screen options={{ headerTitle: 'New Session', headerRight: () => <TouchableOpacity><Text className='text-white'>Save</Text></TouchableOpacity> }} />
            <TextInput
                className='text-white border-border border rounded-lg p-4 text-lg'
                onChangeText={setTitle}
                value={title}
                placeholder="Session Title"
                keyboardType="default"
                placeholderTextColor={AppTheme.colors.text}
            />
            <TouchableOpacity className='p-3 bg-secondary items-center rounded-lg mt-3' onPress={() => router.push({ pathname: `/exercise/AddExerciseMenuPage`, params: { id: 86, other: "anything you want here" }, })}>
                <Text className='text-white'>Add exercise</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewSessionPage