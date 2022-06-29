import React from 'react';
import { StyleSheet, View, Button, Dimensions, TextInput, SafeAreaView, TouchableOpacity, Image, Text, FlatList, ImageBackground } from 'react-native';

export const HeaderComponent = () => {

    return (
        <View>
            <View>
                <Text style={styles.textTrangChu}>TRANG CHỦ</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textTrangChu: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 25,
        color: 'white'
    },
})