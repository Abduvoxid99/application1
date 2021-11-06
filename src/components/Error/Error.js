import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Button} from "antd"

import {tokens} from "../../tokens"
import {CHANGE_SCREEN} from "../../redux/types"
//images
import Close from "../../images/Close.png"

import "./error.scss"
import {lang, translate} from "../../LanguagesContext"

const Error = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const {error_code} = useSelector(state => state.meta)
    const {isToken,token} = useSelector(state => state.application)
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const ctoken = isToken ? token : tokens.ctoken

        useEffect(() => {
        switch (true) {
            case error_code === -50 :
                setTitle(`${translate("errorDataTitle")}`)
                setNote(`${translate("errorDataText")}`)
                break
            case error_code === -55 :
                setTitle(`${translate("errorIdentifyTitle")}`)
                setNote(`${translate("errorIdentifyText")}`)
                break
            default:
                setTitle(`${translate("oopsErrorTitle")}`)
                setNote(`${translate("oopsErrorText")}`)
        }
    }, [error_code])

    const handleClick = () => {
            [-50, -55].includes(error_code) ? dispatch({type: CHANGE_SCREEN, payload: "main"}) :
            window.location.replace(`${window.location.origin}/hamkor-store?lang=${lang}&ctoken=${ctoken}&oauth=${tokens.oauth}`)
    }

    return (
        <div className=" error_main">
            <div className="error_contain">
                <img src={Close} alt="error message"/> <br/>
                <h3 className="error_title">{title}</h3>
                <p className="error_note_message">{note}</p>
            </div>

            <div className="navigation_btn" onClick={()=> {
                setLoading(true)
                handleClick()
            }}>
                <Button
                    loading={loading}
                    className="next-btn">
                    Назад
                </Button>
            </div>

        </div>
    )
}
export default Error

