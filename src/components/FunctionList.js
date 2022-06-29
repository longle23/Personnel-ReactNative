import React from 'react';
import { StyleSheet, View, Button, Dimensions, TextInput, SafeAreaView, TouchableOpacity, Image, Text, FlatList, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const FunctionListComponent = () => {

    return (
        <View>
            <View style={styles.container1}>
                <TouchableOpacity style={{ marginRight: 120 }}>
                    <Image source={require('../images/icon_login.png')} />

                    <Text style={{ fontWeight: 'bold' }}>Nghỉ phép</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ marginLeft: 15 }} source={require('../images/icon_login.png')} />

                    <Text style={{ fontWeight: 'bold' }}>Bổ sung công</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: windowWidth * 0.9,
        height: windowHeight * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignSelf: 'center',
    },
})