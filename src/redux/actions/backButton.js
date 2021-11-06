import {CHANGE_SCREEN} from "../types";

export const backToMain = () =>{return ({type: CHANGE_SCREEN, payload: "main"})}

export const toOnboarding = () =>{return ({type: CHANGE_SCREEN, payload: "onboarding"})}

export const toUserData = () =>{return ({type: CHANGE_SCREEN, payload: "user_data"})}

