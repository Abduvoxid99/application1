import {CHANGE_SCREEN, ERROR_RECEIVED,} from "../types"

const defaultState = {
    error: false,
    showScreen: "main"
}

const reducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ERROR_RECEIVED:
            return {
                ...state,
                error: true,
                error_note: payload.error_note,
                error_code: payload.error_code
            }
        case CHANGE_SCREEN:
            return {
                ...state,
                showScreen: payload
            }
        default:
            return state
    }
}

export default reducer
