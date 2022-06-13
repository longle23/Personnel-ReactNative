const URL_Login = 'https://ihrp2.fis.vn/bke_v33_standard_poc/api/v1/login'

export const callAPILogin = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'admin.fpt2',
            Password: '123456A@a',
            OS: '1',
            DeviceID: 'otiur08lf89756fdifdifjdf[dufd',
            Version: 25,
            LangID: 'VN'
        })
    }
    fetch(URL_Login, requestOptions)
        .then(response => response.json())
        .then(data => console.log('res: ', data));
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

// const callAPILogin = () => {
//     console.log("Calling API Login")
//     axios.post(URL_Login, {
//         username: 'admin.fpt2',
//         Password: '123456A@a',
//         OS: '1',
//         DeviceID: 'otiur08lf89756fdifdifjdf[dufd',
//         Version: 25,
//         LangID: 'VN'
//     })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }