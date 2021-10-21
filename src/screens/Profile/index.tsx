import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

export function Profile() {
    return (
        <View>
            <Text
                testID='test-title'
            >
                Profile
            </Text>
            <TextInput
                testID='input-name'
                placeholder='Nome'
                autoCorrect={false}
                value='Jonatas' />

            <TextInput
                testID='input-surname'
                placeholder='SobreNome'
                value='Alves' />

            <Button title='Salvar' onPress={() => { }} />
        </View>
    );
}