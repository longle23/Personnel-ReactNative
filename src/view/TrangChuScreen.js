import React from 'react';
import { StyleSheet, View, Button, Dimensions, TextInput, SafeAreaView, TouchableOpacity, Image, Text, FlatList, ImageBackground } from 'react-native';
import 'react-native-gesture-handler'
import PictureList from './picture-list';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default TrangChuScreen = ({ navigation }) => {

    const newList = () => {
        return (
            <View>
                <Image resizeMode='contain' />

                <View>
                    <Text>q</Text>

                    <Text>q</Text>
                </View>
            </View>
        )
    }

    return (
        <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../images/bg_login.png')} resizeMode='stretch'>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <View>
                        <Text style={styles.textTrangChu}>TRANG CHỦ</Text>
                    </View>

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

                    <PictureList />

                    <View style={{ marginTop: 220, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 20 }}>TIN TỨC</Text>

                        <TouchableOpacity>
                            <Text style={{ marginRight: 20, justifyContent: 'space-around', color: 'blue' }}>xem thêm {'>>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container2}>
                        <Text>1</Text>

                        {/* <FlatList
                            data={data}
                            renderItem={newList}
                            keyExtractor={ }
                        /> */}
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    textTrangChu: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 25,
        color: 'white'
    },
    container1: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: windowHeight * 0.46,
        height: windowHeight * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignSelf: 'center',
    },
    container2: {
        width: windowHeight * 0.46,
        height: windowHeight * 0.28,
        backgroundColor: 'white',
        marginTop: 20,
        alignSelf: 'center',
    }
})