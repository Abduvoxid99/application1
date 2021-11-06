import axios from "axios"

let httpClient = null

const {REACT_APP_API_ROOT} = process.env


const api = () => {
    if (!httpClient) {
        const urlParams = new URLSearchParams(window.location.search)
        const accessToken = urlParams.get("oauth")
        const ctoken = urlParams.get("ctoken")
        const instance = axios.create({
            baseURL: REACT_APP_API_ROOT,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        httpClient = {
            getUser: (params) => instance.post(`/physical?ctoken=${ctoken}`, params),
            confirm: (ctoken) => instance.get(`/confirm?ctoken=${ctoken}`),
            checkOtp: ({sign_id, code, ctoken}) => instance.post(`/check-otp?ctoken=${ctoken}`, {sign_id, code}),
            offerText: () => axios.get(`${process.env.PUBLIC_URL}/offer.txt`)
        }
    }
    return httpClient
}

export default api()