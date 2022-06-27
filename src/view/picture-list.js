import React, { Component, useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native'

// Lấy kích thước chiều ngang của thiêt bị
const { width: screenWidth } = Dimensions.get('window')

export default PictureList = () => {
    const [imageList, setImageList] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const stepCarousel = useRef(null)

    // Hàm bắt sự kiện Scroll của mình
    const handleScroll = (e) => {
        // Nếu e chưa có thông tin gì
        if (!e) {
            return
        }
        // Lấy thông tin đó ra
        const { nativeEvent } = e
        if (nativeEvent && nativeEvent.contentOffset) {
            // Tạo biến lấy giá trị Scroll tới vị trí nào
            const currentOffset = nativeEvent.contentOffset.x
            let imageIndex = 0
            // console.log('Screen Width: ', screenWidth, 'Offset: ', currentOffset)

            // Nếu kéo quá hơn nữa Img thì sẽ qua hình tiếp theo
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = Math.floor(nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth
            }
            setCurrentImage(imageIndex)
            // console.log('Image Index: ', imageIndex)
        }
    }

    useEffect(() => {
        // 1.Load data từ Server
        const data = [
            {
                image: <Image source={require('../images/1.jpg')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
                type: 'png a',
                camera: '11111'
            },
            {
                image: <Image source={require('../images/2.jpg')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
                type: 'png b',
                camera: '222222'
            },
            {
                image: <Image source={require('../images/3.jpg')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
                type: 'png c',
                camera: '333333'
            },
        ]

        // 2.Cap nhat len State cua Screen
        setImageList(data)
    }, [])  

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
            }, 3000)
        }
    }, [imageList])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* ScrollView */}
                <View style={{ width: '86%', height: 200 }}>
                    <ScrollView ScrollView
                        // Chiều ngang
                        horizontal
                        // Dừng lại tại 1 hình đó
                        pagingEnabled
                        contentContainerStyle={{ width: screenWidth * imageList.length, height: 200 }}
                        // Sự kiện Scroll
                        onScroll={handleScroll}
                        ref={stepCarousel}>
                        {imageList.map((e, index) =>
                            <View key={index.toString()}>
                                {e.image}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
} 