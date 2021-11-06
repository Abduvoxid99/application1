import api from "../api"
import {ERROR_RECEIVED, GET_USER, GET_CONFIRM, CHANGE_SCREEN} from "../types"
import {tokens} from "../../tokens"
import {batch} from "react-redux"
import {lang} from "../../LanguagesContext"

export const getUserData = (params) => dispatch => {
    return api.getUser(params)
        .then((res) => {
            return batch(() => {
                dispatch({type: GET_USER, payload: res.data.data})
                dispatch({type: CHANGE_SCREEN, payload: "user_data"})
            })
        })
        .catch((err) => {
            dispatch({type: ERROR_RECEIVED, payload: err.response.data})
        })
}

export const confirmAction = (ctoken) => dispatch => {
    return api.confirm(ctoken)
        .then((res) => {
           return batch(()=>{
               dispatch({type: GET_CONFIRM, payload: res.data.data.sign_id})
               dispatch({type: CHANGE_SCREEN, payload: "sms"})
           })
        })
        .catch((err) => {
            dispatch({
                type: ERROR_RECEIVED,
                payload: err.response.data
            })
        })
}

export const checkOtp = (params) => dispatch => {
    return api.checkOtp(params)
        .then((res) => {
            window.location.replace(`${window.location.origin}/physical/debit-card?lang=${lang}&ctoken=${res.data.data.ctoken}&oauth=${tokens.oauth}`)
        })
        .catch((err) => {
            dispatch({
                type: ERROR_RECEIVED,
                payload: err.response.data
            })
        })
}

