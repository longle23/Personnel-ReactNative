import React from 'react';
import { StyleSheet, View, Button, TextInput, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';
import 'react-native-gesture-handler'

export default DangKyScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ height: '8%', width: '100%', flexDirection: 'row', backgroundColor: '#4F8DFE' }}>
                <TouchableOpacity style={{ height: '100%', aspectRatio: 1.7, alignContent: 'center' }}
                    onPress={() => navigation.pop(1)}>
                    <Image source={require('../images/back.png')} style={{ tintColor: 'white', marginLeft: 10 }} resizeMode='stretch' />
                </TouchableOpacity>
            </View>

            {/* Body */}
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Dang Ky Srceen</Text>
                <TouchableOpacity style={{ width: '50%', height: 50, borderWidth: 1, marginTop: 50, alignItems: 'center', borderRadius: 100 }}
                    onPress={() => { navigation.popToTop() }}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
