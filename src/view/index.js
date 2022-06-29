import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import 'react-native-gesture-handler'

import AuthenScreen from './AuthenScreen'
import TrangChuScreen from './TrangChuScreen'
import DanhSachScreen from './DanhSachScreen'
import DangKyScreen from './DangKyScreen'
import PheDuyetScreen from './PheDuyetScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
            <Tab.Screen name="Screen 1" component={TrangChuScreen} options={{ tabBarIcon: () => <Image source={require('../images/home.png')} resizeMode='stretch' style={{ width: 30, height: 30 }} /> }} />
            <Tab.Screen name="Screen 2" component={DanhSachScreen} options={{ tabBarIcon: () => <Image source={require('../images/widget.png')} resizeMode='stretch' style={{ width: 30, height: 30 }} /> }} />
            <Tab.Screen name="Screen 3" component={DangKyScreen} options={{ tabBarIcon: () => <Image source={require('../images/task.png')} resizeMode='stretch' style={{ width: 30, height: 30 }} /> }} />
            <Tab.Screen name="Screen 4" component={PheDuyetScreen} options={{ tabBarIcon: () => <Image source={require('../images/person.png')} resizeMode='stretch' style={{ width: 30, height: 30 }} /> }} />
        </ Tab.Navigator>
    );
}

const HomeDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='TimKiemScreen' screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='TimKiemScreen' component={TimKiemScreen} />
            <Drawer.Screen name='DanhSachScreen' component={DanhSachScreen} />
            <Drawer.Screen name='DangKyScreen' component={DangKyScreen} />
            <Drawer.Screen name='PheDuyetScreen' component={PheDuyetScreen} />
        </Drawer.Navigator >
    )
}

export default RootComponent = () => {

    // const getTabList = async () => {
    //     const URL_Login = 'https://ihrp2.fis.vn/bke_v33_standard_poc/api/v1/custom/getuser2'

    //     const token = await AsyncStorage.getItem('token')

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             Stoken: token,
    //             LangID: '1',
    //             OS: '1',
    //             AppVersion: 'version'
    //         })
    //     }

    //     fetch(URL_Login, requestOptions)
    //         .then((response) => response.json())
    //         .then((resJson) => { setData(resJson.info.info5.dataItem) })
    //         .catch((error) => console.log("Error: ", error))
    // }

    return (
        // Các trang bên trong sẽ lấy được thông tin store, thì trong store sẽ có reducers
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='AuthenScreen' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='AuthenScreen' component={AuthenScreen} />

                    <Stack.Screen name='MainTabs' component={MainTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}