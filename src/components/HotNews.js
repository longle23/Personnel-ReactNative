import React, { Component, useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions, Linking, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Lấy kích thước chiều ngang của thiêt bị
const { width: screenWidth } = Dimensions.get('window')

export const HotNewsComponent = () => {
    const [imageList, setImageList] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const stepCarousel = useRef(null)
    const [data, setData] = useState([])

    // Hàm bắt sự kiện Scroll của mình
    // const handleScroll = (e) => {
    //     // Nếu e chưa có thông tin gì
    //     if (!e) {
    //         return
    //     }
    //     // Lấy thông tin đó ra
    //     const { nativeEvent } = e
    //     if (nativeEvent && nativeEvent.contentOffset) {
    //         // Tạo biến lấy giá trị Scroll tới vị trí nào
    //         const currentOffset = nativeEvent.contentOffset.x
    //         let imageIndex = 0
    //         // console.log('Screen Width: ', screenWidth, 'Offset: ', currentOffset)

    //         // Nếu kéo quá hơn nữa Img thì sẽ qua hình tiếp theo
    //         if (nativeEvent.contentOffset.x > 0) {
    //             imageIndex = Math.floor(nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth
    //         }

    //         setCurrentImage(imageIndex)
    //         // console.log('Image Index: ', imageIndex)
    //     }
    // }

    useEffect(() => {
        getDataNews()

        console.log('data b: ', data)

        // 1.Load data từ Server
        const data1 = data.map(news => ({
            detail: news.detail,
            id: news.id,
            image: <Image source={{ uri: news.image }} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />
        }))

        // 2.Cap nhat len State cua Screen
        setImageList(data1)

        return () => {

        }

    }, [])

    const getDataNews = async () => {
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
            .then((resJson) => { setData(resJson.info.info1.dataItem) })
            .catch((error) => console.log("Error: ", error))

        console.log('data a: ', data)
    }

    // Tự động chuyển ảnh
    useEffect(() => {
        if (imageList.length > 0) {
            let index = 0
            setInterval(() => {
                stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true })
                index += 1
                if (index === imageList.length) {
                    index = 0
                }
            }, 5000)
        }
    }, [imageList])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* ScrollView */}
                <View style={{ width: '90%', height: 170 }}>
                    <ScrollView
                        // Chiều ngang
                        horizontal
                        // Dừng lại tại 1 hình đó
                        pagingEnabled
                        contentContainerStyle={{ width: screenWidth * imageList.length, height: 200 }}
                        // Sự kiện Scroll
                        // onScroll={handleScroll}
                        ref={stepCarousel}>

                        {imageList.map((e, index) =>
                            <View key={index.toString()}>
                                <TouchableOpacity onPress={() => Linking.openURL(e.detail)}>
                                    {e.image}
                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    )
} 