import React, {useEffect, useState} from 'react'

//components
import api from "../../redux/api"
import {translate} from "../../LanguagesContext"
import Loading from "../Loading/Loading"
//images
import icon_download from "../../icons/Icon.png"

import "./agree.scss"


const Agree = () => {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.offerText()
            .then(res => {
                setText(res.data)
                setLoading(false)
            })
            .catch(err=>console.log(err))
    }, [])

    return (
        <div className="agree_main">
            <div className="agree">
                <h3 className="agree_title">{translate("modalTitle")}</h3>
                <p className="agree_text">
                    {loading ? <Loading/> : text}
                </p>
            </div>
            <div className="download_oferta">
                <img src={icon_download} alt="icon download"/>
                <a href={`${window.location.origin}/physical/onboarding/offer.pdf`}>
                    <h3>{translate("downloadAgreement")}</h3>
                </a>
            </div>
        </div>
    )
}

export default Agree