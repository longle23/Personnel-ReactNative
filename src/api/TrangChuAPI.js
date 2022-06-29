const URL_Login = 'https://ihrp2.fis.vn/bke_v33_standard_poc/api/v1/custom/getuser2'

export function callAPITrangChu() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Stoken: getToken(),
            LangID: '1',
            OS: '1',
            AppVersion: 'version'
        })
    }
    return fetch(URL_Login, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log("Error: ", error))

}