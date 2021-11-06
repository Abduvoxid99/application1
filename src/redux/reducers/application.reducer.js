import {GET_CONFIRM, GET_USER} from "../types";

const initialState = {
    sign_id: "",
    personalData: {},
    isToken: false,
    token: ""
}

export const application = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CONFIRM:
            return {
                ...state,
                sign_id: payload
            }
        case GET_USER:
            return {
                ...state,
                personalData: payload,
                isToken: true,
                token: payload.token
            }
        default:
            return state
    }
}



