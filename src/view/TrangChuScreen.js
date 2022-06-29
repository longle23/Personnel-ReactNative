import React from 'react';
import { StyleSheet, View, Button, Dimensions, TextInput, SafeAreaView, TouchableOpacity, Image, Text, FlatList, ImageBackground, ScrollView } from 'react-native';
import 'react-native-gesture-handler'

import { HeaderComponent } from '../components/Header';
import { FunctionListComponent } from '../components/FunctionList';
import { HotNewsComponent } from '../components/HotNews';
import { NewsListComponent } from '../components/NewsList';

export default TrangChuScreen = ({ navigation }) => {

    return (
        <ImageBackground style={{ height: '100%', width: '100%' }}
            source={require('../images/bg_login.png')}
            resizeMode='stretch'>

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <HeaderComponent />

                        <FunctionListComponent />

                        <HotNewsComponent />

                        <View style={{ marginTop: 18, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 20 }}>TIN TỨC</Text>

                            <TouchableOpacity>
                                <Text style={{ marginRight: 20, justifyContent: 'space-around', color: 'blue' }}>xem thêm {'>>'}</Text>
                            </TouchableOpacity>
                        </View>

                        <NewsListComponent />
                    </View>
                </ScrollView>
            </SafeAreaView>
            
        </ImageBackground>
    )

}