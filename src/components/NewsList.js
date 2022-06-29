import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Dimensions, TextInput, SafeAreaView, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const NewsListComponent = () => {

    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getDataList()

        return () => {

        }

    }, [])

    const getDataList = async () => {
        const URL_Login = 'https://ihrp2.fis.vn/bke_v33_standard_poc/api/v1/custom/getuser2'

        const token = await AsyncStorage.getItem('token')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Stoken: token,
                LangID: '1',
                OS: '1',
                AppVersion: 'version'
            })
        }

        fetch(URL_Login, requestOptions)
            .then((response) => response.json())
            .then((resJson) => { setData(resJson.info.info5.dataItem) })
            .catch((error) => console.log("Error: ", error))
    }

    renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => Linking.openURL(item.detail)}>
                    <View style={styles.listNews}>
                        <Image
                            style={styles.imageList}
                            source={{ uri: item.image }}
                            resizeMode='contain' />

                        <View style={styles.textList}>
                            <Text style={{ fontWeight: 'bold' }}>{item.newsTitle}</Text>

                            <Text>{item.displayTime}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 1, marginTop: 10 }}></View>
            </View>
        )
    }

    return ( 
        <View>
            <View style={styles.container2}>
                {/* {isLoading ? <ActivityIndicator /> : ( */}
                <FlatList
                    style={styles.flatList}
                    data={data}
                    ItemSeparatorComponent={() => (
                        <View style={{ backgroundColor: 'grey', height: 0.5 }}/>
                    )}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                {/* )} */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.33,
        backgroundColor: 'white',
        marginTop: 10,
        alignSelf: 'center',
    },
    listNews: {
        flexDirection: 'row',
        height: windowHeight * 0.08,
        marginTop:10
    },
    imageList: {
        width: windowWidth * 0.15,
        height: windowHeight * 0.08,
        borderRadius: 5
    },
    textList: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    flatList: {
        flex: 1,
        padding: 8
    }
})