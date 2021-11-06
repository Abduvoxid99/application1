import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"

//components
import Header from "../../components/Header/Header"
import ButtonComponent from "../../components/Button/Button"

import {toUserData} from "../../redux/actions/backButton"
import {checkOtp} from "../../redux/actions/application"

import "./smsPage.scss"
import {translate} from "../../LanguagesContext";

const SmsPage = () => {

    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState('')
    const [disable, setDisable] = useState(true)
    const {personalData} = useSelector(state => state.application)
    const {sign_id} = useSelector(state => state.application)
    const dispatch = useDispatch()
    const ref = useRef()

    useEffect(()=>{
        ref.current.value.length === 0 && ref.current.focus()
    },[])

    const postCode = () => {
        setLoading(true)
        const params = {
            ctoken: personalData.token,
            code,
            sign_id
        }
        dispatch(checkOtp(params))
    }

    return (
        <div className="main_style sms_body">
            <Header title={translate("enterText")} handleClick={()=>dispatch(toUserData())}/>

            <div className="sms_code">
                <p style={{paddingTop: '12px', paddingLeft: '16px', marginBottom: 0}}>{translate("enterSms")}</p>
                <input
                    ref={ref}
                    disabled={loading}
                    className="sms_typing"
                    maxLength="6"
                    value={code}
                    onChange={e => {
                        setCode(e.target.value)
                        e.target.value.length === 6 ? setDisable(false) : setDisable(true)
                    }}
                    placeholder="000000"
                />
            </div>
            <div className="sms_text">
                {translate("messageSms")}
            </div>
            <ButtonComponent
                isLoading={loading}
                isDisabled={disable}
                text={translate("continue")}
                handleClick={postCode}
                back_class="loading_btn"
            />
        </div>
    );
};

export default SmsPage