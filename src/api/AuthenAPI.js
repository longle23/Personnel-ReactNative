import axios from 'axios'
const URL_Login = 'https://ihrp2.fis.vn/bke_v33_standard_poc/api/v1/login'

export function callAPILogin(taikhoan, matkhau) {
    console.log('tk mk request API: ', taikhoan, matkhau)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: taikhoan,
            Password: matkhau,
            OS: '1',
            DeviceID: 'otiur08laf89756fdifdifjdf[dufd',
            Version: 25,
            LangID: 'VN'
        })
    }
    return fetch(URL_Login, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log("Error: ", error))
}

// const callAPILogin = async () => {
//     console.log("Calling... API Login")
//     try {
//         const res = await axios.post(URL_Login, {
//             username: 'admin.fpt2',
//             Password: '123456A@a',
//             OS: '1',
//             DeviceID: 'otiur08lf89756fdifdifjdf[dufd',
//             Version: 25,
//             LangID: 'VN'
//         })
//         setResponse(JSON.stringify(res))
//     } catch (error) {
//         setResponse(JSON.stringify(error.message))
//     }
// }

// export default callAPILogin = (taikhoan, matkhau) => {
//     console.log("Calling API Login")

//     axios.post(URL_Login, {
//         username: taikhoan,
//         Password: matkhau,
//         OS: '1',
//         DeviceID: 'otiur08lf89756fdifdifjdf[dufd',
//         Version: 25,
//         LangID: 'VN'
//     })
//         .then(response => { console.log(response) })
//         .catch(error => { console.log(error) })
// }