import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { AppTheme } from '@/styles/AppTheme';

const NewSessionPage = () => {
    const [title, setTitle] = React.useState('');

    return (
        <View className='p-3'>
            <Stack.Screen options={{ headerTitleAlign: 'center', headerTitle: 'New Session' }} />
            <TextInput
                className='text-white bg-secondary rounded-lg p-4 text-lg'
                onChangeText={setTitle}
                value={title}
                placeholder="Session Title"
                keyboardType="default"
                placeholderTextColor={AppTheme.colors.text}
            />
            <Link href="/exercise/AddExerciseMenuPage">
                <Text className='text-white text-center'>Add exercise</Text>
            </Link>
        </View>
    )
}

export default NewSessionPage