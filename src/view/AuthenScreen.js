import React, { Component, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Dimensions, TextInput, Image, Button, Switch, ActivityIndicator, } from 'react-native'
import 'react-native-gesture-handler'
import { en, vn } from '../custom/captions'
import { config } from '../custom/setting'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux'
import loginActions from '../redux/actions/loginActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const AuthenScreen = ({ navigation }) => {
    // Set mac dinh khong hien password
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    // Toggle Language
    const [isVN, setIsVN] = useState(true)
    const [taikhoan, onChangeTaiKhoan] = useState("")
    const [matkhau, onChangeMatKhau] = useState("")

    const dispatch = useDispatch()

    // State từ Redux
    const stateLoading = useSelector(state => state.login_loading)
    const stateSuccess = useSelector(state => state.login_success)
    const stateError = useSelector(state => state.login_error)

    useEffect(() => {
        console.log('useEffect..')

        if (stateSuccess.code === true) {
            navigation.navigate('MainTabs')
        }

        const saveToken = async () => {
            try {
                AsyncStorage.setItem('token', stateSuccess.message)
                const token = await AsyncStorage.getItem('token')
                console.log('token: ', token)
            } catch (error) {
                console.log(error)
            }
        }

        saveToken()

    }, [stateSuccess])

    return (
        <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../images/bg_login.png')} resizeMode='stretch' >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.toggleLanguage}>
                        <TouchableOpacity onPress={() => { config.language = 'vi', setIsVN(!isVN) }}>
                            <Text style={isVN ?
                                { marginLeft: 10, color: '#4F8DFE', backgroundColor: 'white', borderRadius: 5 }
                                :
                                { marginLeft: 10, color: 'white' }} >Vi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { config.language = 'en', setIsVN(!isVN) }}>
                            <Text style={isVN ?
                                { marginLeft: 10, color: 'white' }
                                :
                                { marginLeft: 10, color: '#4F8DFE', backgroundColor: 'white', borderRadius: 5 }}>En</Text>
                        </TouchableOpacity>
                    </View>

                    <Image style={styles.imgLogin} source={require('../images/icon_login.png')} resizeMode='stretch' />

                    <Text style={styles.textTitle}>{config.language === "vi" ? vn.titleLogin : en.titleLogin}</Text>

                    {/* Tai khoan - Mat khau */}
                    <View style={styles.containerTkMk}>
                        {/* Tai khoan */}
                        <View style={styles.containerTk}>
                            <TextInput style={styles.inputTk}
                                autoCapitalize='none'
                                placeholder={config.language === "vi" ? vn.userName : en.userName}
                                onChangeText={textTaiKhoan => onChangeTaiKhoan(textTaiKhoan)}
                                value={taikhoan} />
                        </View>

                        {/* Mat khau */}
                        <View style={styles.containerMk}>
                            <TextInput style={styles.inputMk}
                                autoCapitalize='none'
                                placeholder={config.language === "vi" ? vn.password : en.password}
                                secureTextEntry={getPasswordVisible ? false : true}
                                onChangeText={textMatKhau => onChangeMatKhau(textMatKhau)}
                                value={matkhau} />

                            <TouchableOpacity style={{ height: '100%', width: 30, position: 'absolute', right: 20 }}
                                onPress={() => { setPasswordVisible(!getPasswordVisible) }}>

                                {getPasswordVisible ?
                                    <Image source={require('../images/tatmat.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                                    :
                                    <Image source={require('../images/momat.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Thong bao dang nhap */}
                    {stateSuccess.code === true ? null : <Text style={{ marginLeft: 15, color: 'red' }}>{stateSuccess.message}</Text>}

                    {/* Button dang nhap */}
                    {stateLoading ?
                        (
                            <ActivityIndicator size='large' color='grey'></ActivityIndicator>
                        ) : (
                            <TouchableOpacity style={styles.btDangNhap}
                                // onPress={() => { navigation.navigate('MainTabs') }}>
                                onPress={() => {
                                    dispatch(loginActions(taikhoan, matkhau))
                                    // LoginVSsaveToken()
                                }}>

                                <Text style={styles.textBtDangNhap}>{config.language === "vi" ? vn.Login : en.Login}</Text>
                            </TouchableOpacity>
                        )
                    }

                    <Text style={styles.textBanQuyen}>{config.language === "vi" ? vn.textCopyright : en.textCopyright}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    toggleLanguage: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '15%',
        borderRadius: 20,
        borderColor: 'white',
        marginTop: 20,
        marginLeft: windowWidth * 0.8
    },
    imgLogin: {
        marginTop: 20,
        width: 90,
        height: 90,
        alignSelf: 'center',
    },
    container: {
        height: '100%',
        width: '100%'
    },
    textTitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },
    containerTkMk: {
        width: '100%',
        height: '20%',
        marginTop: 120,
        alignItems: 'center'
    },
    containerTk: {
        width: '100%',
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputTk: {
        height: '100%',
        width: '95%',
        borderWidth: 1,
        borderColor: '#EBEDF0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerMk: {
        width: '100%',
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
    },
    inputMk: {
        height: '100%',
        width: '95%',
        borderWidth: 1,
        borderColor: '#EBEDF0',
        borderRadius: 8,
        justifyContent: 'center'
    },
    btDangNhap: {
        marginTop: 15,
        width: '95%',
        height: '8%',
        borderRadius: 8,
        backgroundColor: '#4F8DFE',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    textBtDangNhap: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textBanQuyen: {
        color: 'black',
        fontSize: 12,
        marginTop: windowHeight * 0.18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    console.log("---AuthenScreen state: ", state)

    return {
        login_loading: state.login_loading,
        login_success: state.login_success,
        login_error: state.login_error,
    }
}

const mapDispatchToProps = (dispatch) => {
    // return { actions: bindActionCreators(loginActions, dispatch) }
    // loginActions: async (taikhoan, matkhau) => dispatch(loginActions(taikhoan, matkhau))

    return {
        loginActions: (taikhoan, matkhau) => { dispatch(loginActions(taikhoan, matkhau)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenScreen)