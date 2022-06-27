import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../reducers/loginReducer"
import {callAPILogin} from "../../api/AuthenAPI"

export  default  loginActions = (taikhoan, matkhau) => {
    return async (dispatch) => {
        dispatch(loginLoading())
        // console.log('tk mk action: ', taikhoan, matkhau)

        // const res = await callAPILogin(taikhoan, matkhau)
        // if(res.code === true){
        //     console.log('data',res)
        // }
       
        const res = await callAPILogin(taikhoan, matkhau)
            .then(login_success => { dispatch(loginSuccess(login_success)) })
            .catch(login_error => { dispatch(loginError(login_error)) })
        }
}

const loginLoading = () => ({
    type: LOGIN_LOADING
})

const loginSuccess = (login_success) => ({
    type: LOGIN_SUCCESS,
    payload: { login_success }
})

const loginError = (login_error) => ({
    type: LOGIN_ERROR,
    payload: { login_error }
})