import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

type ItemProps = { title: string };


const Item = ({ title }: ItemProps) => (
    <TouchableOpacity>
        <View className='flex-1 items-center justify-center p-3 border-border border rounded-lg m-2'>
            <Text style={{ color: 'white' }}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const AddExerciseMenuPage = () => {
    return (
        <View className="flex-1">
            <Stack.Screen options={{ headerTitle: 'Add Exercise' }} />
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}>

            </FlatList>
        </View>
    );
};

export default AddExerciseMenuPage;
