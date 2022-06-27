export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

// Tạo các trường thông tin, đang ở trạng thái ban đầu
const initialState = {
    login_loading: false,
    login_success: [],
    login_error: ''
}

// Truyen vao trạng thái ban đầu và payload: nhung thong tin se cap nhat moi cho State ban đầu
export const loginReducer = (state = initialState, action) => {
    // Payload chứa thông tin muốn thay đổi và Type hành động muốn làm gì

    console.log('-login reducers state: ', state)
    console.log('--login reducer action: ', action)
    
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                // State cũ
                login_success: [],
                login_error: '',
                // Mới
                login_loading: true
            }
        case LOGIN_SUCCESS:
            return {
                login_loading: false,
                login_error: '',

                login_success: action.payload.login_success,
            }
        case LOGIN_ERROR:
            return {
                login_loading: false,
                login_success: [],

                login_error: action.payload.login_error
            }

        // Return State hiện tại
        default:
            return state
    }
}